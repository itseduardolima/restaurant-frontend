import { createContext } from "react";
import { Payload } from "../../types/Payload";

export type AuthContextType = {
  user: Payload | null;
  signin: (email: string, password: string) => Promise<any>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);

