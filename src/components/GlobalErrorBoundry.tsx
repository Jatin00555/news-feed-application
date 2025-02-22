import { useState, useEffect, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const GlobalErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error("Global UI Error Caught:", event.error);
      setHasError(true);
    };

    const handlePromiseRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled Promise Rejection:", event.reason);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handlePromiseRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handlePromiseRejection);
    };
  }, []);

  if (hasError) {
    return <h2>Something went wrong. Please try again later.</h2>;
  }

  return <>{children}</>;
};

export default GlobalErrorBoundary;
