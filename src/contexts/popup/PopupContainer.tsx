import React, {
  useState,
  useMemo,
  useCallback,
} from "react";

import Popup from "../../components/Popup";
import { PopupProvider } from "./PopupContext";
import { PopupState, ShowPopupHandlerArguments, PopupContextPayload } from "./types";

const INITIAL_CONTENT_STATE: PopupState = {
  isOpen: false,
  onShow: null,
  onHide: null,
  component: null,
  componentProps: {},
};

const PopupContainer: React.FC = ({ children }) => {
  const [popupState, setPopupState] = useState(INITIAL_CONTENT_STATE);

  const showPopup = useCallback(({
    componentProps,
    component,
    onHide = null,
    onShow = null,
  }: ShowPopupHandlerArguments) => {
    setPopupState({
      componentProps,
      isOpen: true,
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
  }, [popupState]);

  const handleOnHide = useCallback(() => {
    if (popupState?.onHide) {
      popupState.onHide();
    }

    setPopupState(INITIAL_CONTENT_STATE);
  }, [popupState]);

  const { isOpen } = popupState;

  const payload = useMemo<PopupContextPayload>(() => (
    [
      showPopup,
      hidePopup,
      {
        isOpen,
      },
    ]
  ), [
    showPopup,
    hidePopup,
    isOpen,
  ]);

  const Component = popupState?.component;
  const componentProps = popupState?.componentProps || {};

  return (
    <PopupProvider value={payload}>
      <Popup
        isOpen={popupState.isOpen}
        hidePopup={hidePopup}
        handleOnShow={handleOnShow}
        handleOnHide={handleOnHide}
      >
        {
          Component && (
            <Component
              hidePopup={hidePopup}
              showPopup={showPopup}
              {...componentProps}
            />
          )
        }
      </Popup>

      {children}
    </PopupProvider>
  );
};

export default PopupContainer;
