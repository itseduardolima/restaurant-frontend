import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

const SignUp = () => {
  return (
    <Box component="form" noValidate sx={{ mt: 3, position: "relative" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField name="user_name" fullWidth label="Nome Completo" />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            type="email"
            label="Digite seu email"
            name="user_email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Crie uma senha"
            name="user_password"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirme a senha"
            type="password"
            name="confirm_password"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 4,
          fontWeight: "bold",
          background: "#FF9100",
          "&:hover": {
            background: "#FFA733",
          },
        }}
      >
        Cadastrar
      </Button>
    </Box>
  );
};

export default SignUp;
