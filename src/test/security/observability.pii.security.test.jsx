import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import toast from "react-hot-toast";
import EnrollmentForm from "@/components/form/EnrollmentForm";
import { UI_TEXT } from "@/constants/uiText";
import { describe, it, expect, beforeEach, vi } from "vitest";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

vi.mock("react-hot-toast", () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("observability PII guard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.clear();
  });

  it("does not persist enrollment PII in tracked event payloads", async () => {
    const user = userEvent.setup();
    render(<EnrollmentForm />);

    await user.type(screen.getByLabelText("Nome Completo"), "Ana Maria Santos");
    await user.type(screen.getByLabelText("CPF"), "52998224725");
    await user.type(screen.getByLabelText("Data de Nascimento"), "2000-01-01");
    await user.type(screen.getByLabelText("Telefone"), "11999999999");
    await user.type(screen.getByLabelText("Email"), "ana@email.com");
    await user.selectOptions(
      screen.getByLabelText("Confirme seu plano"),
      "fitness",
    );
    await user.click(screen.getByLabelText("Aceito os termos"));
    await user.click(screen.getByLabelText("Aceito a política"));

    await user.click(
      screen.getByRole("button", { name: UI_TEXT.cta.confirmEnrollment }),
    );

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        UI_TEXT.enrollment.successToast,
      );
    });

    const raw = window.localStorage.getItem(
      "technology-gym-observability-events",
    );
    expect(raw).toBeTruthy();

    const serialized = raw ?? "";
    expect(serialized).not.toContain("529.982.247-25");
    expect(serialized).not.toContain("52998224725");
    expect(serialized).not.toContain("ana@email.com");
    expect(serialized).not.toContain("Ana Maria Santos");
    expect(serialized).not.toContain("(11) 99999-9999");
  });
});
