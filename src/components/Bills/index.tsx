import React, { useCallback, useState } from "react";
import { ListRenderItem } from "react-native";

import users, { User } from "../../fixtures/users";
import { UserBill } from "../UserBill";
import { List } from "./styles";

const Bills: React.FC = () => {
  const [selectedBill, setSelectedBill] = useState(null);

  const handleSlider = useCallback((item) => (): void => {
    setSelectedBill(item);
  }, []);

  const renderItem = useCallback<ListRenderItem<User>>(({ item }) => (
    <UserBill
      id={item.id}
      name={item.name}
      icon={item.icon}
      bill={item.bill}
      isSelected={item.id === selectedBill?.id}
      handleSlider={handleSlider(item)}
    />
  ), [
    handleSlider,
    selectedBill,
  ]);

  return (
    <List
      data={users}
      renderItem={renderItem}
      keyExtractor={user => String(user.id)}
    />
  );
};

export default Bills;
