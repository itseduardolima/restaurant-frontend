import styled from "styled-components";
import LogoRestaurant from "../assests/images/logo.png"

const HeaderContainer = styled.div`
  background-color: var(--bg-primary);
  color: #fff;
  padding: .8rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 70px;
  height: y0px;
  border-radius: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Link = styled.a `
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    font-family: inherit;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover {
      background-color: #ffffff4e;
    }
`

const ButtonLink = styled.div`
  background-color: #fff;
  color: var(--bg-primary);
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-secondary);
    color: #fff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoRestaurant} />
      <Navigation>
        <Link>Item 1</Link>
        <Link>Item 2</Link>
        <Link>Item 3</Link>
        <Link>Item 4</Link>
        <ButtonLink>Reservar</ButtonLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
