import { Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import styled from "../../settings/styled-components";

export const Container = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 60px;
  align-items: center;
  background: ${({ theme }) => theme.colors.yellow};
  padding: 20px 0 ${Platform.OS === "ios" && `${getBottomSpace()}px`};
`;
