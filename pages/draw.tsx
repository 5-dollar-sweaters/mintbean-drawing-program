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
import ControlMain from 'components/Draw/Sections/ControlCenter/ControlMain';
import ControlCenter from 'components/Draw/Sections/ControlCenter/ControlCenter';
import CanvasMain from 'components/Draw/Sections/Canvas/CanvasMain';
import DropDownControl from 'components/Draw/Sections/DropDownControl/DropDownControl';
import useWindowDimensions from 'utils/useWindowDimensions';

const Draw: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) =>
  //   props: InferGetServerSidePropsType<typeof getServerSideProps>
  {
    const { activeUser, setActiveUser, canvasRef } = useStore();
    const { user } = useUser();
    const { width, height } = useWindowDimensions();

    return (
      <div id='container' className='w-full bg-gray-200 '>
        <Head>
          <title>Gahw Drahw</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='flex flex-col items-center w-full h-full mx-auto lg:justify-between 2xl:w-9/12 xl:w-11/12 lg:h-screen '>
          <div className='flex justify-center lg:flex-row'>
            <div className='hidden mb-6 lg:mx-6 lg:w-2/12 '>
              <ControlMain />
            </div>
            <div className=''>
              <DropDownControl />
            </div>
            <div className='relative mt-12 lg:w-full'>
              <CanvasMain />
            </div>
            <div className='hidden w-full mx-6 lg:w-2/12 '>
              <ControlCenter />
            </div>
          </div>
        </div>
        <div>delete me</div>
      </div>
    );
  };

export default Draw;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // const userReq: any = await fetch(`${process.env.NEXT_APP_URL}/api/user`);
  //   const dbUser: any = await userReq.json();
  //   console.log(userReq);
  return {
    props: {
      // dbUser,
    },
  };
};
