import React from "react";
import Modal from "react-native-modal";

import { PopupContent, styles } from "./styles";

interface PopupProps {
  isOpen: boolean;
  hidePopup: () => void;
  handleOnShow: () => void;
  handleOnHide: () => void;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  children,
  hidePopup,
  handleOnShow,
  handleOnHide,
}) => (
  <Modal
    style={styles.modal}
    isVisible={isOpen}
    onModalHide={handleOnHide}
    onModalShow={handleOnShow}
    avoidKeyboard
    swipeDirection={["down"]}
    onBackdropPress={hidePopup}
    onSwipeComplete={hidePopup}
  >
    <PopupContent>
      {children}
    </PopupContent>
  </Modal>
);

export default Popup;
