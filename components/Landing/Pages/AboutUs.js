import Image from 'next/image';

const AboutUs = () => {
  return (
    <div
      id='container'
      className='flex flex-col w-full h-full text-sm text-white lg:h-screen lg:flex-row lg:flex-1 from-purple-100 to-blue-700 bg-gradient-to-l'
    >
      <a name='About'></a>
      <div
        id='box'
        className='flex flex-col items-center justify-center w-11/12 py-8 m-auto sm:w-9/12 md:w-8/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 3xl:w-7/12 lg:items-start lg:pt-14'
      >
        <span className='w-full h-0.5  bg-white  mb-6 lg:hidden' />

        <div className='relative w-full space-y-10'>
          {devInfo.map((dev, i) => (
            <div
              id='developer'
              className='flex flex-col items-center lg:items-start'
              key={`dev-info-${i}`}
            >
              <div className='mb-4'>
                <Image
                  className='rounded-full '
                  src={dev.imgSrc}
                  alt={dev.imgAlt}
                  width={200}
                  height={200}
                />
              </div>
              <div id='info' className='text-center lg:text-left lg:w-2/5'>
                <div id='name' className='mb-4 lg:flex lg:flex-col'>
                  <h3 className='text-lg lg:text-3xl'>{dev.name}</h3>
                  <p className='text-xs text-gray-200 lg:-mt-1 lg:text-lg '>
                    SOFTWARE DEVELOPER
                  </p>
                </div>
                <div id='ian-description' className='text-sm '>
                  <p>{dev.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <span className='w-full h-0.5  bg-white  mt-6 lg:hidden' />
      </div>

      <h1 className='absolute hidden text-black text-9xl font-fancy lg:block right-32 translate-y-36'>
        About Us
      </h1>
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
  },
  {
    name: 'Ethan William Pierce',
    imgSrc: '/ethan.jfif',
    imgAlt: 'The developer staring into the camera.',
    description:
      'Listen here you young whippersnapper. This is all the things I know how to do, nothing more. All I know is that I know nothing.',
  },
];
