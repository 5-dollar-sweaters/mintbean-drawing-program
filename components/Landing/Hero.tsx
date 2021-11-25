import Main from 'components/Landing/Pages/Main';
import Instructions from './Pages/Instructions';
import AboutUs from './Pages/AboutUs';
const Hero = () => {
  return (
    <div className='w-full h-full'>
      <Main />
      <Instructions />
      <AboutUs />
    </div>
  );
};

export default Hero;
