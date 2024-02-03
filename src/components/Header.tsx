import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { StyledNavbar, StyledBrand, StyledLink, StyledButton, BurguerButton } from "../styles/Header";
import Logo from "../assets/images/Logo.svg"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
