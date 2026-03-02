import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/index";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#000000",
            color: "#ffffff",
            border: "1px solid #333333",
          },
          success: {
            duration: 3000,
            style: {
              background: "#000000",
              color: "#ffffff",
            },
            iconTheme: {
              primary: "#9cff1e",
              secondary: "#000000",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "#000000",
              color: "#ffffff",
            },
            iconTheme: {
              primary: "#ff1e1e",
              secondary: "#000000",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
