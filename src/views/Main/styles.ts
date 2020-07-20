import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
});

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 80px;
  padding-top: 80px;
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`;
