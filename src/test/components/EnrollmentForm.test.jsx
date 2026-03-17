import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import toast from "react-hot-toast";
import EnrollmentForm from "@/components/form/EnrollmentForm";
import { UI_TEXT } from "@/constants/uiText";
import { vi, describe, it, beforeEach, expect } from "vitest";

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

describe("EnrollmentForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("exibe erros de validação ao submeter vazio", async () => {
    const user = userEvent.setup();
    render(<EnrollmentForm />);

    await user.click(
      screen.getByRole("button", { name: UI_TEXT.cta.confirmEnrollment }),
    );

    expect(
      await screen.findByText("Nome deve ter no mínimo 10 caracteres"),
    ).toBeInTheDocument();
    expect(screen.getByText("Informe o CPF válido")).toBeInTheDocument();
    expect(screen.getByText("Aceite os termos")).toBeInTheDocument();
    expect(screen.getByText("Aceite a política")).toBeInTheDocument();
  });

  it("formata CPF e telefone enquanto digita", async () => {
    const user = userEvent.setup();
    render(<EnrollmentForm />);

    const cpfInput = screen.getByLabelText("CPF");
    const phoneInput = screen.getByLabelText("Telefone");

    await user.type(cpfInput, "abc12345678901");
    await user.type(phoneInput, "(11)a99999b9999");

    expect(cpfInput).toHaveValue("123.456.789-01");
    expect(phoneInput).toHaveValue("(11) 99999-9999");
  });

  it("remove números do nome", async () => {
    const user = userEvent.setup();
    render(<EnrollmentForm />);

    const nameInput = screen.getByLabelText("Nome Completo");

    await user.type(nameInput, "Ana123 Martins");

    expect(nameInput).toHaveValue("Ana Martins");
  });

  it("submete com sucesso e navega para confirmação", async () => {
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

    await waitFor(
      () => {
        expect(navigateMock).toHaveBeenCalledWith("/confirmation");
      },
      { timeout: 3000 },
    );
  }, 10000);
});
