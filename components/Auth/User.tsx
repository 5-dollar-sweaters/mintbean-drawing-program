import Image from 'next/image';
import { useRouter } from 'next/router';

import { useStore } from 'lib/zustand/store';

const User = ({ userFromNav }) => {
  const { image, name } = userFromNav;
  const { setActiveUser } = useStore();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await router.push('/api/auth/logout');
      await setActiveUser({});
    } catch (error) {}
  };

  return (
    <div className='flex flex-col items-end justify-center h-12'>
      <div className='flex flex-row items-center duration-200'>
        <div className='h-9 w-9 '>
          <Image
            src={image || '/rainbow.png'}
            alt='user profile image'
            width={36}
            height={36}
            className='rounded-full'
          />
        </div>

        <div className='z-20 flex flex-col ml-2 text-left '>
          <span
            className={` text-sm font-medium  capitalize     ${
              router.pathname === '/draw' ? 'text-white' : 'text-gray-700'
            } `}
          >
            {name}
          </span>
          <button
            className='text-xs text-left text-gray-400 transition-all duration-150 hover:scale-125 hover:translate-x-1'
            onClick={() => handleLogOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
