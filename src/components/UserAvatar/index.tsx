import React, { useState, Dispatch, SetStateAction } from "react";
import { ImageSourcePropType } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

import { useTheme } from "../../contexts/theme/ThemeContext";
import { Badge, IconWrapper, Avatar } from "./styles";

interface UserAvatarProps {
  isBillCardSelected?: boolean;
  selectedColor?: string;
  setIsBillPaid?: Dispatch<SetStateAction<boolean>>;
  avatarSource: ImageSourcePropType;
  selectable: boolean;
  onPress?: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  isBillCardSelected,
  selectedColor,
  setIsBillPaid,
  avatarSource,
  selectable = true,
  onPress,
}) => {
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = (): void => {
    setIsSelected(prev => !prev);

    if (setIsBillPaid) {
      setIsBillPaid(prev => !prev);
    }

    if (onPress) {
      onPress();
    }
  };

  const iconColor = (
    isSelected ? theme.colors.white : theme.colors.grayLight
  );

  return (
    <IconWrapper onPress={handlePress}>
      {
        selectable && (
          <Badge
            isSelected={isSelected}
            selectedColor={selectedColor}
          >
            <FontAwesomeIcon name="check" color={iconColor} />
          </Badge>
        )
      }

      <Avatar
        source={avatarSource}
        selectedColor={selectedColor}
        isBillCardSelected={isBillCardSelected}
      />
    </IconWrapper>
  );
};

export default UserAvatar;
