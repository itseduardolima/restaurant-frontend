import React, { useContext, useEffect, useRef, useState } from "react";
import { StyledContainer } from "../styles/Reservation";
import {
  useCreateReservation,
  useListAvailability,
} from "../hooks/useReservation";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { AuthContext } from "../contexts/auth/AuthContext";
import { IAvailability } from "../services/Reservation/IReservation";
import { Table } from "../services/Tables/ITables";
import ParallaxEffect from "./Parallax";

type ReservationProps = {
  id?: string;
};

const Reservation: React.FC<ReservationProps> = ({ id }) => {
  const ref = useRef(null);

  const mutateReservation = useCreateReservation();

  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );
  const [search_capacity, setSearch_capacity] = useState<number>(0);

  const { user } = useContext(AuthContext);
  const { data: userData } = useCurrentUser();
  const {
    data: availabilityData,
    isLoading,
    refetch,
  } = useListAvailability(date, search_capacity);

  useEffect(() => {
    refetch();
  }, [date, search_capacity, refetch]);

  const handleDateSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateString = event.target.value;
    const formattedDate = selectedDateString.split("/").reverse().join("-");
    setDate(formattedDate);
  };

  const handleCapacitySelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const capacity = parseInt(event.target.value);
    setSearch_capacity(capacity);
  };

  const handleReservation = (tableId: string, reservationDate: string) => {
    if (tableId && reservationDate && userData) {
      const date = new Date(reservationDate);
      const reservationData = {
        userId: userData.user_id,
        tableId: tableId,
        reservationDate: date,
      };

      mutateReservation.mutate(reservationData);
    }
  };

  return (
    <div id={id} ref={ref}>
      {user ? (
        <StyledContainer>
          <>
            <h2>Reserva de Mesa</h2>
            <div>
              <label htmlFor="date">Para qual dia deseja reservar?</label>
              <input
                type="date"
                id="date"
                onChange={handleDateSelection}
                value={date}
              />
            </div>
            <div>
              <label htmlFor="capacity">Mesa para quantas pessoas?:</label>
              <input
                type="number"
                id="capacity"
                onChange={handleCapacitySelection}
                value={search_capacity}
              />
            </div>
            <div>
              <h3>Horários disponíves:</h3>
              {isLoading ? (
                <p>Carregando...</p>
              ) : (
                availabilityData?.map((availability: IAvailability) => (
                  <div key={availability.time}>
                    <h4>{availability.time}</h4>
                    {availability.tables
                      .filter((table: Table) => !table.isBooked)
                      .map((table: Table) => (
                        <div key={table.table_id}>
                          <p>Mesa {table.table_number}</p>
                          <p>Capacidade: {table.table_capacity}</p>
                          <p>
                            Estado:{" "}
                            {table.isBooked ? "Reservado" : "Disponível"}
                          </p>
                          <button
                            onClick={() =>
                              handleReservation(
                                table.table_id,
                                availability.time
                              )
                            }
                          >
                            Reservar
                          </button>
                        </div>
                      ))}
                  </div>
                ))
              )}
            </div>
          </>
        </StyledContainer>
      ) : (
        <ParallaxEffect />
      )}
    </div>
  );
};

export default Reservation;
