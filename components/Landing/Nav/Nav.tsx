import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
      await router.push('/api/auth/login?returnTo=/draw');
      await mutate();
      // await router.push('/draw');
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
      <div
        className={`flex flex-row-reverse items-center justify-between w-11/12 m-auto lg:flex-row lg:justify-center lg:w-10/12 xl:w-8/12 2xl:2-7/12 ${
          router.pathname === '/draw' && 'text-white'
        }`}
      >
        <div className='items-center lg:w-3/12 lg:flex'>
          {!user ? (
            <button
              className={`transition-all ease-in-out hover:opacity-100 hover:scale-105 opacity-70 lg:text-xl`}
              onClick={() => handleLogIn()}
            >
              LogIn
            </button>
          ) : !data ? (
            <div>...loading</div>
          ) : (
            <User userFromNav={activeUser} />
          )}
        </div>
        <div
          onClick={() => {
            router.pathname === '/' ? router.push('/draw') : router.push('/');
          }}
          className='flex flex-col items-center justify-start w-full cursor-pointer lg:justify-center'
        >
          <div
            className={`text-2xl font-fancy transition-all duration-200 hover:scale-110  lg:text-4xl  h-12 flex items-center hover:text-gray-700
             ${
               router.pathname === '/draw' && 'text-white hover:text-gray-200'
             }`}
          >
            Drawing App
          </div>
        </div>

        <div
          className={`items-center justify-end hidden w-3/12 lg:flex ${
            router.pathname === '/draw' && 'text-white'
          }`}
        >
          <a
            href='https://github.com/5-dollar-sweaters/mintbean-drawing-program'
            rel='noreferrer'
            target='_blank'
            className='transition-all ease-in lg:text-xl hover:opacity-100 opacity-70 hover:scale-105'
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
