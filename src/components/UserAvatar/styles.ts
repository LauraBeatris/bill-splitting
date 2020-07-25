import styled, { css } from "styled-components/native";
import { transparentize } from "polished";

export const IconWrapper = styled.TouchableOpacity`
  position: relative;
`;

interface ItemProps {
  selectedColor: string;
  isSelected: boolean;
}

export const Badge = styled.View<ItemProps>`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  position: absolute;
  right: -8px;
  top: 0;
  z-index: 10;
  align-items: center;
  justify-content: center;

  ${({ isSelected, selectedColor }) => css`
    background-color: ${isSelected ? selectedColor : "#FFF"};
  `};
`;

interface AvatarProps {
  isBillCardSelected: boolean;
  selectedColor: string;
}

export const Avatar = styled.Image<AvatarProps>`
  height: 64px;
  width: 64px;
  align-self: center;
  border-radius: 32px;
  border-width: 4px;
  border-color: ${({ theme }) => theme.colors.grayLight};

  ${({ isBillCardSelected, selectedColor }) => isBillCardSelected && css`
    border-width: 4px;
    border-color: ${transparentize(0.7, selectedColor)};
  `};
`;
