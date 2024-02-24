import { api } from "../../hooks/api";
import { IReservation, IReservationById } from "./IReservation";

export async function getReservation() {
  const response = await api.get("reservations");
  return response.data as IReservation;
}

export async function getReservationById(search_userId: string | undefined, page: number, limit: number, sort: string) {
  const response = await api.get("reservations", {
    params: {
      search_userId,
      page,
      limit,
      sort
    },
  });
  return { data: response.data as { items: IReservationById[] } };
}

export async function getAvailability(date: string, search_capacity: number) {
  const response = await api.get("reservations/availability", {
    params: {
      date,
      search_capacity,
    },
  });
  return response.data;
}

export async function createReservation({ userId, tableId, reservationDate }: IReservation) {
  const response = await api.post("reservations", {
    userId,
    tableId,
    reservationDate,
  });
  return response.data;
}

export async function deleteReservation(id: string) {
  await api.delete(`reservations/${id}`);
}
