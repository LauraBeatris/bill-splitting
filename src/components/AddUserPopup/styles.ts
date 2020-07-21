import { StyleSheet, Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  submitButton: {
    marginLeft: "auto",
    width: "100%",
    marginTop: 40,
    marginBottom: Platform.OS === "ios" ? getBottomSpace() : 0,
    height: 40,
  },
  inputItem: {
    marginTop: 40,
    marginBottom: 40,
  },
});
