
export type ShowPopupHandler = (args: PopupState) => void;
export type HidePopupHandler = () => void;

export interface PopupComponentProps {
  showPopup: ShowPopupHandler;
  hidePopup: HidePopupHandler;
}

export interface PopupState {
  isOpen: boolean;
  componentProps: {};
  isCloseable: boolean;
  onShow: null | (() => void);
  onHide: null | (() => void);
  component: React.ComponentType<PopupComponentProps> | null;
}

export type PopupContextState = Pick<PopupState, "isOpen">

export type PopupContextHandlers = ShowPopupHandler | HidePopupHandler

export type PopupContextPayload = (PopupContextHandlers | PopupContextState)[]
