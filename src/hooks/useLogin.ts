import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "./api";
import { toast } from "react-toastify";

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

  const fetchUserInfo = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.get("users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
      return null;
    }
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    const { email, password } = form;

    try {
      if (email && password) {
        const isLogged = await auth.signin(email, password);

        if (isLogged && isLogged.status) {
          const userInfo = await fetchUserInfo();

          if (userInfo && userInfo.user_id) {
            navigate("/");
          } else {
            toast.error("Erro ao fazer login. Verifique suas credenciais.");
          }
        }
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error(
        "Ocorreu um erro durante o login. Por favor, tente novamente."
      );
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
