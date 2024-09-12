import { createContext, Dispatch, SetStateAction } from "react";


const TypeThemeContextState = {
  isDark: false,
  setIsDark: () => false,

  isSidebarOpen: true,
  setIsSidebarOpen: () => true
};


export type TypeThemeContext = {
  isDark: Boolean,
  setIsDark: Dispatch<SetStateAction<Boolean>>,

  isSidebarOpen: Boolean,
  setIsSidebarOpen: Dispatch<SetStateAction<Boolean>>
};

export const ThemeContext = createContext<TypeThemeContext>(TypeThemeContextState);