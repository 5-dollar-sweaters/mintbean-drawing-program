import { useRouter } from 'next/router';
import PenSVG from './PenSVG';
import { useUser } from '@auth0/nextjs-auth0';

const Nav = () => {
  const { user } = useUser();
  const router = useRouter();
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
        <div className='text-lg'>Drawing App</div>
        <div className='text-xs '>by $5sweater</div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-5'>
        <a href='https://github.com/5-dollar-sweaters/mintbean-drawing-program'>
          Github
        </a>

        {!user ? (
          <a href='/api/auth/login'>Login</a>
        ) : (
          <a href='/api/auth/logout'>Logout</a>
        )}
      </div>
    </div>
  );
};

export default Nav;
