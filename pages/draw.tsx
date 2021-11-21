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
import Footer from 'components/Landing/Pages/Footer';
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

    // const { data, error, mutate } = useSWR(user && '/api/user', fetcher);

    // console.log(data);

    // useEffect(() => {
    //   user && setActiveUser(data);
    // }, []);

    return (
      <>
        <div id='container' className='w-full bg-gray-200 '>
          <Head>
            <title>Gahw Drahw</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <div className='flex flex-col items-center w-full h-full mx-auto lg:justify-between 2xl:w-9/12 xl:w-11/12 lg:h-screen lg:space-y-none lg:flex-row'>
            <div className='flex lg:flex-row'>
              <div className='hidden w-full mb-6 lg:mx-6 lg:w-2/12 lg:flex'>
                <ColorMain />
              </div>
              <div className='w-full lg:hidden'>
                <DropDownControl />
              </div>
              <div className='relative w-full px-6 mx-6 mt-12 md:h-screen lg:w-7/12'>
                <CanvasMain />
              </div>
              <div className='hidden w-full mx-6 lg:w-2/12 lg:flex'>
                <ControlCenter />
              </div>
            </div>
          </div>
        </div>
      </>
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
