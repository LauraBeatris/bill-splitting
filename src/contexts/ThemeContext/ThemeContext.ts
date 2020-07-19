import { useContext } from "react";
import { ThemeContext, DefaultTheme } from "styled-components";

export const useTheme = (): DefaultTheme => useContext(ThemeContext);
