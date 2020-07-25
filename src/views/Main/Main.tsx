import React from "react";
import {
  SearchBar,
  WhiteSpace,
  WingBlank,
  Flex,
} from "@ant-design/react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { useBills } from "../../contexts/bills/BillsContext";
import { usePopup } from "../../contexts/popup/PopupContext";
import { Title } from "../../styles/components/Typography";
import Button from "../../components/Button/Button";
import AddUserPopup from "../../components/AddUserPopup";
import Bills from "../../components/Bills";
import { Container, Content, styles } from "./styles";

const Main: React.FC = () => {
  const [openPopup] = usePopup();
  const [_, { handleSearch }] = useBills();

  const handlePopup = (): void => {
    openPopup({
      component: AddUserPopup,
    });
  };

  return (

    <Container>
      <Content>
        <Title fontSize={32}>
          Bill Splitting
        </Title>

        <WhiteSpace size="xl" />
        <SearchBar
          cancelText="Clear"
          placeholder="Search for a user bill"
          onChange={handleSearch}
          style={styles.input}
        />
        <Bills />

        <WhiteSpace size="md" />

        <Flex direction="column" align="end" style={styles.fullWidth}>
          <Flex direction="row" justify="between" style={styles.column}>
            <Title>Total</Title>

            <WingBlank />

            <Title fontWeight="regular">
              $55
            </Title>
          </Flex>
          <WhiteSpace />
          <Flex direction="row" justify="between" style={styles.column}>
            <Title fontWeight="light">Received</Title>

            <WingBlank />

            <Title fontWeight="light">
              $555
            </Title>
          </Flex>
        </Flex>
      </Content>

      <Button onPress={handlePopup}>
        <Icon name="plus" size={24} />
      </Button>
    </Container>
  );
};

export default Main;
