import Image from 'next/image';
import { useRouter } from 'next/router';

import { useStore } from 'lib/zustand/store';

const User = ({ userFromNav }) => {
  const { image, name, id } = userFromNav;
  const { activeUser, setActiveUser } = useStore();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await router.push('/api/auth/logout');
      await setActiveUser([]);
      alert('logged out');
    } catch (error) {}
  };

  return (
    <div className='w-full'>
      <div className='flex items-center w-full h-12 '>
        <div
          className='flex flex-row duration-200 align-center'
          // onClick={() => router.push(`/user/${id}`)}
        >
          <div className='h-9 w-9 '>
            <Image
              src={image || '/rainbow.png'}
              alt='user profile image'
              width={36}
              height={36}
              className='rounded-full'
            />
          </div>

          <div className='ml-2 '>
            <div className='-mb-2 text-sm font-medium text-gray-700 capitalize '>
              {name}
            </div>
            <button
              className='text-xs text-gray-400 transition-all duration-150 hover:scale-125 hover:translate-x-1'
              onClick={() => handleLogOut()}
            >
              Logout
            </button>
            {/* <p className='h-4 text-xs text-gray-500'>{userName}</p> */}
          </div>
        </div>

        {/* Follow button  - dynamic based on following state
      {/* <button
          className={`w-16  p-0.5 shadow-sm text-sm font-medium border rounded-xl ${
            following ? 'text-white bg-gray-600' : 'text-gray-600 bg-white'
          } `}
          onClick={following ? () => handleUnfollow() : () => handleFollow()}
        >
          {following ? 'Unfollow' : 'Follow'}
        </button> */}
      </div>
    </div>
  );
};

export default User;
