import { useState, useEffect } from "react";
import { loginUser, isUserAuth } from "../../controllers/user";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = await loginUser({ login, password });

    if (!auth.success) {
      if (auth.status === 400) {
        return setError({ password: auth.message });
      }

      if (auth.status === 401) {
        return setError({ login: auth.message });
      }
    }

    setIsAuth(true);
    setUser(auth.data);
    navigate("/");
  };

  const handleAuthenticate = async () => {
    try {
      const auth = await isUserAuth();

      if (auth) {
        setIsAuth(true);
        setUser(auth.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsAuth(false);
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    handleAuthenticate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authStore = {
    isAuth,
    user,
    setLogin,
    setPassword,
    error,
    handleLogin,
    isLoading,
    handleAuthenticate,
  };

  return (
    <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>
  );
};
