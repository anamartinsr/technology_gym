import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import toast from "react-hot-toast";
import { describe, it, beforeEach, expect, vi } from "vitest";
import EnrollmentForm from "@/components/form/EnrollmentForm";
import { UI_TEXT } from "@/constants/uiText";

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

describe("EnrollmentForm security bypass", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("blocks submission when fields are tampered programmatically", async () => {
    const user = userEvent.setup();
    render(<EnrollmentForm />);

    fireEvent.change(screen.getByLabelText("Nome Completo"), {
      target: { value: "<script>alert(1)</script>" },
    });
    fireEvent.change(screen.getByLabelText("CPF"), {
      target: { value: "11111111111" },
    });
    fireEvent.change(screen.getByLabelText("Telefone"), {
      target: { value: "abcd" },
    });

    await user.type(screen.getByLabelText("Data de Nascimento"), "2000-01-01");
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

    expect(await screen.findByText("Informe o CPF válido")).toBeInTheDocument();
    expect(screen.getByText("Informe um telefone válido")).toBeInTheDocument();
    expect(toast.success).not.toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
