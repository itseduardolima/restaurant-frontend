import React, { useRef } from "react";
import aboutImage from "../assets/images/about-banner.jpg";
import { Container, Description, Image, Text, Title } from "../styles/About";

type AboutProps = {
  id?: string;
};

const About: React.FC<AboutProps> = ({ id }) => {
  const ref = useRef(null);
  return (
    <Container id={id} ref={ref}>
      <Image src={aboutImage} alt="chef" />
      <Description>
        <Title>Seu restaurante</Title>
        <Text>
          Seja qual for seu desejo gastronômico - um hambúrguer suculento,
          batatas fritas crocantes ou uma bebida refrescante, nossa lanchonete
          tem exatamente o que você precisa. Utilizamos apenas ingredientes
          frescos e preparamos cada prato na hora, assegurando o máximo de sabor
          e qualidade. Não hesite em nos fazer uma visita hoje mesmo e desfrutar
          de uma refeição rápida e deliciosamente satisfatória!
        </Text>
      </Description>
    </Container>
  );
};
export default About;
