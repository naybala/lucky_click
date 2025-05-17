// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "../context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
