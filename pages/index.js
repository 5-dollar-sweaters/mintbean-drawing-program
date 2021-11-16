import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import CanvasDraw from 'react-canvas-draw';

export default function Home() {
  const [bgBlack, setBgBlack] = useState(false);
  const [brushRadius, setBrushRadius] = useState(12);

  const handleBgBlack = () => {
    setBgBlack(!bgBlack);
  };

  useEffect(() => {
    ReactDOM.render(
      <CanvasDraw
        hideGrid={true}
        canvasWidth={500}
        canvasHeight={500}
        brushRadius={brushRadius}
      />,
      document.querySelector('.main')
    );
  }, [brushRadius]);

  return (
    <div className='flex flex-col min-h-screen py-2 m-auto'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Control Center */}
      <div className='absolute flex items-center justify-center bg-gray-800 w-52 h-52'>
        <input
          className='absolute h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128'
          type='range'
          min='1'
          max='50'
          step='1'
          value={brushRadius}
          onChange={(e) => setBrushRadius(e.target.value)}
        />
      </div>
      <div
        className={` main    w-full h-screen bg-black flex items-center justify-center`}
        onClick={handleBgBlack}
      />
    </div>
  );
}
