import React, { useState } from 'react';
import { StyledContainer } from '../styles/Reservation';
import { Table } from '../services/Tables/ITables';
import { useCreateReservation } from '../hooks/useReservation';
import { useTables } from '../hooks/useTables';
import { useCurrentUser } from '../hooks/useCurrentUser';

const Reservation = () => {
  const mutateReservation = useCreateReservation();
  const { data: userData } = useCurrentUser();
  const { data } = useTables();
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleTableSelection = (table: Table) => {
    setSelectedTable(table);
  };

  const handleTimeSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleReservation = () => {
    if (selectedTable && selectedTime && userData) {
      const reservationData = {
        userId: userData.user_id,
        tableId: selectedTable.table_id,
        reservationDate: new Date()
      };
      
      mutateReservation.mutate(reservationData);
    }
  };

  const tables: Table[] = data || [];

  return (
    <StyledContainer>
      <h2>Reserva de Mesa</h2>
      <div>
        <label htmlFor="time">Selecione o Horário:</label>
        <select id="time" onChange={handleTimeSelection} value={selectedTime}>
          <option value="">Selecione um horário</option>
          <option value="12:00">18:00</option>
          <option value="13:00">19:00</option>
          <option value="14:00">20:00</option>
          <option value="15:00">21:00</option>
          <option value="15:00">22:00</option>
        </select>
      </div>
      <div>
        <h3>Selecione a Mesa:</h3>
        <ul>
          {tables.map((table) => (
            <li key={table.table_id} onClick={() => handleTableSelection(table)}>
              Mesa: {table.table_number}
            </li>
          ))}
        </ul>
        {selectedTable && (
          <p>Mesa selecionada: {selectedTable.table_number}</p>
        )}
      </div>
      
      <button onClick={handleReservation}>Reservar Mesa</button>
    </StyledContainer>
  );
};

export default Reservation;
