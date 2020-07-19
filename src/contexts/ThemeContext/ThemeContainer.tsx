import React from "react";
import { Provider as AntThemeProvider } from "@ant-design/react-native";
import { ThemeProvider } from "styled-components";

import antTheme from "../../styles/antTheme";
import theme from "../../styles/theme";

const ThemeContainer: React.FC = ({ children }) => (
  <AntThemeProvider theme={antTheme}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </AntThemeProvider>
);

export default ThemeContainer;
