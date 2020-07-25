import styled from "styled-components/native";
import EStyleSheet from "react-native-extended-stylesheet";

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

export const styles = EStyleSheet.create({
  $rowWidth: "100%",
  input: {
    borderColor: "$darkColor",
  },
  row: {
    width: "$rowWidth",
  },
  column: {
    width: "100%",
  },
});
