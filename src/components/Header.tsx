import { useEffect, useState } from "react";
import styled from "styled-components";
import LogoRestaurant from "../assets/images/logo.png";

const HeaderContainer = styled.div<{ scrolled: boolean }>`
  background-color: ${({ scrolled }) => (scrolled ? "#FDCA63" : "transparent")};
  color: #fff;
  padding: 0.1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    padding: 0.1rem 4rem;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Link = styled.a`
  display: none;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-family: inherit;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  color: var(--bg-secondary);

  &:hover {
    background-color: #ffffff4e;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const ButtonLink = styled.div`
  background-color: #fff;
  color: var(--bg-primary);
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-secondary);
    color: #fff;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo src={LogoRestaurant} alt="Logo do Restaurante" />
      <Navigation>
        <Link>ITEM</Link>
        <Link>ITEM</Link>
        <Link>ITEM</Link>
        <Link>ITEM</Link>
        <ButtonLink>Reservar</ButtonLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
