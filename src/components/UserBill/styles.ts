import styled, { css } from "styled-components/native";
import { transparentize, shade } from "polished";

interface ItemProps {
  selectedColor: string;
  isSelected: boolean;
}

export const Container = styled.TouchableOpacity<ItemProps>`
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => shade(0.02, theme.colors.white)};

  ${({ isSelected, selectedColor }) => isSelected && css`
    background-color: ${transparentize(0.85, selectedColor)};
  `};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  height: 100%;
  padding: 12px 10px 0 16px;
`;

export const IconWrapper = styled.TouchableOpacity`
  position: relative;
`;

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

export const Avatar = styled.Image<ItemProps>`
  height: 64px;
  width: 64px;
  align-self: center;
  border-radius: 32px;
  border: 4px solid ${({ theme }) => theme.colors.grayLight};

  ${({ isSelected, selectedColor }) => isSelected && css`
      border: 4px solid ${transparentize(0.7, selectedColor)};
  `};
`;
