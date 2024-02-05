import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  margin-top: 30px;
`;

export const MenuHeader = styled.h1`
  font-size: 50px;
  width: 100px;
  font-family: "Handlee", cursive;
  color: #000;
  border-bottom: 3px solid var(--bg-primary);
  margin-bottom: 20px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const CategoryButton = styled.button`
  background-color: var(--bg-primary-light);
  border: none;
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: white;
  padding: 10px 20px;
  cursor: pointer;

  &.selected {
    background-color: var(--bg-primary);
  }
`;

export const MenuItemContainer = styled.div`
  display: flex;
  padding: 20px 50px;
  border-bottom: 1px solid #cccc;

  @media (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  gap: 20px;
`;

export const MenuDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const MenuItemImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  @media (max-width: 450px) {
    width: 100px;
    height: 100px;
  }
`;

export const MenuItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const MenuIngredients = styled.span`
  font-size: 16px;
`;

export const MenuItemPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: var(--bg-primary);
`;
