import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Feedback from "@/components/Sections/Feedback";
import { beforeAll, describe, expect, it, vi } from "vitest";

beforeAll(() => {
  Element.prototype.scrollTo = vi.fn();
});

describe("Feedback section", () => {
  it("renderiza dots de navegação e atualiza estado ativo ao clicar", async () => {
    const user = userEvent.setup();
    render(<Feedback />);

    const dots = screen.getAllByRole("button", { name: /Ir para depoimento/i });

    expect(dots.length).toBeGreaterThan(1);
    expect(dots[0]).toHaveAttribute("aria-pressed", "true");

    await user.click(dots[1]);

    expect(dots[1]).toHaveAttribute("aria-pressed", "true");
  });
});
