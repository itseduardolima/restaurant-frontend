import styled from "styled-components";

export const StyledBanner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`;

export const Description = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
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
  > p {
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    position: absolute;
    top: 210%;
    left: 50%;
  }

  @media (max-width: 820px) {
    top: 50%;
    left: 50%;

    > p {
      top: 150%;
    }
  }

  @media (max-width: 450px) {
    > p {
      display: none;
    }
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
