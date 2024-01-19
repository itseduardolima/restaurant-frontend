
import Header from "../../components/Header";
import { Container, HomeSection, Main, OtherSection } from "./styled";

const Sections = () => {
  return (
    <Container>
      <Header />

      <Main>
        <HomeSection>
          <h2>Bem-vindo ao nosso restaurante!</h2>
          <p>Reserve sua mesa para uma experiência gastronômica incrível.</p>
        </HomeSection>
        
        <OtherSection>
          {/* Adicione mais seções conforme necessário para outras funcionalidades */}
        </OtherSection>
      </Main>
    </Container>
  );
};

export default Sections;
