import { useState, useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { StyledNavbar, StyledBrand, StyledLink, StyledButton, BurguerButton, StyledLogin, ButtonContainer, Logout } from "../styles/Header";
import Logo from "../assets/images/Logo.png";
import { AuthContext } from "../contexts/auth/AuthContext";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { user, signout } = useContext(AuthContext); 

  return (
    <StyledNavbar expand="lg">
      <StyledBrand to="/">
        <img src={Logo} alt="Logo" width={97} />
      </StyledBrand>
      <BurguerButton
        className="custom-toggle-btn"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <StyledLink href="#menu">MENU</StyledLink>
          <StyledLink href="#about">SOBRE</StyledLink>
          <StyledLink href="#contact">CONTATO</StyledLink>
          <ButtonContainer>
            <StyledButton to="/reservation">Reservar</StyledButton>
            {user ? (
              <Logout onClick={signout}>Sair</Logout>
            ) : (
              <StyledLogin to="/signIn">Entrar</StyledLogin>
            )}
          </ButtonContainer>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
