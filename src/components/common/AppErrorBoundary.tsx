import { Component, type ErrorInfo, type ReactNode } from "react";
import { captureRuntimeError } from "@/utils/observability";

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
}

export default class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  public state: AppErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    captureRuntimeError("error-boundary", error, {
      componentStack: errorInfo.componentStack,
    });
    console.error("Erro capturado pelo AppErrorBoundary:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-(--secondary-color) p-6">
          <div className="bg-white rounded-lg p-8 max-w-xl w-full text-center shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold text-(--secondary-color) mb-3">
              Ocorreu um erro inesperado
            </h1>
            <p className="text-(--gray) mb-6">
              Não foi possível carregar esta tela no momento. Tente novamente.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="bg-(--primary-color) text-(--secondary-color) font-bold py-3 px-6 rounded-md"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
