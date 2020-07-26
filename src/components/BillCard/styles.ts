import { transparentize, shade } from "polished";

import styled, { css } from "../../settings/styled-components";

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

export const IsPaidContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.green};
  margin-left: auto;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;
