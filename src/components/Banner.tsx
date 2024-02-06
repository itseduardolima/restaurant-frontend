import { Description, StyledBanner, TextOverlay } from "../styles/Banner";
import BannerRestaurant from "../assets/images/restaurant-photo.jpg";
import BannerPizza from "../assets/images/banner-pizza.jpg";
import BannerBurguer from "../assets/images/banner-burguer.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useRef } from "react";
import { useRestaurant } from "../hooks/useRestaurant";
import { IRestaurant } from "../services/RestaurantService/Irestaurant";

type Props = {
  id?: string;
};

const Banner: React.FC<Props> = ({ id }) => {
  const { data } = useRestaurant();
  const ref = useRef(null);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel id={id} ref={ref}>
      {data.map((restaurant: IRestaurant) => (
        <Carousel.Item key={restaurant.restaurant_id}>
          <StyledBanner src={BannerRestaurant} alt="Banner Restaurant" />
          <Description>
            <h1>{restaurant.restaurant_name}</h1>
            <p>
              Venha conhecer a {restaurant.restaurant_name}, onde cada pedaço de pizza
              é uma experiência que vale a pena saborear.
            </p>
            <a href="#reservation">Reservar uma mesa</a>
          </Description>
        </Carousel.Item>
      ))}
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
