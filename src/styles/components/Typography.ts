import styled, { css } from "styled-components/native";

interface TypographyProps {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
}

export const Title = styled.Text<TypographyProps>`
  ${({ theme, fontSize }) => css`
    font-family: ${theme.fonts.families.bold};
    font-size: ${fontSize || theme.fonts.sizes.base}px;
    color: ${theme.colors.dark};
  `}
`;

export const Text = styled.Text<TypographyProps>`
  ${({
    color,
    theme,
    fontSize,
    fontFamily,
  }) => css`
    font-family: ${fontFamily || theme.fonts.families.medium};
    font-size: ${fontSize || theme.fonts.sizes.base}px;
    color: ${color || theme.colors.dark};
  `}
`;
