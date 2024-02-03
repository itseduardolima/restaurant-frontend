import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: white;
  padding: 10px;
  position: fixed;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;

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
  color: var(--bg-primary) !important;
  font-weight: 800;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  padding-left: 5px;
  padding-bottom: 15px;

  &:hover {
    border-left: 2px solid var(--bg-primary);
  }

  &:focus {
    border-left: 2px solid var(--bg-primary);
  }

  @media (min-width: 991px) {
    padding-bottom: 0;
    &:hover {
      border-bottom: 2px solid var(--bg-primary);
      border-left: 2px solid transparent;
    }

    &:focus {
      border-bottom: 2px solid var(--bg-primary);
      border-left: 2px solid transparent;
    }
  }
`;

export const StyledButton = styled(Nav.Link)`
  width: 100px;
  background-color: var(--bg-primary);
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  font-weight: 500;
  color: white;

  &:hover {
    background-color: #ff9100a6;
    color: white;
  }

  &:focus {
    color: white !important;
    background-color: #ff9100a6;
  }

  @media (min-width: 991px) {
    margin-left: 2rem;
  }
`;

export const BurguerButton = styled(Navbar.Toggle)`
  border: none;

  &:focus {
    box-shadow: none !important;
  }
`;