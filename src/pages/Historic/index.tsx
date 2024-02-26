import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Header from "../../components/Header";

import { useState, useEffect } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { IReservationById } from "../../services/Reservation/IReservation";
import { formatDate } from "../../common/utils/Date";
import { useDeleteReservation, useListById } from "../../hooks/useReservation";
import { StyledContainer, Title } from "../../styles/Reservation";
import { CancelButton, Item } from "../../styles/Historic";
import { Pagination, Stack } from "@mui/material";

export const BookingHistory = () => {
  
  const { data: userData } = useCurrentUser();
  const search_userId = userData?.user_id;
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [sort] = useState("DESC");
  const { data: bookingData, refetch, isLoading } = useListById(search_userId, page, limit, sort);

  const deleteMutation = useDeleteReservation();
  const handleDelete = async (id: string) => {
    await deleteMutation.mutateAsync(id);
    refetch();
  };

  const handleChangePage = async ( _event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    refetch();
  };

  useEffect(() => {
    if (search_userId) {
      refetch();
    }
  }, [search_userId, page, limit, refetch]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (!bookingData) {
    return <p>Erro ao carregar o histórico de reservas.</p>;
  }

  return (
    <>
      <Header />
      <StyledContainer>
        <Title>Mesas reservadas</Title>
        <Paper sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <Item>Mesa</Item>
                  <Item>Data da reserva</Item>
                  <Item>Quando foi reservado</Item>
                  <Item>Estado</Item>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookingData.data.items.map((booking: IReservationById) => (
                  <TableRow key={booking.reservation_id}>
                    <Item>{booking.table.table_number}</Item>
                    <Item>
                      {formatDate(booking.reservation_date)}
                    </Item>
                    <Item>
                      {formatDate(booking.reservation_created_at)}
                    </Item>
                    <Item>
                      {new Date(booking.reservation_date) >= new Date() ? (
                        <CancelButton onClick={() => handleDelete(booking.reservation_id)}>
                          Cancelar
                        </CancelButton>
                      ) : new Date(booking.reservation_date) < new Date() ? (
                        "Reservado"
                      ) : (
                        ""
                      )}
                    </Item>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Stack style={{ padding: "20px 0", }}>
              <Pagination
                count={bookingData.paginationMeta.totalPages}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </TableContainer>
          
        </Paper>
      </StyledContainer>
    </>
  );
};
