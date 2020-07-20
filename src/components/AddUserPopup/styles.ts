import styled from "styled-components/native";
import { StyleSheet, Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Content = styled.View`
  padding: 20px;
  flex: 1;
  align-items: center;
  padding: 20px 20px ${Platform.OS === "ios" && `${getBottomSpace()}px`};
`;

export const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  submitButton: {
    marginLeft: "auto",
    flex: 1,
    width: "100%",
    marginTop: 40,
  },
  inputItem: {
    marginTop: 40,
    marginBottom: 40,
  },
});
