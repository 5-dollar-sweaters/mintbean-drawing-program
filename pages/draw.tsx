import Head from 'next/head';

import useSWR from 'swr';
import { useState, useEffect, useRef } from 'react';
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from 'next';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import { fetcher } from '../lib/swr/fetcher';
import { useStore } from '../lib/zustand/store';
import ColorMain from '../components/Draw/Sections/ColorPicker/ColorMain';
import ControlCenter from '../components/Draw/Sections/ControlCenter/ControlMain';
import CanvasMain from '../components/Draw/Sections/Canvas/CanvasMain';
import { prisma } from '@prisma/client';

const Draw: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { activeUser, setActiveUser, canvasRef } = useStore();
  const { user } = useUser();
  type DATA_TO_SAVE = { sketchId: string; userId: string };

  console.log(user);

  const GetData = (endpoint: string) => {
    try {
      const { data, error, mutate } = useSWR(user && `${endpoint}`, fetcher);
      return { data };
    } catch (error) {
      console.log('error:', error);
      throw error;
    }
  };

  const userData = GetData('/api/user');

  useEffect(() => {
    user && setActiveUser(userData?.data);
  }, [userData.data]);

  return (
    <div id='container' className='p-6 bg-gray-400 '>
      <Head>
        <title>Gahw Drahw</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col items-center justify-between w-full h-full space-y-6 lg:h-screen lg:space-y-none lg:space-x-6 lg:flex-row'>
        <div className=''>
          <ColorMain />
        </div>
        <div>
          <CanvasMain />
        </div>
        <div>
          <ControlCenter />
        </div>
      </div>
    </div>
  );
};

export default Draw;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const userReq: any = await fetch(`${process.env.NEXT_APP_URL}/api/user`);
  const dbUser: any = await userReq.json();
  // console.log(dbUser);

  // const userDrawings = await prisma.drawing.findMany({
  //   where: {
  //     ownderId:
  //   }
  // })

  return {
    props: {
      dbUser,
    },
  };
};
