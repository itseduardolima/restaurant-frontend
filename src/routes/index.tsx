import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignIn";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignInPage />} />
    </Routes>
  );
};
