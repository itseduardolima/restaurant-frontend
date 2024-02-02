import { StyledBanner, TextOverlay } from "../styles/Banner";
import BannerPizza from "../assets/images/banner.jpg";

export const Banner = () => {
  return (
    <>
      <StyledBanner src={BannerPizza} alt="Banner Pizza" />
      <TextOverlay>
        Bem-vindo ao Dudu Pizzaria<span>.</span>
      </TextOverlay>
    </>
  );
};
