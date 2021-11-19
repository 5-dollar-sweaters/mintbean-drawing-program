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
        <div id='main' className=''>
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

        <button
          className='flex flex-row justify-center w-24 h-10 font-bold text-black border-2 border-black rounded-full cursor-pointer bg-grey-100 hover:bg-blue-700 hover:border-blue-700 hover:text-white'
          onClick={() => handleTryIt()}
        >
          Try It
        </button>
      </div>
      <div className=''>
        <Image src='/capture.png' alt='image' width={500} height={350} />
      </div>
    </div>
  );
};

export default Main;
