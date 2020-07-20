import styled, { css } from "styled-components/native";

interface TypographyProps {
  fontSize?: number;
}

export const Title = styled.Text<TypographyProps>`
  ${({ theme, fontSize }) => css`
    font-family: ${theme.fonts.families.bold};
    font-size: ${fontSize || theme.fonts.sizes.base}px;
    color: ${theme.colors.dark};
  `}
`;
