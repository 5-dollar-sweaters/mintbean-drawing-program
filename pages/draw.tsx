import ReactDOM from 'react-dom';
import Head from 'next/head';
import { ColorGrid } from '../components/Draw/colorGrid';
import CanvasDraw from 'react-canvas-draw';
import useSWR from 'swr';
import prisma from '../lib/prisma/prisma';
import { useState, useEffect, useRef } from 'react';
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import { useUser, getSession } from '@auth0/nextjs-auth0';
// import { fetcher } from '../lib/swr/fetcher';
import { useStore } from '../lib/zustand/store';

import ColorPickerComponent from '../components/Draw/ColorPickerComponent';
import ControlCenter from '../components/Draw/ControlCenter';
import { Slider } from 'theme-ui';
export const fetcher = (url) => fetch(url).then((res) => res.json());

const Draw: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [brushRadius, setBrushRadius] = useState(12);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [lazyRadius, setLazyRadius] = useState(30);

  const [color, setColor] = useState('#000000');
  const canvasRef: any = useRef();
  const { activeUser, setActiveUser } = useStore();
  const { user } = useUser();
  type DATA_TO_SAVE = { sketchId: string; userId: string };

  const { data, error, mutate } = useSWR(user && '/api/user', fetcher);

  console.log(data);
  useEffect(() => {
    user && setActiveUser(data);
  }, [user]);

  useEffect(() => {
    ReactDOM.render(
      <CanvasDraw
        ref={canvasRef}
        hideGrid={true}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        brushRadius={brushRadius}
        brushColor={color}
        lazyRadius={lazyRadius}
      />,
      document.querySelector('.main')
    );
  }, [brushRadius, canvasWidth, canvasHeight, color, lazyRadius]);

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
    <div
      id='container'
      className='flex flex-col justify-between w-full h-screen p-6 m-auto bg-gray-400 md:flex-row'
    >
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-row items-center m-auto md:w-3/12 md:flex-col'>
        <ColorPickerComponent />
        <ColorGrid setColor={setColor} />
      </div>

      {/* Canvas   */}
      <div className='flex items-center justify-center h-full bg-gray-400 md:w-5/12'>
        <div
          className={` main    bg-gray-400 flex items-center justify-center  rounded-3xl  overflow-hidden`}
        />
      </div>

      <div className='md:w-2/12'>
        <ControlCenter
          brushRadius={brushRadius}
          setBrushRadius={setBrushRadius}
          lazyRadius={lazyRadius}
          setLazyRadius={setLazyRadius}
        />
      </div>
    </div>
  );
};

export default Draw;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const userReq: any = await fetch(`${process.env.NEXT_APP_URL}/api/user`);
  const dbUser: any = await userReq.json();
  console.log(userReq);
  return {
    props: {
      dbUser,
    },
  };
};
