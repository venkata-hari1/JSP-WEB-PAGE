"use client";

import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "../components/Redux/Store/store";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; 

export function Styledroot({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </I18nextProvider>

    </Provider>
  );
}
