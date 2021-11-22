import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PenSVG from './PenSVG';
import { useUser } from '@auth0/nextjs-auth0';
import { useStore } from 'lib/zustand/store';
import User from 'components/Auth/User';
import { fetcher } from 'lib/swr/fetcher';
import useSWR from 'swr';

const Nav = () => {
  const [changeTitle, setChangeTitle] = useState(false);
  const { user } = useUser();
  const { activeUser, setActiveUser } = useStore();
  const router = useRouter();
  const { data, error, mutate } = useSWR(user && `/api/user`, fetcher);

  useEffect(() => {
    user && setActiveUser(data);
  }, [data]);

  const handleLogIn = async () => {
    try {
      await router.push('/api/auth/login');
      mutate();

      console.log('logged in');
    } catch (error) {
      console.log(error);
    } finally {
      console.log(user);
    }
  };

  return (
    <div
      className={`z-50 w-full h-16 pt-3 pb-4 bg-white  ${
        router.pathname === '/draw' && 'bg-gray-700'
      }`}
    >
      {/* <div className="flex flex-row items-center justify-center space-x-5 ">
        <PenSVG />
        <button className="transition-all ease-in hover:opacity-100 opacity-70">
          <a href="#About">About Us</a>
        </button>
      </div> */}
      <div className='flex flex-row-reverse items-center justify-between w-11/12 m-auto md:flex-row md:justify-center md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:2-7/12'>
        <div className='items-center lg:w-3/12 md:flex'>
          {!user ? (
            <button onClick={() => handleLogIn()}>LogIn</button>
          ) : !data ? (
            <div>...loading</div>
          ) : (
            <>
              <div className='transition-all ease-in hover:opacity-100 opacity-70'>
                <User userFromNav={activeUser} />
              </div>
            </>
          )}
        </div>
        <div
          onClick={() => {
            router.pathname === '/' ? router.push('/draw') : router.push('/');
          }}
          className='flex flex-col items-center justify-start cursor-pointer md:justify-center md:w-5/12'
        >
          <div
            onMouseEnter={() => setChangeTitle(true)}
            onMouseLeave={() => setChangeTitle(false)}
            className={`text-2xl font-fancy md:text-xl lg:text-4xl w-56 ${
              router.pathname === '/draw' && 'text-white'
            }`}
          >
            {router.pathname === '/draw' ? (
              <>
                <div className=''>
                  {changeTitle ? 'Head Home' : 'Drawing App'}
                </div>

                {/* <div className={`block ${changeTitle && 'hidden'}`}>
                  Drawing App
                </div> */}
              </>
            ) : (
              <div>Drawing App</div>
            )}
          </div>
          {/* <div className='text-xs '>by $5sweater</div> */}
        </div>

        <div
          className={`items-center justify-end hidden w-3/12 md:flex ${
            router.pathname === '/draw' && 'text-white'
          }`}
        >
          <a
            href='https://github.com/5-dollar-sweaters/mintbean-drawing-program'
            rel='noreferrer'
            target='_blank'
            className='transition-all ease-in hover:opacity-100 opacity-70'
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
