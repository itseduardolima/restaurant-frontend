import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createReservation, deleteReservation, getAvailability, getReservation, getReservationById } from "../services/Reservation";
import { handleError } from "../types/Error";
import { useNavigate } from "react-router-dom";

export function useListReservation() {
  const query = useQuery({
    queryFn: getReservation,
    queryKey: ["reservation"],
  });

  return query;
}

export function useListById(search_userId: string | undefined, page: number, limit: number, sort: string)  {
  return useQuery({
    queryFn: () => getReservationById(search_userId, page, limit, sort),
    queryKey: ["reservationID", search_userId || ""],
  });
}

export function useListAvailability(date: string, search_capacity: number) {
  return useQuery({
    queryFn: () => getAvailability(date, search_capacity),
    queryKey: ["availability"],
  });
}


export function useCreateReservation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const mutate = useMutation({
    mutationFn: createReservation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservation"] });
      toast.success("Mesa Reservada com sucesso");
      navigate("/historic")
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return mutate;
}

export function useDeleteReservation() {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteReservation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservation'] });
      toast.success('Reserva cancelada com sucesso.');
    },
    onError: (error) => {
      toast.error('Erro ao cancelar reserva');
      console.error('Erro ao cancelar reserva:', error);
    },
  });

  return deleteMutation;
}

