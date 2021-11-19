import { useRouter } from 'next/router';
import Image from 'next/image';

const Main = () => {
  const router = useRouter();

  const handleTryIt = async () => {
    try {
      await router.push('/draw');
    } catch (error) {}
  };

  return (
    <div
      id='container'
      className='flex flex-row items-center h-screen justify-evenly bg-grey-100'
    >
      <div id='content' className='flex flex-col justify-center flex-nowrap'>
        <div id='main' className='flex flex-col content-center'>
          <h1 className='text-6xl font-fancy'>Creativity</h1>
          <h2 className='py-2 text-3xl '>
            at your<br></br> fingertips
          </h2>
        </div>
        <div id='description' className='flex w-64'>
          <h3>
            Whether you are coloring inside the linese or thinking outside the
            box, its never been easier to get your ideas down
          </h3>
        </div>
        <div id='button' className='flex flex-col items-center pt-4 '>
          <button
            className='flex flex-row items-center justify-center w-24 h-10 font-bold text-black border-2 border-black rounded-full cursor-pointer bg-grey-100 hover:bg-blue-700 hover:border-blue-700 hover:text-white'
            onClick={() => handleTryIt()}
          >
            Try It
          </button>
        </div>
      </div>
      <div className='relative w-96 h-72'>
        <Image
          src='/capture.png'
          alt='image'
          layout='fill'
          quality={30}
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default Main;
