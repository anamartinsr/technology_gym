import { formatCPF, formatName, formatPhone } from "@/utils/formatters";
import { describe, it, expect } from "vitest";

describe("formatters", () => {
  it("remove números do nome", () => {
    expect(formatName("Ana123 Martins45")).toBe("Ana Martins");
  });

  it("formata CPF corretamente", () => {
    expect(formatCPF("52998224725")).toBe("529.982.247-25");
    expect(formatCPF("529.982abc247-25xyz")).toBe("529.982.247-25");
  });

  it("formata telefone corretamente", () => {
    expect(formatPhone("11999999999")).toBe("(11) 99999-9999");
    expect(formatPhone("11abc999999999")).toBe("(11) 99999-9999");
  });
});
