"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { GlobalContextProvider } from "../context/GLobal_context";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </NextThemesProvider>
  );
}


