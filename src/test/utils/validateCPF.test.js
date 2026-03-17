import { validateCPF } from "@/utils/validateCPF";
import { describe, it, expect } from "vitest";

describe("validateCPF", () => {
  it("retorna true para CPF válido", () => {
    expect(validateCPF("529.982.247-25")).toBe(true);
  });

  it("retorna false para CPF com dígitos repetidos", () => {
    expect(validateCPF("111.111.111-11")).toBe(false);
  });

  it("retorna false para CPF inválido", () => {
    expect(validateCPF("123.456.789-10")).toBe(false);
  });

  it("retorna false para tamanho inválido", () => {
    expect(validateCPF("123.456.789-1")).toBe(false);
  });
});
