import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 70px;
  padding-top: 40px;
  flex: 1;
`;

export const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.dark,
  },
  column: {
    width: "75%",
  },
  fullWidth: {
    width: "100%",
  },
});
