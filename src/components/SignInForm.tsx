import { Button, TextField } from "@mui/material";
import { useLogin } from "../hooks/useLogin";

export const SignIn = () => {
  const { form, isLoggingIn, handleInputChange, handleFormSubmit } = useLogin();

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        fullWidth
        label="Digite seu email"
        name="email"
        margin="normal"
        value={form.email}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        margin="normal"
        name="password"
        label="Digite sua senha"
        type="password"
        autoComplete="current-password"
        value={form.password}
        onChange={handleInputChange}
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
        disabled={isLoggingIn}
      >
        {isLoggingIn ? 'Entrando...' : 'Entrar'}
      </Button>
    </form>
  );
};
