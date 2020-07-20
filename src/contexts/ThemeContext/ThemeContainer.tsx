import React from "react";
import { Provider as AntThemeProvider } from "@ant-design/react-native";
import { ThemeProvider } from "styled-components";

import antTheme from "../../styles/antTheme";
import theme from "../../styles/theme";

const ThemeContainer: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AntThemeProvider theme={antTheme}>
      {children}
    </AntThemeProvider>
  </ThemeProvider>
);

export default ThemeContainer;
