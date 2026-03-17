const STORAGE_KEY = "technology-gym-web-vitals";

const WEB_VITALS_BASELINE = {
  FCP: { good: 1800, needsImprovement: 3000 },
  LCP: { good: 2500, needsImprovement: 4000 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  TTFB: { good: 800, needsImprovement: 1800 },
} as const;

type MetricName = keyof typeof WEB_VITALS_BASELINE;

interface WebVitalMetric {
  name: MetricName;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  timestamp: string;
}

declare global {
  interface Window {
    __TECH_GYM_WEB_VITALS__?: WebVitalMetric[];
  }
}

function getRating(name: MetricName, value: number): WebVitalMetric["rating"] {
  const baseline = WEB_VITALS_BASELINE[name];

  if (value <= baseline.good) return "good";
  if (value <= baseline.needsImprovement) return "needs-improvement";
  return "poor";
}

function persistMetric(name: MetricName, value: number) {
  const metric: WebVitalMetric = {
    name,
    value: Number(value.toFixed(name === "CLS" ? 3 : 0)),
    rating: getRating(name, value),
    timestamp: new Date().toISOString(),
  };

  const current = window.__TECH_GYM_WEB_VITALS__ ?? [];
  const next = [...current.filter((item) => item.name !== name), metric];

  window.__TECH_GYM_WEB_VITALS__ = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

  if (import.meta.env.DEV) {
    console.info("[WebVitals baseline]", metric);
  }
}

export function startWebVitalsBaselineTracking() {
  if (
    typeof window === "undefined" ||
    typeof PerformanceObserver === "undefined"
  ) {
    return;
  }

  const navigationEntry = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;

  if (navigationEntry) {
    persistMetric("TTFB", navigationEntry.responseStart);
  }

  try {
    const paintObserver = new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        if (entry.name === "first-contentful-paint") {
          persistMetric("FCP", entry.startTime);
        }
      });
    });

    paintObserver.observe({ type: "paint", buffered: true });
  } catch {
    // Paint observer not supported.
  }

  try {
    let lcpValue = 0;
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        lcpValue = lastEntry.startTime;
      }
    });

    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

    const finalizeLcp = () => {
      if (lcpValue > 0) {
        persistMetric("LCP", lcpValue);
      }
      lcpObserver.disconnect();
      document.removeEventListener("visibilitychange", finalizeLcp);
    };

    document.addEventListener("visibilitychange", finalizeLcp, { once: true });
  } catch {
    // LCP observer not supported.
  }

  try {
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        const layoutShift = entry as PerformanceEntry & {
          value?: number;
          hadRecentInput?: boolean;
        };
        if (
          !layoutShift.hadRecentInput &&
          typeof layoutShift.value === "number"
        ) {
          clsValue += layoutShift.value;
        }
      });

      persistMetric("CLS", clsValue);
    });

    clsObserver.observe({ type: "layout-shift", buffered: true });
  } catch {
    // CLS observer not supported.
  }
}
