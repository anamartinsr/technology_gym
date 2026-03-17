import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { startWebVitalsBaselineTracking } from "@/utils/webVitals";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

startWebVitalsBaselineTracking();
