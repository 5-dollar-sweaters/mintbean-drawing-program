import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { hiddenText } from './animation';
import { buttonColor } from './animation';

const Main = () => {
  const router = useRouter();
  let text = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let button = useRef(null);
  let button2 = useRef(null);

  const handleTryIt = async () => {
    try {
      await buttonColor(button, button2);
      await router.push('/draw');
    } catch (error) {}
  };

  useEffect(() => {
    hiddenText(text, text2, text3);
  }, []);

  return (
    <div className='w-full m-auto md:my-36 lg:my-44 md:w-10/12 xl:w-8/12'>
      <a name='Main'></a>
      <div
        id='container'
        className='flex flex-col items-center md:flex-row justify-evenly bg-grey-100 '
      >
        <div
          id='content'
          className='flex flex-col justify-center mt-8 lg:mt-0 flex-nowrap md:w-1/2'
        >
          <div id='main' className='flex flex-col '>
            <div className='overflow-hidden after:contents'>
              <h1
                ref={(el) => (text = el)}
                className='w-full text-5xl lg:text-7xl font-fancy'
              >
                Colorful
              </h1>
            </div>
            <div className='overflow-hidden after:contents'>
              <h2
                ref={(el) => (text2 = el)}
                className='py-2 text-3xl font-normal lg:text-3xl'
              >
                Digital artwork at your
                <br /> fingertips
              </h2>
            </div>
          </div>
          <div
            id='description'
            className='flex w-64 mb-3 text-sm font-light font-lg:text-1xl'
          >
            <h3 ref={(el) => (text3 = el)}>
              Whether you are coloring inside the lines or thinking outside the
              box, its never been easier to get your ideas down
            </h3>
          </div>
          <div
            id='button'
            className='flex flex-col items-center pt-4 mb-8 lg:mb-0 '
          >
            <button
              className='flex flex-row items-center justify-center w-24 overflow-hidden font-bold text-black transition-all ease-in-out border border-black rounded-full cursor-pointer h-9 after:contents bg-grey-100 hover:bg-blue-700 hover:border-blue-700 hover:text-white'
              onClick={() => handleTryIt()}
              ref={(el) => (button2 = el)}
            >
              <span className='font-normal' ref={(el) => (button = el)}>
                Try It
              </span>
            </button>
          </div>
        </div>
        {/* Video */}
        <div className='relative m-4 mb-6 overflow-hidden border-2 border-black rounded-md md:w-1/2'>
          <video loop autoPlay playsInline muted className='object-fill w-96'>
            <source src='/drawing-cropped.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Main;
