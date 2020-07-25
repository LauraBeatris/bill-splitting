import React from "react";
import { Provider as AntThemeProvider } from "@ant-design/react-native";
import { ThemeProvider } from "styled-components";
import EStyleSheet from "react-native-extended-stylesheet";

import antTheme from "../../styles/antTheme";
import theme from "../../styles/theme";

EStyleSheet.build({
  $darkColor: theme.colors.dark,
});

const ThemeContainer: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AntThemeProvider theme={antTheme}>
      {children}
    </AntThemeProvider>
  </ThemeProvider>
);

export default ThemeContainer;
