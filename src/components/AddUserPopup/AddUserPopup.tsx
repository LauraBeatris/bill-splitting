import React from "react";
import { InputItem, Button } from "@ant-design/react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Title } from "../../styles/components/Typography";
import { styles } from "./styles";

interface AddUserPopupProps {
  hidePopup: () => void;
}

const AddUserPopup: React.FC<AddUserPopupProps> = ({
  hidePopup,
}) => (
  <>
    <Title style={styles.title}>Add user</Title>
    <InputItem
      placeholder="User name"
      clear
      style={styles.inputItem}
    >
      User name
    </InputItem>

    <Button type="primary" style={styles.submitButton} onPress={hidePopup}>
      <Icon name="plus" />
    </Button>
  </>
);

export default AddUserPopup;
