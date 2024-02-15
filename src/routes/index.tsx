import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Reservation from "../pages/Resevation";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  );
};
