import React from "react";
import { SafeAreaView } from "react-native";

import { Container } from "./styles";
import { Title } from "../../styles/components/Typography";

const Main: React.FC = () => (
  <SafeAreaView>
    <Container>
      <Title fontSize={32}>Bill Splitting</Title>
    </Container>
  </SafeAreaView>
);

export default Main;
