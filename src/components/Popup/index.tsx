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
    isVisible={isOpen}
    avoidKeyboard
    onBackdropPress={hidePopup}
    swipeDirection={["down"]}
    onSwipeComplete={hidePopup}
    onModalShow={handleOnShow}
    onModalHide={handleOnHide}
    style={styles.modal}
  >
    <PopupContent>
      {children}
    </PopupContent>
  </Modal>
);

export default Popup;
