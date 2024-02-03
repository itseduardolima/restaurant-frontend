import { Description, StyledBanner, TextOverlay } from "../styles/Banner";
import BannerRestaurant from "../assets/images/restaurant-photo.jpg";
import BannerPizza from "../assets/images/banner-pizza.jpg";
import BannerBurguer from "../assets/images/banner-burger.jpg";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <StyledBanner src={BannerRestaurant} alt="Banner Restaurant" />
        <Description>
          Pérola Lanche <span>&</span> Pizzaria
          <p>
            Venha conhecer a Pérola Lanche & Pizzaria,onde cada pedaço de pizza
            é uma experiência que vale a pena saborear.
          </p>
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
