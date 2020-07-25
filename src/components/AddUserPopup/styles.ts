import { getBottomSpace } from "react-native-iphone-x-helper";
import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
  $submitButtonHeight: 40,
  title: {
    marginBottom: 20,
  },
  submitButton: {
    marginLeft: "auto",
    width: "100%",
    marginTop: "$submitButtonHeight",
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
