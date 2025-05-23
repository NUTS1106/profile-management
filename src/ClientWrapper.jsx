import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ThemeContext } from "./hooks/useDarkMode";
import { ThemeProvider } from "styled-components";
import { userStore } from "./store/redux";
import App from "./App";
import { useEffect, useState } from "react";
import { lightTheme } from "./theme/light";
import { darkTheme } from "./theme/dark";

const queryClient = new QueryClient();

function ClientWrapper() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("isDark");
    return saved === "true";
  });

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={userStore}>
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ThemeContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
}

export default ClientWrapper;
