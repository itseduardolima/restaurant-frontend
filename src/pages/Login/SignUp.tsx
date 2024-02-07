import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import chef from "../../assets/images/chef.svg";
import Logo from "../../assets/images/Logo.png";
import { StyledLink } from "../../styles/Form";
import SignUpForm from "../../components/SignUpForm";

const defaultTheme = createTheme();

export default function SignUp() {
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
              my: 4,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="Logo" />

            <Typography component="h1" variant="h5">
              Entre na sua conta
            </Typography>
            <Box sx={{ mt: 1 }}>
              <SignUpForm />
              <Grid container>
                <Grid item>
                  <StyledLink to="/signIn">
                    Já tem uma conta? faça login
                  </StyledLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
