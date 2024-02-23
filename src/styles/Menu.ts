import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  padding: 2rem 15px;
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
  margin-bottom: 2rem;
`;

export const CategoryButton = styled.button`
  background-color: var(--bg-primary-light);
  border: none;
  border-radius: 20px;
  font-family: "Handlee", cursive;
  font-weight: bold;
  color: white;
  padding: 10px 20px;
  cursor: pointer;

  &.selected {
    background-color: var(--bg-primary);
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 157px;
  row-gap: 1rem;
  column-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MenuCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #cccc;
`;

export const MenuDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
  width: 100%;
`;

export const MenuItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
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
