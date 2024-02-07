import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    const { email, password } = form;

    try {
      if (email && password) {
        const isLogged = await auth.signin(email, password);

        if (isLogged && isLogged.status) {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Ocorreu um erro durante o login:", error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return {
    form,
    setForm,
    isLoggingIn,
    handleInputChange,
    handleFormSubmit,
  };
};
