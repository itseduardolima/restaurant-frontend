import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, FormEvent } from "react";
import { useSignUp } from "../hooks/useRegister";

const SignUpForm = () => {
  const { formData, setFormData, isSubmitting, setIsSubmitting } = useSignUp();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 3, position: "relative" }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>

          <TextField
            name="user_name"
            fullWidth
            label="Nome Completo"
            value={formData.user_name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="email"
            label="Digite seu email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="tel"
            label="Digite seu número de celular"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Crie uma senha"
            name="user_password"
            type="password"
            value={formData.user_password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirme a senha"
            type="password"
            name="user_password_confirmation"
            value={formData.user_password_confirmation}
            onChange={handleChange}
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
        disabled={isSubmitting}
      >
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </Box>
  );
};

export default SignUpForm;
