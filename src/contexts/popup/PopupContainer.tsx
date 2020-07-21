import React, {
  useState,
  useMemo,
  useCallback,
} from "react";
import Popup from "react-native-modal";

import { PopupProvider } from "./PopupContext";
import { PopupState } from "./types";
import { PopupContent, styles } from "./styles";

const INITIAL_CONTENT_STATE: PopupState = {
  isOpen: false,
  component: null,
  onShow: null,
  onHide: null,
  componentProps: {},
  isCloseable: false,
};

const PopupContainer: React.FC = ({ children }) => {
  const [popupState, setPopupState] = useState(INITIAL_CONTENT_STATE);

  const showPopup = useCallback(({
    componentProps,
    component,
    isCloseable = false,
    onHide,
    onShow,
  }: PopupState) => {
    setPopupState({
      componentProps,
      isOpen: true,
      isCloseable,
      component,
      onHide,
      onShow,
    });
  }, []);

  const hidePopup = useCallback(() => {
    setPopupState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const handleOnShow = useCallback(() => {
    if (popupState?.onShow) {
      popupState.onShow();
    }
  }, [
    popupState,
  ]);

  const handleOnHide = useCallback(() => {
    if (popupState?.onHide) {
      popupState.onHide();
    }

    setPopupState(INITIAL_CONTENT_STATE);
  }, [
    popupState,
  ]);

  const payload = useMemo(() => [
    showPopup,
    hidePopup,
    {
      isOpen: popupState?.isOpen,
    },
  ], [
    hidePopup,
    showPopup,
    popupState,
  ]);

  const Component = popupState?.component;
  const componentProps = popupState?.componentProps || {};

  return (
    <PopupProvider value={payload}>
      <Popup
        isVisible={popupState.isOpen}
        avoidKeyboard
        onBackdropPress={hidePopup}
        swipeDirection={["down"]}
        onSwipeComplete={hidePopup}
        onModalShow={handleOnShow}
        onModalHide={handleOnHide}
        style={styles.modal}
      >
        <PopupContent>
          {Component && (
            <Component
              hidePopup={hidePopup}
              showPopup={showPopup}
              {...componentProps}
            />
          )}
        </PopupContent>
      </Popup>

      {children}
    </PopupProvider>
  );
};

export default PopupContainer;
