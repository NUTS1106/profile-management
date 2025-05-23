import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { userStore } from "./store/redux/index.js";
import ClientWrapper from "./ClientWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <ClientWrapper></ClientWrapper>
);
