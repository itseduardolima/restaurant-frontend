import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  StyledNavbar,
  StyledBrand,
  StyledLink,
  BurguerButton,
} from "../styles/Header";
import Logo from "../assets/images/Logo.png";
import AccountMenu from "./Mui/AccountMenu";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

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
        <Nav className="ml-auto" style={{width: "100px"}} >
          <StyledLink href="#menu">Menu</StyledLink>
          <StyledLink href="#about">Sobre</StyledLink>
          <StyledLink href="#contact">Contato</StyledLink>
          <AccountMenu />
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
