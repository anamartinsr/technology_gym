import { describe, it, expect } from "vitest";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

describe("check-client-secrets script", () => {
  it("fails when a known secret pattern is present in frontend files", () => {
    const workspace = mkdtempSync(join(tmpdir(), "tech-gym-secrets-"));
    mkdirSync(join(workspace, "src"), { recursive: true });
    writeFileSync(
      join(workspace, "src", "leak.ts"),
      'const awsKey = "AKIA1234567890ABCDEF";\n',
      "utf8",
    );

    const scriptPath = resolve(
      process.cwd(),
      "scripts/check-client-secrets.mjs",
    );

    let error;
    try {
      execFileSync(process.execPath, [scriptPath], {
        cwd: workspace,
        encoding: "utf8",
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.status).toBe(1);
    expect(String(error.stderr)).toContain("Possible secret exposure detected");
  });
});
