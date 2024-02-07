import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  StyledNavbar,
  StyledBrand,
  StyledLink,
  StyledButton,
  BurguerButton,
  StyledLogin,
  ButtonContainer,
} from "../styles/Header";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledNavbar expand="lg">
      <StyledBrand href="#home">
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
            <StyledButton href="#Reservation">Reservar</StyledButton>
            <StyledLogin to="/signIn">Entrar</StyledLogin>
          </ButtonContainer>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
