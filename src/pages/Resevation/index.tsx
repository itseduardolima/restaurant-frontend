import React, { useEffect, useState } from "react";
import {
  useCreateReservation,
  useListAvailability,
} from "../../hooks/useReservation";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import {
  ReservationBtn,
  Section,
  StyledContainer,
  TableCard,
  TableContainer,
  Title,
} from "../../styles/Reservation";
import { IAvailability } from "../../services/Reservation/IReservation";
import { formatDateTime } from "../../common/utils/Date";
import { Table } from "../../services/Tables/ITables";
import Header from "../../components/Header";

const Reservation = () => {
  const mutateReservation = useCreateReservation();

  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );
  const [search_capacity, setSearch_capacity] = useState<number>(2);

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
    event: React.ChangeEvent<HTMLSelectElement>
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
    <>
      <Header />
      <StyledContainer>
        <Title>Reserva de Mesa</Title>
        <Section>
          <label htmlFor="date">Para qual dia deseja reservar?</label>
          <input
            type="date"
            id="date"
            onChange={handleDateSelection}
            value={date}
          />
        </Section>
        <Section>
          <label htmlFor="capacity">Mesa para quantas pessoas?:</label>
          <select
            id="capacity"
            onChange={handleCapacitySelection}
            value={search_capacity}
          >
            <option value={2}>2 pessoas</option>
            <option value={4}>4 pessoas</option>
            <option value={6}>6 pessoas</option>
            <option value={8}>8 pessoas</option>
            <option value={12}>12 pessoas</option>
          </select>
        </Section>
        <div>
          <h3 style={{ marginBottom: "20px" }}>Mesas disponíves:</h3>
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            availabilityData?.map((availability: IAvailability) => (
              <div key={availability.time}>
                <h4>{formatDateTime(availability.time)}</h4>
                <TableContainer>
                  {availability.tables.map((table: Table) => (
                    <TableCard key={table.table_id}>
                      <h4>Mesa {table.table_number}</h4>
                      <p>{table.table_capacity} cadeiras.</p>

                      {table.isBooked ? (
                        <ReservationBtn disabled>Reservado</ReservationBtn>
                      ) : (
                        <ReservationBtn
                          onClick={() =>
                            handleReservation(table.table_id, availability.time)
                          }
                        >
                          Reservar
                        </ReservationBtn>
                      )}
                    </TableCard>
                  ))}
                </TableContainer>
              </div>
            ))
          )}
        </div>
      </StyledContainer>
    </>
  );
};

export default Reservation;
