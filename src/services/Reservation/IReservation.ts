import { Table } from "../Tables/ITables";

export interface IReservation {
  userId: string;
  tableId: string;
  reservationDate: Date;
}

export interface IAvailability {
  time: string;
  tables: Table[];
}
