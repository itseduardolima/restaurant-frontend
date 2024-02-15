import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: white;
  padding: 10px;
  position: fixed;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);


  @media (min-width: 761px) {
    padding: 1rem 5rem;
  }
`;

export const StyledBrand = styled(Link)`
  margin-right: 0;

  @media (min-width: 991px) {
    margin-right: 56%;
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 991px) {
   flex-direction: column;
  }
`;

export const StyledButton = styled.a`
  padding: 0 30px;
  width: 100px;
  background-color: var(--bg-primary);
  border: none;
  border-radius: 20px;
  text-decoration: none;
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
    margin-left: 1rem;
  }
`;

export const BurguerButton = styled(Navbar.Toggle)`
  border: none;

  &:focus {
    box-shadow: none !important;
  }
`;

export const StyledLogin = styled(Link)`
  width: 100px;
  border: 1px solid var(--bg-primary);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  font-weight: 500;
  color: var(--bg-primary);
  text-decoration: none;

  &:hover {
    background-color: #ff9100ab;
    color: white;
    border: none;
  }
`;

export const Logout = styled.button`
  width: 100px;
  border: 1px solid var(--bg-primary);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  font-weight: 500;
  color: var(--bg-primary);
  text-decoration: none;

  &:hover {
    background-color: #ff9100ab;
    color: white;
    border: none;
  }
`;

