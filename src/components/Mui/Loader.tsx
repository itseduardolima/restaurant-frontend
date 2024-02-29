import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Loader() {
  return (
    <Container>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
    </Container>
  );
}
