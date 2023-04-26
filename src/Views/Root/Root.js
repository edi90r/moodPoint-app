import React from "react";
import { Main } from "../Main/Main";
import { Login } from "../Login/Login";
import { Layout } from "../../components/organisms/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../../utils/authRoute";
import { AuthProvider } from "../../store/AuthContext/AuthProvider";
import { ContextProvider } from "../../store/GlobalContext/ContextProvider";

const Root = () => {
  return (
    <AuthProvider>
      <ContextProvider>
        <div className="container-fluid vh-100 position-relative">
          <Routes>
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute />}>
                <Route element={<Main />} path="/" />
              </Route>
              <Route element={<Login />} path="/login" />
            </Route>
          </Routes>
        </div>
      </ContextProvider>
    </AuthProvider>
  );
};

export default Root;
