import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Reservation from "../../components/Reservation";

const Home = () => {
  return (
    <>
      <Header  />
      <Banner id="home" />
      <Menu id="menu" />
      <Reservation />
    </>
  );
};

export default Home;
