import React, { useState } from "react";
import { ImageSourcePropType } from "react-native";
import { Flex, Slider } from "@ant-design/react-native";

import { useTheme } from "../../contexts/theme/ThemeContext";
import { useBills } from "../../contexts/bills/BillsContext";
import { Text } from "../../styles/components/Typography";
import getColorById from "../../utils/getColorById";
import { MIN_BILL_VALUE, MAX_BILL_VALUE } from "../../constants/billValues";
import UserAvatar from "../UserAvatar";
import { Container, Content, IsPaidContainer } from "./styles";

interface UserBillProps {
  id: number;
  name: string;
  icon: ImageSourcePropType;
  value: number;
  isSelected: boolean;
  handleSlider: () => void;
}

const UserBill: React.FC<UserBillProps> = ({
  id,
  name,
  icon,
  value,
  isSelected,
  handleSlider,
}) => {
  const theme = useTheme();
  const { payBill, updateBillValue } = useBills();

  const [isBillPaid, setIsBillPaid] = useState(false);

  const color = getColorById(id);

  const handleBillChange = (billValue: number): void => {
    updateBillValue({ id, value: Math.ceil(billValue) });
  };

  const handlePayBill = (): void => {
    payBill({ id, value });
  };

  return (
    <Container
      selectedColor={color}
      isSelected={isSelected && !isBillPaid}
    >
      <Flex>
        <UserAvatar
          selectedColor={color}
          avatarSource={icon}
          isBillCardSelected={isSelected}
          setIsBillPaid={setIsBillPaid}
          onPress={handlePayBill}
        />
      </Flex>

      <Content>
        <Flex
          direction="row"
          align="center"
          justify="between"
        >
          <Text
            fontSize={16}
            color={color}
          >
            {name}
          </Text>

          {
            !isBillPaid && (
              <Text
                fontSize={16}
                color={color}
                fontFamily="Roboto-Regular"
              >
                $
                {value}
              </Text>
            )
          }
        </Flex>

        {
          !isBillPaid && (
            <Slider
              minimumTrackTintColor={color}
              onAfterChange={handleSlider}
              value={value}
              onChange={handleBillChange}
              min={MIN_BILL_VALUE}
              max={MAX_BILL_VALUE}
            />
          )
        }
      </Content>

      {
        isBillPaid && (
          <IsPaidContainer>
            <Text
              fontSize={18}
              color={theme.colors.greenSecondary}
            >
              Paid
            </Text>
          </IsPaidContainer>
        )
      }
    </Container>
  );
};

export default UserBill;
