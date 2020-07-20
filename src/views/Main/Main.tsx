import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  Content,
  BackgroundImage,
  styles,
} from "./styles";
import { Title } from "../../styles/components/Typography";
import Button from "../../components/Button/Button";
import AddUserPopup from "../../components/AddUserPopup/AddUserPopup";

const Main: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = (): void => {
    setIsPopupOpen(prev => !prev);
  };

  return (
    <BackgroundImage
      style={styles.backgroundImage}
      // eslint-disable-next-line global-require
      source={require("../../assets/background.png")}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Container>
          <Content>
            <Title fontSize={32}>
              Bill Splitting
            </Title>
          </Content>

          <Button onPress={togglePopup}>
            <Icon name="plus" size={24} />
          </Button>
        </Container>
        <AddUserPopup isPopupOpen={isPopupOpen} onClose={togglePopup} />
      </KeyboardAvoidingView>
    </BackgroundImage>
  );
};

export default Main;
