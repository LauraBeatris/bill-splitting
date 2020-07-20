import React from "react";
import { View } from "react-native";
import { Modal, InputItem, Button } from "@ant-design/react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Title } from "../../styles/components/Typography";
import { Content, styles } from "./styles";

interface AddUserPopupProps {
  isPopupOpen: boolean;
  onClose: () => void;
}

const AddUserPopup: React.FC<AddUserPopupProps> = ({
  isPopupOpen,
  onClose,
}) => (
  <Modal
    popup
    visible={isPopupOpen}
    animationType="slide-up"
    onClose={onClose}
  >
    <Content>
      <Title style={styles.title}>Add user</Title>
      <InputItem
        placeholder="User name"
        clear
        style={styles.inputItem}
      >
        User name
      </InputItem>

      <Button type="primary" style={styles.submitButton} onPress={onClose}>
        <Icon name="plus" />
      </Button>
    </Content>
  </Modal>
);

export default AddUserPopup;
