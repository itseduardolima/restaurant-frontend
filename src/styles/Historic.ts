import { TableCell } from "@mui/material";
import styled from "styled-components";

export const Item = styled(TableCell)`
  font-family: var(--font-primary) !important;
`;

export const CancelButton = styled.button`
  padding: 5px;
  border: none;
  border-radius: 30px;
  background-color: #ff4d4d;
  color: #ffffff; 
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #ff6666;
  }
`;