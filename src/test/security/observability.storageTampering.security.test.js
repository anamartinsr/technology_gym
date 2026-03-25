import { describe, it, expect, beforeEach } from "vitest";
import { trackEvent } from "@/utils/observability";

describe("observability storage tampering", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("recovers gracefully from poisoned localStorage payload", () => {
    window.localStorage.setItem(
      "technology-gym-observability-events",
      "{malformed-json",
    );

    expect(() => {
      trackEvent("enrollment_submit_attempt", { touchedCount: 1 });
    }).not.toThrow();

    const stored = window.localStorage.getItem(
      "technology-gym-observability-events",
    );
    const parsed = JSON.parse(stored ?? "[]");

    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed).toHaveLength(1);
    expect(parsed[0].name).toBe("enrollment_submit_attempt");
  });
});
