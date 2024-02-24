import { Container } from "react-bootstrap";
import styled, { css } from "styled-components";

export const StyledContainer = styled(Container)`
  padding: 20px;
  padding-top: 9rem;
`;

export const Title = styled.h1`
  font-size: 50px;
  width: 50%;
  font-family: "Handlee", cursive;
  color: #000;
  border-bottom: 3px solid var(--bg-primary);
  margin-bottom: 3rem;

  @media(max-width: 768px) {
    font-size: 30px;
    width: 80%;
  }
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 157px;
  row-gap: 1rem;
  column-gap: 1rem;
  width: 100%;
  align-items: center;
  padding: 20px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TableCard = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid var(--bg-primary);

  > h4 {
    font-family: var(--font-primary);
  }
`;

export const Section = styled.div`

  label {
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
  }

  select,
  input[type="date"],
  input[type="number"] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;

    @media (min-width: 768px) {
      width: 20%;
    }
  }

  option {
    padding: 10px;
    font-size: 16px;
  }
`;

export const ReservationBtn = styled.button`
  padding: 5px 20px;
  font-size: 16px;
  background-color: var(--bg-primary);
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #e0e0e0;
      cursor: not-allowed;
    `}
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
