import { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.svg";
import { BurguerButton, StyledBrand, StyledButton, StyledLink, StyledNavbar } from "../styles/Header";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <StyledBrand href="#home">
        <img src={Logo} alt="Logo" width={97} />
      </StyledBrand>
      <BurguerButton
        className="custom-toggle-btn"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <StyledLink href="#home">MENU</StyledLink>
          <StyledLink href="#link">SOBRE</StyledLink>
          <StyledLink href="#contact">CONTATO</StyledLink>
          <StyledButton href="#Reservation">Reservar</StyledButton>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
