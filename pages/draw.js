import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import CanvasDraw from 'react-canvas-draw';
import { useUser } from '@auth0/nextjs-auth0';

export default function Draw() {
  const [brushRadius, setBrushRadius] = useState(12);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasHeight, setCanvasHeight] = useState(500);

  const { user, loading } = useUser();

  useEffect(() => {
    ReactDOM.render(
      <CanvasDraw
        hideGrid={true}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        brushRadius={brushRadius}
        brushColor={'#ffc0cb'}
      />,
      document.querySelector('.main')
    );
  }, [brushRadius, canvasWidth, canvasHeight]);

  return (
    <div className='flex flex-col min-h-screen py-2 m-auto'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='z-10 flex flex-col w-full text-black'></div>

      {/* Control Center */}
      <div className='absolute z-10 flex flex-col items-center bg-gray-800 justify-evenly w-52 h-52'>
        {/* Brush Stroke */}
        <input
          className='relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128'
          type='range'
          min={1}
          max={50}
          step={1}
          value={brushRadius}
          onChange={(e) => setBrushRadius(+e.target.value)}
        />
        {/* Canvas Width */}
        <input
          className='relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128 '
          type='range'
          min={200}
          max={1000}
          step={25}
          value={canvasWidth}
          onChange={(e) => setCanvasWidth(+e.target.value)}
        />
        {/* Canvas Height */}
        <input
          className='relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128 '
          type='range'
          min={200}
          max={700}
          step={25}
          value={canvasHeight}
          onChange={(e) => setCanvasHeight(+e.target.value)}
        />
      </div>

      {/* Canvas div  className='main' */}
      <div className='flex items-center justify-center h-screen bg-gray-400'>
        <div
          className={` main    bg-gray-400 flex items-center justify-center  rounded-3xl  overflow-hidden`}
        />
      </div>
    </div>
  );
}
