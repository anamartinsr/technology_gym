const OBSERVABILITY_STORAGE_KEY = "technology-gym-observability-events";

type RuntimeErrorSource =
  | "error-boundary"
  | "window-error"
  | "unhandled-rejection";

type EnrollmentStage =
  | "personal-data"
  | "contact"
  | "plan-selection"
  | "consent";

type ObservabilityEventName =
  | "runtime_error"
  | "enrollment_submit_attempt"
  | "enrollment_submit_invalid"
  | "enrollment_submit_success"
  | "enrollment_submit_error"
  | "enrollment_stage_interaction"
  | "enrollment_abandonment";

interface ObservabilityEvent {
  name: ObservabilityEventName;
  timestamp: string;
  payload?: Record<string, unknown>;
}

declare global {
  interface Window {
    __TECH_GYM_OBSERVABILITY__?: ObservabilityEvent[];
  }
}

function safeStringifyError(value: unknown): string {
  if (value instanceof Error) {
    return `${value.name}: ${value.message}`;
  }

  if (typeof value === "string") {
    return value;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return "Unknown error";
  }
}

function readStoredEvents(): ObservabilityEvent[] {
  if (typeof window === "undefined") return [];

  const fromMemory = window.__TECH_GYM_OBSERVABILITY__;
  if (fromMemory) return fromMemory;

  const raw = window.localStorage.getItem(OBSERVABILITY_STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStoredEvents(events: ObservabilityEvent[]) {
  if (typeof window === "undefined") return;

  window.__TECH_GYM_OBSERVABILITY__ = events;
  window.localStorage.setItem(
    OBSERVABILITY_STORAGE_KEY,
    JSON.stringify(events),
  );
}

export function trackEvent(
  name: ObservabilityEventName,
  payload?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;

  const nextEvent: ObservabilityEvent = {
    name,
    timestamp: new Date().toISOString(),
    payload,
  };

  const currentEvents = readStoredEvents();
  const nextEvents = [...currentEvents, nextEvent];

  writeStoredEvents(nextEvents);

  if (import.meta.env.DEV) {
    console.info("[Observability]", nextEvent);
  }
}

export function trackEnrollmentStageInteraction(stage: EnrollmentStage) {
  trackEvent("enrollment_stage_interaction", { stage });
}

export function trackEnrollmentAbandonment(
  lastStage: EnrollmentStage,
  touchedStages: EnrollmentStage[],
) {
  trackEvent("enrollment_abandonment", {
    lastStage,
    touchedStages,
    touchedCount: touchedStages.length,
  });
}

export function captureRuntimeError(
  source: RuntimeErrorSource,
  error: unknown,
  metadata?: Record<string, unknown>,
) {
  trackEvent("runtime_error", {
    source,
    message: safeStringifyError(error),
    ...metadata,
  });
}

export function setupRuntimeErrorTracking() {
  if (typeof window === "undefined") return;

  window.addEventListener("error", (event) => {
    captureRuntimeError("window-error", event.error ?? event.message, {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  window.addEventListener("unhandledrejection", (event) => {
    captureRuntimeError("unhandled-rejection", event.reason);
  });
}

export type { EnrollmentStage, ObservabilityEvent, ObservabilityEventName };
