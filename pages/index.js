import { useState } from 'react';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const [bgBlack, setBgBlack] = useState(false);
  const { user, loading } = useUser();

  console.log(user);

  const handleBgBlack = () => {
    setBgBlack(!bgBlack);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {!user ? (
        <a href='/api/auth/login'>Login</a>
      ) : (
        <a href='/api/auth/logout'>Logout</a>
      )}

      <div
        className={`w-full h-screen ${bgBlack ? 'bg-black' : ' bg-blue-900'}`}
        onClick={handleBgBlack}
      />
    </div>
  );
}
