import * as styledComponents from "styled-components/native";

import { ThemeTypes } from "../styles/theme";

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeTypes>;

export { css, ThemeProvider };
export default styled;
