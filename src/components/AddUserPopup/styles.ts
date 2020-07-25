import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import EStyleSheet from "react-native-extended-stylesheet";
import { FlatList } from "react-native";

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    justifyContent: "space-between",
    flexGrow: 1,
  },
})`
  margin: 20px 0 20px;
  min-width: 100%;
  padding-bottom: 10px;
`;

export const styles = EStyleSheet.create({
  $submitButtonHeight: 40,
  title: {
    marginBottom: 20,
  },
  submitButton: {
    marginLeft: "auto",
    width: "100%",
    height: "$submitButtonHeight",
    "@media ios": {
      marginBottom: getBottomSpace(),
    },
    "@media android": {
      marginBottom: 0,
    },
  },
  inputItem: {
    marginTop: "$submitButtonHeight",
    marginBottom: "$submitButtonHeight",
  },
});
