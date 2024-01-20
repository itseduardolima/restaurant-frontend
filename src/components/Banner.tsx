import styled from "styled-components";
import pizza from "../assets/images/pizza.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 10rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Heading = styled.h1`
  margin-bottom: 0.5rem;
  color: var(--bg-secondary);
  font-family: inherit;
  font-weight: 900;
`;

const SubHeading = styled.h2`
  margin-bottom: 0.5rem;
  color: var(--bg-primary);
  font-family: inherit;
  font-weight: 900;
`;

const Description = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  > p {
    width: 90%;
    color: var(--bg-primary);
    font-family: inherit;
    font-weight: 900;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

const StyledImage = styled.img`
  display: none;
  width: 600px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ReserveButton = styled.button`
  background-color: var(--bg-primary);
  color: #fff;
  padding: 1rem 2rem;
  font-size: 16px;
  font-weight: 900;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--bg-secondary);
  }
`;

export const Banner = () => {
  const handleReservationClick = () => {
    console.log("Reservar uma mesa agora");
  };

  return (
    <Container>
      <ContentContainer>
        <Heading>Dudu Pizzaria</Heading>
        <SubHeading>A melhor de toda cidade!</SubHeading>
        <Description>
          <p>
            Desfrute da experiência irresistível e deliciosa da melhor pizza da
            cidade. Não espere mais para se deliciar!
          </p>
        </Description>
        <ReserveButton onClick={handleReservationClick}>
          Reserve uma mesa agora
        </ReserveButton>
      </ContentContainer>
      <ContentContainer>
        <StyledImage src={pizza} alt="pizza" />
      </ContentContainer>
    </Container>
  );
};
