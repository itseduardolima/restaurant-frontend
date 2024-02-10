import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createReservation } from "../services/Reservation";
import { handleError } from "../types/Error";

export function useCreateReservation() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: createReservation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservation"] });
      toast.success("Mesa Reservada com sucesso");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return mutate;
}