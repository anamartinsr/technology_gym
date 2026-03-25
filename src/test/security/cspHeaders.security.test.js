import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("security headers regression", () => {
  it("keeps strong Content-Security-Policy directives in vercel.json", () => {
    const vercelConfig = JSON.parse(
      readFileSync(resolve(process.cwd(), "vercel.json"), "utf8"),
    );

    const cspHeader = vercelConfig.headers
      .flatMap((entry) => entry.headers)
      .find((header) => header.key === "Content-Security-Policy");

    expect(cspHeader).toBeDefined();

    const csp = cspHeader.value;
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).toContain("form-action 'self'");
  });
});
