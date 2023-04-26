import { createContext } from "react";

const defaultGlobalContext = {
  indicatedMood: "",
  displayModal: false,
  modalType: "",
  timeToLeft: null,

  setDisplayModal: () => {},
  setModalType: () => {},
  setTimeToLeft: () => {},
};

export const GlobalContext = createContext(defaultGlobalContext);
