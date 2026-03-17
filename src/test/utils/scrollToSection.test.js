import { scrollToSection } from "@/utils/scrollToSection";
import { describe, it, expect, vi } from "vitest";

describe("scrollToSection", () => {
  it("faz scroll suave quando elemento existe", () => {
    const target = document.createElement("div");
    target.id = "plan";
    const scrollIntoViewMock = vi.fn();
    target.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(target);

    scrollToSection(null, "#plan");

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });

    document.body.removeChild(target);
  });

  it("executa preventDefault e fecha menu quando informado", () => {
    const preventDefault = vi.fn();
    const setOpen = vi.fn();

    scrollToSection({ preventDefault }, "#nao-existe", setOpen);

    expect(preventDefault).toHaveBeenCalled();
    expect(setOpen).toHaveBeenCalledWith(false);
  });
});
