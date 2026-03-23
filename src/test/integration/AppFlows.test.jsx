import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import toast from "react-hot-toast";
import { describe, it, expect, beforeEach, vi } from "vitest";

import AppRoutes from "@/routes";
import { UI_TEXT } from "@/constants/uiText";

vi.mock("react-hot-toast", () => ({
  default: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

function renderWithRoute(route) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("App flows integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("carrega rota de matrícula e exibe o formulário", async () => {
    renderWithRoute("/enrollment");

    expect(
      await screen.findByText(UI_TEXT.enrollment.title),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: UI_TEXT.cta.confirmEnrollment }),
    ).toBeInTheDocument();
  });

  it("exibe erro de validação ao tentar enviar matrícula vazia", async () => {
    const user = userEvent.setup();
    renderWithRoute("/enrollment");

    await user.click(
      await screen.findByRole("button", {
        name: UI_TEXT.cta.confirmEnrollment,
      }),
    );

    expect(
      await screen.findByText("Nome deve ter no mínimo 10 caracteres"),
    ).toBeInTheDocument();
    expect(screen.getByText("Informe o CPF válido")).toBeInTheDocument();
    expect(screen.getByText("Aceite os termos")).toBeInTheDocument();
    expect(screen.getByText("Aceite a política")).toBeInTheDocument();
    expect(toast.success).not.toHaveBeenCalled();
  });

  it("completa fluxo com sucesso e navega para confirmação", async () => {
    const user = userEvent.setup();
    renderWithRoute("/enrollment");

    await user.type(
      await screen.findByLabelText("Nome Completo"),
      "Ana Maria Santos",
    );
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

    expect(
      await screen.findByText(
        UI_TEXT.confirmation.title,
        {},
        { timeout: 3000 },
      ),
    ).toBeInTheDocument();
  }, 10000);

  it("renderiza página 404 para rota inexistente", async () => {
    renderWithRoute("/rota-inexistente");

    expect(
      await screen.findByText("Página não encontrada."),
    ).toBeInTheDocument();
  });
});
