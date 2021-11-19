import Nav from "./Nav/Nav";
import Main from "./Pages/Main";
import Instructions from "./Pages/Instructions";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Pages/Footer";

const Hero = () => {
  return (
    <div className="w-full h-full ">
      <Nav />
      <Main />
      <Instructions />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Hero;
