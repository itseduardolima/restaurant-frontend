import { api } from "../../hooks/api";
import { IReservation } from "./IReservation";

export async function getReservation() {
  const response = await api.get("reservations");
  return response.data as IReservation;
};

export async function getAvailability(date: string, search_capacity: number) {
  const response = await api.get("reservations/availability", {
    params: {
      date,
      search_capacity,
    }
  });
  return response.data;
}


export async function createReservation({ userId, tableId, reservationDate }: IReservation)  {
  const response = await api.post("reservations", {
    userId,
    tableId,
    reservationDate,
  });
  return response.data;
};