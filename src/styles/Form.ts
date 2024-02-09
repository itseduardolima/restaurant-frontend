import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  font-family: var(--font-primary);
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  color: var(--bg-text);
`;

export const View = styled(IconButton)`
  background-color: transparent !important;
  color: var(--bg-dark) !important;
`;

