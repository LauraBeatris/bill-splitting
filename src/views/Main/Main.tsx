import React from "react";
import { SearchBar, WhiteSpace } from "@ant-design/react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { usePopup } from "../../contexts/popup/PopupContext";
import { Title } from "../../styles/components/Typography";
import Button from "../../components/Button/Button";
import AddUserPopup from "../../components/AddUserPopup";
import Bills from "../../components/Bills";
import { Container, Content } from "./styles";

const Main: React.FC = () => {
  const [openPopup] = usePopup();

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
        />
        <Bills />
      </Content>

      <Button onPress={handlePopup}>
        <Icon name="plus" size={24} />
      </Button>
    </Container>
  );
};

export default Main;
