import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Payload } from "../../types/Payload";
import { useApi } from "../../hooks/api";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Payload | null>(null);
  const api = useApi();

  const isTokenExpired = (token: string) => {
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.exp * 1000 < Date.now();
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return true;
    }
  };

  const getTokenFromLocalStorage = () => localStorage.getItem("authToken");

  const handleApiResponse = (data: any) => {
    if (data && !data.status) {
      setUser(data);
      setToken(data.access_token);
      localStorage.setItem("userLogin", data.login);
      localStorage.setItem("userProfile", data.profile);
      return {
        message: "pass",
        code: 200,
        status: true,
      };
    }

    const { message = "Error: No message provided", code = 0 } = data || {};
    return {
      message,
      code,
      status: false,
    };
  };

  const clearUserLocalStorage = () => {
    ["authToken", "userLogin", "userProfile"].forEach((item) => {
      localStorage.removeItem(item);
    });
  };

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (token && !isTokenExpired(token)) {
      try {
        const decodedToken: any = jwtDecode(token);
        setUser({
          name: decodedToken.name,
          email: decodedToken.email,
        });
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    } else {
      clearUserLocalStorage();
    }

  }, []);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    return handleApiResponse(data);
  };

  const signout = async () => {
    setUser(null);
    clearUserLocalStorage();
    await api.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
