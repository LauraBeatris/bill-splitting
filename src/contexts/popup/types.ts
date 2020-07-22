
export interface PopupState {
  isOpen: boolean;
  componentProps?: {};
  onShow: null | (() => void);
  onHide: null | (() => void);
  component: React.ComponentType<ComponentProps> | null;
}
export interface ShowPopupHandlerArguments extends Omit<PopupState, "isOpen" | "onShow"| "onHide"> {
  isOpen?: boolean;
  onShow?: null | (() => void);
  onHide?: null | (() => void);
}

export type ShowPopupHandler = (args: ShowPopupHandlerArguments) => void;
export type HidePopupHandler = () => void;

export interface ComponentProps {
  showPopup: ShowPopupHandler;
  hidePopup: HidePopupHandler;
}

export type PopupContextState = {
  isOpen: boolean;
}

export type PopupContextPayload = [ShowPopupHandler, HidePopupHandler, PopupContextState]
