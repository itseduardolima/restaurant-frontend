import { Button, TextField } from "@mui/material";

export const SignIn = () => {
  return (
    <div>
      <TextField
        fullWidth
        label="Digite seu email"
        name="email"
        margin="normal"
      />
      <TextField
        fullWidth
        margin="normal"
        name="password"
        label="Digite sua senha"
        autoComplete="current-password"
      />

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
        Entrar
      </Button>
    </div>
  );
};
