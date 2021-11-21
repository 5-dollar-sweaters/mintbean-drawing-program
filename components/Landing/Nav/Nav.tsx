import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PenSVG from './PenSVG';
import { useUser } from '@auth0/nextjs-auth0';
import { useStore } from 'lib/zustand/store';
import User from 'components/Auth/User';
import { fetcher } from 'lib/swr/fetcher';
import useSWR from 'swr';

const Nav = () => {
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
    <div className='w-full my-3 h-9'>
      {/* <div className="flex flex-row items-center justify-center space-x-5 ">
        <PenSVG />
        <button className="transition-all ease-in hover:opacity-100 opacity-70">
          <a href="#About">About Us</a>
        </button>
      </div> */}
      <div className='flex flex-row items-center w-11/12 m-auto md:justify-center md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:2-7/12'>
        <div className='items-center justify-start hidden w-3/12 md:flex'>
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
          onClick={() => router.push('/draw')}
          className='flex flex-col items-center justify-start cursor-pointer md:justify-center md:w-5/12'
        >
          <div className='text-2xl font-fancy md:text-xl md:text-4xl'>
            Drawing App
          </div>
          {/* <div className='text-xs '>by $5sweater</div> */}
        </div>

        <div className='items-center justify-end hidden w-3/12 md:flex'>
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
