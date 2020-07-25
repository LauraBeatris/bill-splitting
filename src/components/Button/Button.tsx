import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  ...rest
}) => (
  <Container
    onPress={onPress}
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
