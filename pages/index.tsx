import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import CanvasDraw from 'react-canvas-draw';
import { useUser } from '@auth0/nextjs-auth0';
import Hero from '../components/Landing/Hero';

export default function Home(props) {
  const { user } = useUser();

  return (
    <div className='flex flex-col min-h-screen p-0 m-0 '>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='z-10 flex flex-col w-full p-0 m-0 text-black'>
        <Hero />
      </div>
    </div>
  );
}
