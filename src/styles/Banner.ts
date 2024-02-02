import styled from "styled-components";

export const StyledBanner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
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
  font-family: "Kaushan Script", cursive;

  > span {
   color:  var(--bg-primary);
   font-family: "Kaushan Script", cursive;
  }
`;