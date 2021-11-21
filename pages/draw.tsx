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

const Draw: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) =>
  //   props: InferGetServerSidePropsType<typeof getServerSideProps>
  {
    const { activeUser, setActiveUser, canvasRef } = useStore();
    const { user } = useUser();
    type DATA_TO_SAVE = { sketchId: string; userId: string };
    const { data, error, mutate } = useSWR(user && '/api/user', fetcher);

    const [showColorControl, setShowColorControl] = useState(true);

    console.log(data);
    useEffect(() => {
      user && setActiveUser(data);
    }, []);

    return (
      <>
        <div id='container' className='w-full px-6 pt-6 bg-gray-200 pb-28'>
          <Head>
            <title>Gahw Drahw</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <div className='top-0 flex flex-col items-center justify-between w-full h-full m-auto mt-8 space-y-6 2xl:w-9/12 xl:w-11/12 lg:h-screen lg:space-y-none lg:flex-row'>
            {/* Color Control Section */}

            <button
              onClick={() => setShowColorControl(true)}
              className={`absolute z-20 flex flex-row items-center justify-center text-2xl font-bold left-4 top-24 lg:hidden  ${
                showColorControl && 'hidden'
              } `}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <span className='ml-2 text-sm'>Colors</span>
            </button>

            <div
              className={`absolute  top-14  lg:top-0  w-full h-64 pb-6 bg-gray-800  bg-opacity-30  mx-6   lg:bg-opacity-0 lg:relative lg:w-2/12  transition-all duration-200  z-20 ${
                showColorControl ? 'translate-x-0' : '-translate-x-full'
              }  lg:translate-x-0`}
            >
              <button
                onClick={() => setShowColorControl(false)}
                className='absolute z-20 text-2xl font-bold right-4 top-4 lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
              <ColorMain />
            </div>
            <div className='w-full mx-6 lg:w-7/12'>
              <CanvasMain />
            </div>
            <div className='w-full mx-6 lg:w-2/12'>
              <ControlCenter />
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
