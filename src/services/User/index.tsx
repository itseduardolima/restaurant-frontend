import { api } from "../../hooks/api";
import { ICurrentUser } from "./ICurrentUser";

export async function getCurrentUser() {
  const response = await api.get("users/me");
  return response.data as ICurrentUser;
};

