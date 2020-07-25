import React, { useCallback } from "react";
import { InputItem, Button, WingBlank } from "@ant-design/react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import users from "../../fixtures/users";
import UserAvatar from "../UserAvatar";
import { Title } from "../../styles/components/Typography";
import { List, styles } from "./styles";

interface AddUserPopupProps {
  hidePopup: () => void;
}

const AddUserPopup: React.FC<AddUserPopupProps> = ({
  hidePopup,
}) => {
  const renderUser = useCallback(({ item }) => (
    <UserAvatar
      selectable={false}
      avatarSource={item.icon}
    />
  ), [
  ]);

  const renderListItemSeparator = useCallback(() => (
    <WingBlank size="sm" />
  ), []);

  return (
    <>
      <Title style={styles.title}>Add user</Title>
      <InputItem
        placeholder="User name"
        clear
        style={styles.inputItem}
      >
        User name
      </InputItem>

      <List
        horizontal
        data={users}
        renderItem={renderUser}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={renderListItemSeparator}
      />

      <Button type="primary" style={styles.submitButton} onPress={hidePopup}>
        <Icon name="plus" />
      </Button>
    </>
  );
};

export default AddUserPopup;
