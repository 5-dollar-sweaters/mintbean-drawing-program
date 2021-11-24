import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { useStore } from 'lib/zustand/store';
import { shootConfetti } from 'utils/confettiHelper';
import { Dialog, Transition } from '@headlessui/react';

import DeleteButton from '../ControlCenter/DeleteButton';
import { useUser } from '@auth0/nextjs-auth0';
import LoginToLoadFiles from './LoginToSave';

const LoadControlMenu = () => {
  const { activeUser, canvasRef } = useStore();
  const { user } = useUser();
  const [activeDrawing, setActiveDrawing] = useState('');
  const [success, setSuccess] = useState(false);
  const [checkDelete, setCheckDelete] = useState(false);

  const { data, error, mutate } = useSWR(
    activeUser && `/api/drawings?ownerId=${activeUser?.id}`,
    fetcher
  );

  useEffect(() => {
    mutate();
  }, [activeUser, activeDrawing, setSuccess]);

  const handleSelectTitle = (drawing) => {
    setActiveDrawing(drawing.id);
    canvasRef.current.loadSaveData(drawing.data);
  };

  const handleRefresh = async () => {
    await setSuccess(true);
    await shootConfetti();
    await mutate();
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };

  return (
    <div>
      <div className='flex flex-col overflow-y-scroll rounded-md shadow-sm bg-gray-50 w-72 h-80'>
        <h1 className='sticky top-0 flex flex-col py-3 mb-3 text-center bg-gray-200'>
          <span className='text-xs text-white '>Drawings By</span>{' '}
          <span className='text-xl text-gray-700 font-fancy'>
            {activeUser.name}
          </span>
        </h1>
        <div className='px-3'>
          {error ? (
            <div>...error</div>
          ) : data ? (
            <>
              {success ? (
                <div className='items-center justify-center w-full text-4xl text-center text-blue-500 font-fancy'>
                  <div>Success!</div>
                  <div>You Deleted it!</div>
                </div>
              ) : !user ? (
                <div className='flex flex-col items-center justify-center w-full text-center h-44'>
                  <LoginToLoadFiles />
                </div>
              ) : (
                data.map((drawing, i) => (
                  <>
                    <span className='block w-full h-px bg-gray-300' />
                    <div
                      key={`drawing-title-${i}`}
                      className='flex flex-row items-center justify-between py-1 text-gray-700'
                    >
                      <button
                        className={`px-2 py-1 text-sm text-left capitalize rounded-sm hover:bg-white  ease-in-out  transition-all duration-300  w-5/6 ${
                          activeDrawing === drawing.id
                            ? 'bg-white rounded-md border  shadow-sm'
                            : null
                        }`}
                        key={`user-drawing-${i}`}
                        onClick={() => handleSelectTitle(drawing)}
                      >
                        {drawing?.title}
                      </button>
                      <div className='w-1/6'>
                        <DeleteButton
                          id={drawing?.id}
                          title={drawing?.title}
                          handleRefresh={handleRefresh}
                        />
                      </div>
                    </div>
                  </>
                ))
              )}
            </>
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadControlMenu;
