import { Description, StyledBanner, TextOverlay } from "../styles/Banner";
import BannerRestaurant from "../assets/images/restaurant-photo.jpg";
import BannerPizza from "../assets/images/banner-pizza.jpg";
import BannerBurguer from "../assets/images/banner-burguer.jpg";
import Carousel from "react-bootstrap/Carousel";
import {gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ReservationBtn } from "../styles/Parallax";

type Props = {
  id?: string;
};

const Banner: React.FC<Props> = ({ id }) => {
  const ref = useRef(null);

  useEffect(() => {
    animateTextAndButton();
  }, []);

  const animateTextAndButton = () => {
    gsap.fromTo(
      ".description",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", }
    );

    gsap.fromTo(
      ".reservation-button",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
    );
  };

  return (
    <Carousel id={id} ref={ref}>
      <Carousel.Item>
        <StyledBanner src={BannerRestaurant} alt="Banner Restaurant" />
        <Description className="description">
          <h1>
            Pérola Lanche <span>&</span> Pizzaria
          </h1>
          <p>
            Venha conhecer para o nosso Lanche & Pizzaria, onde cada pedaço de
            pizza é uma experiência que vale a pena saborear.
          </p>
          <ReservationBtn to="/reservation" className="reservation-button">
            Reservar uma mesa
          </ReservationBtn>
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