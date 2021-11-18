import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PenSVG from './PenSVG';
import { useUser } from '@auth0/nextjs-auth0';
import { useStore } from '../../../lib/zustand/store.js';

const Nav = () => {
  const { user } = useUser();
  const { activeUser, setActiveUser } = useStore();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await router.push('/api/auth/logout');
      await setActiveUser([]);
      console.log('logged out');
      console.log(activeUser);
    } catch (error) {}
  };

  const handleLogIn = async () => {
    try {
      await router.push('/api/auth/login');
      await console.log(user);
      if (user) {
        console.log(user);
      }
      console.log('logged in');
    } catch (error) {
      console.log(error);
    } finally {
      console.log(user);
    }
  };

  // console.log(activeUser);
  // console.log(user);
  return (
    <div className='flex flex-row items-center w-full mt-3 justify-evenly h-9'>
      <div className='flex flex-row items-center justify-center space-x-5'>
        <PenSVG />
        <button>About Us</button>
      </div>

      <div
        onClick={() => router.push('/draw')}
        className='flex flex-col items-center justify-center cursor-pointer'
      >
        <div className='text-lg md:text-xl lg:text-2xl'>Drawing App</div>
        <div className='text-xs '>by $5sweater</div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-5'>
        <a href='https://github.com/5-dollar-sweaters/mintbean-drawing-program'>
          Github
        </a>

        {!user ? (
          <button onClick={() => handleLogIn()}>LogIn</button>
        ) : (
          <button onClick={() => handleLogOut()}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Nav;
