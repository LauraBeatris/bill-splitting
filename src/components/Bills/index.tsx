import React, { useCallback, useState } from "react";

import { useBills } from "../../contexts/bills/BillsContext";
import { Bill } from "../../fixtures/bills";
import BillCard from "../BillCard";
import { List } from "./styles";

const Bills: React.FC = () => {
  const { bills } = useBills();
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);

  const handleSlider = useCallback((item) => (): void => {
    setSelectedBill(item);
  }, []);

  const renderItem = useCallback(({ item }) => (
    <BillCard
      id={item.id}
      name={item.name}
      icon={item.icon}
      value={item.value}
      isSelected={item.id === selectedBill?.id}
      handleSlider={handleSlider(item)}
    />
  ), [
    handleSlider,
    selectedBill,
  ]);

  return (
    <List
      data={bills}
      renderItem={renderItem}
      keyExtractor={user => String(user.id)}
    />
  );
};

export default Bills;
