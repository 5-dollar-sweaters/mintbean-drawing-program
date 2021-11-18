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

const Draw: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { activeUser, setActiveUser, canvasRef } = useStore();
  const { user } = useUser();
  type DATA_TO_SAVE = { sketchId: string; userId: string };
  const { data, error, mutate } = useSWR(user && '/api/user', fetcher);

  console.log(data);
  useEffect(() => {
    user && setActiveUser(data);
  }, []);

  console.log(canvasRef);

  return (
    <div
      id='container'
      className='flex flex-col justify-between w-full h-screen p-6 m-auto bg-gray-400 md:flex-row'
    >
      <Head>
        <title>Gahw Drahw</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <ColorMain />
      </div>

      <div>
        <CanvasMain />
      </div>

      <div>
        <ControlCenter />
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
