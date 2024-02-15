import lustres from "../assets/images/lustres.jpg";
import { Container, ContentContainer, ReservationBtn, StyledParallax } from "../styles/Parallax";

const ParallaxEffect = () => {
  return (
    <Container>
      <StyledParallax bgImage={lustres} strength={500}>
        <ContentContainer>
          <h2>Você precisar estar logado para realizar a reserva de uma mesa.</h2>
          <ReservationBtn to="/reservation">Reservar agora</ReservationBtn>
        </ContentContainer>
      </StyledParallax>
    </Container>
  );
};

export default ParallaxEffect;
