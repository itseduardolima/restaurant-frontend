import { Banner } from "../../components/Banner";
import Header from "../../components/Header";
import { Container, HomeSection, Main } from "./styled";

const Sections = () => {
  return (
    <Container>
      <Header />
      <Main>
        <HomeSection>
          <Banner />
        </HomeSection>
      </Main>
    </Container>
  );
};

export default Sections;
