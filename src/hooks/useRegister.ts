import { useCallback, useEffect, useState } from "react";
import { api } from "./api";
import { IRegister } from "../services/RegisterService/IRegister";
import { toast } from "react-toastify";
import { handleError } from "../types/Error";

export const useSignUp = () => {
  const [formData, setFormData] = useState<IRegister>({
    user_name: "",
    user_email: "",
    user_password: "",
    user_password_confirmation: "",
    user_phone: "",
    user_profile: 3,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const signUpUser = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const response = await api.post(`/users/register-public`, formData);
      const message = response.data.message ?? "Cadastro realizado com sucesso";
      toast.success(message);
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  useEffect(() => {
    if (!isSubmitting) return;
    signUpUser();
  }, [isSubmitting, signUpUser]);

  return {
    formData,
    setFormData,
    isSubmitting,
    setIsSubmitting,
  };
};
