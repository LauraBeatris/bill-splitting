import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const PopupContent = styled.View`
  background-color: white;
  padding: 22px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
