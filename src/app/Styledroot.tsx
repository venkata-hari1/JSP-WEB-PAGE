"use client";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import {store} from '../components/Redux/Store/store'
export function Styledroot({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return(
  <Provider store={store}>
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>)
}