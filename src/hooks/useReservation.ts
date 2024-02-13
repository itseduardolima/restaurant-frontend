import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createReservation, getAvailability, getReservation } from "../services/Reservation";
import { handleError } from "../types/Error";

export function useListReservation() {
  const query = useQuery({
    queryFn: getReservation,
    queryKey: ["reservation"],
  });

  return query;
}

export function useListAvailability(date: string, search_capacity: number) {
  return useQuery({
    queryFn: () => getAvailability(date, search_capacity),
    queryKey: ["availability"],
  });
}


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