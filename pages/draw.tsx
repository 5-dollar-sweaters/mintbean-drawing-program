import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import CanvasDraw from 'react-canvas-draw';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import useSWR from 'swr';
import { fetcher } from '../lib/swr/fetcher';
import prisma from '../lib/prisma/prisma';

const Draw: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [brushRadius, setBrushRadius] = useState(12);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasHeight, setCanvasHeight] = useState(500);
  const canvasRef: any = useRef();
  const { user } = useUser();
  const { data, error, mutate } = useSWR('/api/user', fetcher);
  console.log(data);
  console.log(user);

  console.log(canvasRef.current);

  type DATA_TO_SAVE = { sketchId: string; userId: string };

  useEffect(() => {
    ReactDOM.render(
      <CanvasDraw
        ref={canvasRef}
        hideGrid={true}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        brushRadius={brushRadius}
        brushColor={'#ffc0cb'}
      />,
      document.querySelector('.main')
    );
  }, [brushRadius, canvasWidth, canvasHeight]);

  const handleSave = async () => {
    const savedDrawing = canvasRef?.current?.getSaveData();
    const dataToSave: DATA_TO_SAVE = {
      sketchId: savedDrawing,
      userId: 'fornow',
    };
    try {
      // await saveData(dataToSave);
      console.log(dataToSave);
      // console.log('You saved it!');
    } catch (error) {}
  };

  return (
    <div className='flex flex-col min-h-screen py-2 m-auto'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='z-10 flex flex-col w-full text-black'></div>
      <button
        className='absolute z-30'
        onClick={() => {
          const saveIT = canvasRef?.current?.getSaveData();
          console.log(saveIT);
          return saveIT;
        }}
      >
        saveIt
      </button>
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

      {/* Canvas   */}
      <div className='flex items-center justify-center h-screen bg-gray-400'>
        <div
          className={` main    bg-gray-400 flex items-center justify-center  rounded-3xl  overflow-hidden`}
        />
      </div>
    </div>
  );
};

export default Draw;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const userReq: any = await fetch(`${process.env.NEXT_APP_URL}/api/user`);
  const dbUser: any = await userReq.json();
  // const drawingReq: any = await fetch(``);
  console.log(dbUser);
  return {
    props: {
      dbUser,
    },
  };
};
