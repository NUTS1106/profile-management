import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { useDarkMode, ThemeContext } from "./hooks/useDarkMode";
import { ThemeProvider } from "styled-components";
import { userStore } from "./store/redux";
import App from "./App";
import { lightTheme } from "./theme/light";
import { darkTheme } from "./theme/dark";
import GlobalStyle from "./theme/GlobalStyle";

const queryClient = new QueryClient();

function ClientWrapper() {
  const [isDark, toggleIsDark] = useDarkMode();

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={userStore}>
        <ThemeContext.Provider value={{ isDark, toggleIsDark }}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </ThemeContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
}

export default ClientWrapper;
