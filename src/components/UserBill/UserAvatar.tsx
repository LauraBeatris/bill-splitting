import React, { useState } from "react";
import { ImageSourcePropType } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

import { useTheme } from "../../contexts/theme/ThemeContext";
import { Badge, IconWrapper, Avatar } from "./styles";

interface UserAvatarProps {
  isSelected: boolean;
  avatarSource: ImageSourcePropType;
  selectedColor: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  isSelected,
  avatarSource,
  selectedColor,
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);

  const handlePress = (): void => {
    setSelected(prev => !prev);
  };

  const iconColor = selected ? theme.colors.white : theme.colors.grayLight;

  return (
    <IconWrapper onPress={handlePress}>
      <Badge
        isSelected={selected}
        selectedColor={selectedColor}
      >
        <FontAwesomeIcon name="check" color={iconColor} />
      </Badge>

      <Avatar
        source={avatarSource}
        selectedColor={selectedColor}
        isSelected={isSelected}
      />
    </IconWrapper>
  );
};

export default UserAvatar;
