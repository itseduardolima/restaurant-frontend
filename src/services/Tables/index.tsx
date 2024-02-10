import { api } from "../../hooks/api";

export async function getTables() {
  const response = await api.get("tables");
  return response.data;
};

