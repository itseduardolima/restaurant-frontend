import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  StyledNavbar,
  StyledBrand,
  StyledLink,
  BurguerButton,
  BtnContainer,
} from "../styles/Header";
import Logo from "../assets/images/Logo.png";
import AccountMenu from "./Mui/AccountMenu";
import styled from "styled-components";

const Login = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;

const LoginResponsive = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`;

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledNavbar expand="lg">
      <StyledBrand to="/">
        <img src={Logo} alt="Logo" width={97} />
      </StyledBrand>

      <BtnContainer>
        <BurguerButton
          className="custom-toggle-btn"
          onClick={() => setExpanded(!expanded)}
        />
        <Login>
          <AccountMenu />
        </Login>
      </BtnContainer>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ width: "100px" }}>
          <StyledLink href="#menu">Menu</StyledLink>
          <StyledLink href="#about">Sobre</StyledLink>
          <StyledLink href="#contact">Contato</StyledLink>
          <LoginResponsive>
            <AccountMenu />
          </LoginResponsive>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
