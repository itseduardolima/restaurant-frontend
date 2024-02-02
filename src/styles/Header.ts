import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: transparent;
  padding: 10px;
  position: fixed;
  width: 100%;
  transition: background-color 0.3s ease-in-out;

  &.scrolled {
    background-color: #343434;
  }

  @media (min-width: 761px) {
    padding: 1rem 5rem;
  }
`;

export const StyledBrand = styled(Navbar.Brand)`
  margin-right: 0;

  @media (min-width: 991px) {
    margin-right: 60%;
  }
`;

export const StyledLink = styled(Nav.Link)`
  font-size: 16px;
  color: #fff !important;
  font-weight: 800;

  &:hover {
    color: var(--bg-primary) !important;
  }

  &:focus {
    color: #ff9100 !important;
  }
`;

export const StyledButton = styled(Nav.Link)`
  width: 100px;
  background-color: var(--bg-primary);
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  font-weight: 500;
  color: white;

  @media (min-width: 991px) {
    margin-left: 2rem;
  }

  &:hover {
    background-color: #ff9100a6;
    color: white;
  }
`;

export const BurguerButton = styled(Navbar.Toggle)`
  border: none;

  &:focus {
    box-shadow: none !important;
  }
`;