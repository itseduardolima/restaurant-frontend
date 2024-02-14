import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 0;
`;

export const StyledParallax = styled(Parallax)`
  height: 500px;
  
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  height: 500px;
  gap: 20px;

  > h2 {
    color: white;
    font-family: "Berkshire Swash", serif;
  }
`;

export const ReservationBtn = styled(Link)`
  padding: 13px;
  width: 150px;
  background-color: var(--bg-primary);
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-family: "Montserrat", serif;
`;
