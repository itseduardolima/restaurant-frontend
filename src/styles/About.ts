import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 5rem;
  width: 100%;
  background-color: var(--bg-primary);
  font-family: var(--font-primarye);
  text-align: center;

  @media (max-width: 820px) {
    padding: 4rem 5px;
  }
`;

export const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 50%;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Handlee", cursive;
  font-weight: bold;
  color: white;

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  font-family: var(--font-);
  color: white;
  line-height: 1.5;

  @media (max-width: 550px) {
    font-size: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  position: relative;
`;