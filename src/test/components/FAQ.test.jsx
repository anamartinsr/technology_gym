import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQ from "@/components/Sections/Faq";
import { describe, expect, it } from "vitest";

describe("FAQ section", () => {
  it("expõe atributos acessíveis e alterna resposta ao clicar", async () => {
    const user = userEvent.setup();
    render(<FAQ />);

    const questionButton = screen.getByRole("button", {
      name: "Preciso pagar taxa de matrícula?",
    });

    expect(questionButton).toHaveAttribute("aria-expanded", "false");

    await user.click(questionButton);

    expect(questionButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("region", {
        name: "Preciso pagar taxa de matrícula?",
      }),
    ).toBeInTheDocument();

    await user.click(questionButton);

    expect(questionButton).toHaveAttribute("aria-expanded", "false");
  });
});
