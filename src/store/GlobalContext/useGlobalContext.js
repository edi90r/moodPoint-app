import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const useGlobalContext = () => {
  const store = useContext(GlobalContext);
  return store;
};
