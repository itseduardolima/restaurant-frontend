import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import chef from "../../assets/images/chef.svg";
import Logo from "../../assets/images/Logo.png";
import { SignIn } from "../../components/SignInForm";
import SignUp from "../../components/SignUpForm";
import { StyledLink } from "../../styles/Form";

const defaultTheme = createTheme();

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleSignIn = () => {
    setIsSignUp(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: "#ecf0f1" }}
      >
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${chef})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="Logo" />

            {isSignUp ? (
              <>
                <Typography component="h1" variant="h5">
                  Crie sua conta
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <SignUp />
                  <Grid container>
                    <Grid item>
                      <StyledLink to="/signIn" onClick={handleSignIn}>
                        Já tem uma conta? Faça login
                      </StyledLink>
                    </Grid>
                  </Grid>
                </Box>
              </>
            ) : (
              <>
                <Typography component="h1" variant="h5">
                  Entre na sua conta
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <SignIn />
                  <Grid container>
                    <Grid item xs>
                      <StyledLink to="/" style={{ color: "#716868" }}>
                        Esqueceu sua senha?
                      </StyledLink>
                    </Grid>
                    <Grid item>
                      <StyledLink to="/signUp" onClick={handleSignUp}>
                        Não tem uma conta? Cadastre-se
                      </StyledLink>
                    </Grid>
                  </Grid>
                </Box>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}