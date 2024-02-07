import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const StyledBanner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`;

export const Description = styled.div`
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  > h1 {
    font-family: "Berkshire Swash", serif;
    font-weight: bold;
    font-size: 4rem;
    color: white;

    > span {
      color: var(--bg-primary);
      font-family: "Berkshire Swash", serif;
    }

    @media (max-width: 450px) {
      font-size: 3rem;
    }
  }

  > p {
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    font-family: "Montserrat", serif;
  }

  > a {
    padding: 10px;
    width: 30%;
    background-color: var(--bg-primary);
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-family: "Montserrat", serif;

    @media (max-width: 768px) {
      width: 50%;
      font-size: 1rem;
    }
  }

  @media (max-width: 820px) {
    top: 50%;
    left: 50%;
    width: 95%;
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Berkshire Swash", serif;

  > span {
    color: var(--bg-primary);
    font-family: "Berkshire Swash", serif;
  }
`;

export const ButtonReservation = styled(Nav.Link)``;
