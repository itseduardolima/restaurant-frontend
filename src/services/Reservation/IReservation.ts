import { Table } from "../Tables/ITables";
import { ICurrentUser } from "../User/ICurrentUser";

export interface IReservation {
  userId: string;
  tableId: string;
  reservationDate: Date;
}

export interface IReservationById {
  reservation_id: string;
  reservation_date: string;
  reservation_created_at: string;
  reservation_updated_at: string;
  table: Table;
  user: ICurrentUser;
}

export interface IAvailability {
  time: string;
  tables: Table[];
}
