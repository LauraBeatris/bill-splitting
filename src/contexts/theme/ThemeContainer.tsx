import React from "react";
import { Provider as AntThemeProvider } from "@ant-design/react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { ThemeProvider } from "../../settings/styled-components";
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
