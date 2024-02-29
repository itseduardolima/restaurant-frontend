import About from "../../components/About";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ParallaxEffect from "../../components/Parallax";


const Home = () => {
  return (
    <>
      <Header  />
      <Banner id="home" />
      <Menu id="menu" />
      <About id="about" />
      <ParallaxEffect />
      <Footer />
    </>
  );
};

export default Home;
