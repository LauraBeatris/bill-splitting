import React from "react";
import { ImageSourcePropType } from "react-native";
import { Flex, Slider } from "@ant-design/react-native";

import getColorById from "../../utils/getColorById";
import { Text } from "../../styles/components/Typography";
import UserAvatar from "./UserAvatar";
import { Container, Content } from "./styles";

interface UserBillProps {
  id: number;
  name: string;
  icon: ImageSourcePropType;
  bill: number;
  isSelected: boolean;
  handleSlider: () => void;
}

export const UserBill: React.FC<UserBillProps> = ({
  id,
  name,
  icon,
  bill,
  isSelected,
  handleSlider,
}) => {
  const color = getColorById(id);

  return (
    <Container
      selectedColor={color}
      isSelected={isSelected}
    >
      <Flex>
        <UserAvatar
          avatarSource={icon}
          selectedColor={color}
          isSelected={isSelected}
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
          <Text
            fontSize={16}
            color={color}
            fontFamily="Roboto-Regular"
          >
            $
            {bill}
          </Text>
        </Flex>

        <Slider
          minimumTrackTintColor={color}
          onAfterChange={handleSlider}
        />
      </Content>
    </Container>
  );
};
