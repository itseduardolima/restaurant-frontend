import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ErrorResponse } from "../interface/error.interface";

export const handleError = (error: unknown) => {
  const axiosErr = error as AxiosError<ErrorResponse>;

  let errorMessage = "Erro ao cadastrar";
  if (
    axiosErr?.response?.data?.message &&
    Array.isArray(axiosErr.response.data.message)
  ) {
    errorMessage = axiosErr.response.data.message.join("\n");
  } else if (typeof axiosErr?.response?.data?.message === "string") {
    errorMessage = axiosErr.response.data.message;
  }

  console.error("Detalhes do erro:", axiosErr.response || error);
  toast.error(errorMessage);
};