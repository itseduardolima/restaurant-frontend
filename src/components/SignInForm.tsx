import { Button, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import { View } from "../styles/Form";
import { isValidEmail } from "../common/utils/Validate";

export const SignInForm = () => {
  const { form, isLoggingIn, handleInputChange, handleFormSubmit } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        fullWidth
        label="Digite seu email"
        name="email"
        margin="normal"
        value={form.email}
        onChange={handleInputChange}
        error={
          !isValidEmail(form.email) && form.email !== ""
        }
      />
      <TextField
        fullWidth
        margin="normal"
        name="password"
        label="Digite sua senha"
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        value={form.password}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <View  onClick={handleTogglePassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </View>
            </InputAdornment>
          ),
        }}
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
