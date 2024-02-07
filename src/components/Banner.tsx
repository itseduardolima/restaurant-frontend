import { Description, StyledBanner, TextOverlay } from "../styles/Banner";
import BannerRestaurant from "../assets/images/restaurant-photo.jpg";
import BannerPizza from "../assets/images/banner-pizza.jpg";
import BannerBurguer from "../assets/images/banner-burguer.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useRef } from "react";

type Props = {
  id?: string;
};

const Banner: React.FC<Props> = ({ id }) => {
  const ref = useRef(null);

  return (
    <Carousel id={id} ref={ref}>
      <Carousel.Item>
        <StyledBanner src={BannerRestaurant} alt="Banner Restaurant" />
        <Description>
          <h1>
            Pérola Lanche <span>&</span> Pizzaria
          </h1>
          <p>
            Venha conhecer para o nosso Lanche & Pizzaria, onde cada pedaço de
            pizza é uma experiência que vale a pena saborear.
          </p>
          <a href="#reservation">Reservar uma mesa</a>
        </Description>
      </Carousel.Item>

      <Carousel.Item>
        <StyledBanner src={BannerPizza} alt="Banner Pizza" />
        <TextOverlay>
          A Melhor Pizza<span>.</span>
        </TextOverlay>
      </Carousel.Item>
      <Carousel.Item>
        <StyledBanner src={BannerBurguer} alt="Banner Pizza" />
        <TextOverlay>
          O melhor Hamburguer<span>.</span>
        </TextOverlay>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
