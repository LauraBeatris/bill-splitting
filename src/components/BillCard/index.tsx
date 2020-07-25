import React, { useState } from "react";
import { ImageSourcePropType } from "react-native";
import { Flex, Slider } from "@ant-design/react-native";

import { useTheme } from "../../contexts/theme/ThemeContext";
import getColorById from "../../utils/getColorById";
import { Text } from "../../styles/components/Typography";
import UserAvatar from "../UserAvatar";
import { Container, Content, IsPaidContainer } from "./styles";

interface UserBillProps {
  id: number;
  name: string;
  icon: ImageSourcePropType;
  bill: number;
  isSelected: boolean;
  handleSlider: () => void;
}

const UserBill: React.FC<UserBillProps> = ({
  id,
  name,
  icon,
  bill,
  isSelected,
  handleSlider,
}) => {
  const theme = useTheme();
  const color = getColorById(id);
  const [isBillPaid, setIsBillPaid] = useState(false);

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
                {bill}
              </Text>
            )
          }
        </Flex>

        {
          !isBillPaid && (
            <Slider
              minimumTrackTintColor={color}
              onAfterChange={handleSlider}
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
