import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { hoverText } from './animation';

const AboutUs = () => {
  let hover = useRef(null);

  return (
    <div
      id='container'
      className='flex flex-col w-full h-auto text-sm text-gray-800 bg-gray-200 lg:h-auto lg:flex-row lg:flex-1 '
      // className='flex flex-col w-full h-auto text-sm text-white lg:h-auto lg:flex-row lg:flex-1 from-purple-300 to-blue-700 bg-gradient-to-l '
    >
      <a id='About'></a>
      <div
        id='box'
        className='flex flex-col items-center justify-center w-9/12 py-8 m-auto sm:w-9/12 md:w-8/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 3xl:w-7/12 lg:items-start lg:pt-14'
      >
        <span className='w-full h-0.5  bg-white  mb-6 lg:hidden' />

        <div className='relative w-full space-y-10 lg:flex justify-evenly lg:space-y-0 '>
          {devInfo.map((dev, i) => (
            <div
              id='developer'
              className='flex flex-col items-center lg:items-start '
              key={`dev-info-${i}`}
            >
              <a href={dev.website} rel='noreferrer' target='_blank'>
                <div className='mb-4 '>
                  <Image
                    className='transition-all ease-in-out rounded-full hover:opacity-100 opacity-90 '
                    src={dev.imgSrc}
                    alt={dev.imgAlt}
                    width={200}
                    height={200}
                  />
                </div>
                <div
                  id='info'
                  className='text-center lg:flex lg:text-left lg:w-2/5 lg:pl-16 '
                >
                  <div id='name' className='mb-4 lg:flex lg:flex-col'>
                    <h3 className='text-lg font-bold lg:text-2xl'>
                      {dev.name}
                    </h3>
                    <p className='text-xs font-light text-gray-500 lg:mt-1 lg:text-lg'>
                      SOFTWARE DEVELOPER
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <span className='w-full h-0.5  bg-white  mt-6 lg:hidden' />
      </div>

      {/* <h1 className="absolute hidden text-black lg:text-6xl font-fancy lg:block right-32 translate-y-36">
        About Us
      </h1> */}
    </div>
  );
};

export default AboutUs;

const devInfo = [
  {
    name: 'Ian Cameron Lyles',
    imgSrc: '/ian.png',
    imgAlt: 'The developer staring into the camera.',
    description:
      '4 years of experience with all types of things and I know just about all there is to know so dont teach me anything. ',
    website: 'https://www.icld.io/',
  },
  {
    name: 'Ethan William Pierce',
    imgSrc: '/ethan.jfif',
    imgAlt: 'The developer staring into the camera.',
    description:
      'Listen here you young whippersnapper. This is all the things I know how to do, nothing more. All I know is that I know nothing.',
    website: 'https://ethanpierce.netlify.app',
  },
];
