import { api } from "../../hooks/api";
import { IReservation } from "./IReservation";

export async function getReservation() {
  const response = await api.get("reservations");
  return response.data;
};

export async function createReservation({ userId, tableId, reservationDate }: IReservation)  {
  const response = await api.post("reservations", {
    userId,
    tableId,
    reservationDate,
  });
  return response.data;
};