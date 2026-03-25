import { describe, it, expect } from "vitest";
import { enrollmentSchema } from "@/schemas/enrollmentSchema";

const validPayload = {
  fullName: "Ana Maria Santos",
  cpf: "529.982.247-25",
  dob: "2000-01-01",
  phone: "(11) 99999-9999",
  email: "ana@email.com",
  plan: "fitness",
  terms: true,
  privacy: true,
};

describe("enrollmentSchema security abuse", () => {
  it("rejects malicious and malformed payloads", () => {
    const cases = [
      {
        label: "xss-like full name",
        field: "fullName",
        payload: { ...validPayload, fullName: "<script>alert(1)</script>" },
      },
      {
        label: "crlf email injection",
        field: "email",
        payload: {
          ...validPayload,
          email: "ana@email.com\r\nBcc:evil@attacker.com",
        },
      },
      {
        label: "invalid cpf digits",
        field: "cpf",
        payload: { ...validPayload, cpf: "111.111.111-11" },
      },
      {
        label: "future date",
        field: "dob",
        payload: { ...validPayload, dob: "2999-01-01" },
      },
      {
        label: "consent bypass",
        field: "terms",
        payload: { ...validPayload, terms: false },
      },
    ];

    for (const testCase of cases) {
      const result = enrollmentSchema.safeParse(testCase.payload);

      expect(result.success, testCase.label).toBe(false);

      if (!result.success) {
        expect(
          result.error.issues.some((issue) => issue.path[0] === testCase.field),
        ).toBe(true);
      }
    }
  });
});
