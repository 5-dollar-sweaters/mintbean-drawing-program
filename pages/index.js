import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [bgBlack, setBgBlack] = useState(false);

  const handleBgBlack = () => {
    setBgBlack(!bgBlack);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div
        className={`w-full h-screen ${bgBlack ? 'bg-black' : ' bg-blue-900'}`}
        onClick={handleBgBlack}
      />
    </div>
  );
}
