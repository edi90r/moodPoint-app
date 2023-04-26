import { createContext } from "react";

const defaultAuthContext = {
  isAuth: false,
  user: {},
  login: "",
  password: "",
  error: {},
  isLoading: true,

  setIsAuth: () => {},
  setUser: () => {},
  setLogin: () => {},
  setPassword: () => {},
  setError: () => {},
  setIsLoading: () => {},
};

export const AuthContext = createContext(defaultAuthContext);
