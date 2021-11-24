import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { useStore } from 'lib/zustand/store';
// import confetti from 'https://cdn.skypack.dev/canvas-confetti';

import DeleteButton from '../ControlCenter/DeleteButton';

const LoadControlMenu = () => {
  const { activeUser, canvasRef } = useStore();
  const [activeDrawing, setActiveDrawing] = useState('');
  const [success, setSuccess] = useState(false);
  const [checkDelete, setCheckDelete] = useState(false);

  const { data, error, mutate } = useSWR(
    activeUser && `/api/drawings?ownerId=${activeUser?.id}`,
    fetcher
  );

  useEffect(() => {
    mutate();
  }, [activeUser, activeDrawing]);

  const handleSelectTitle = (drawing) => {
    setActiveDrawing(drawing.id);
    canvasRef.current.loadSaveData(drawing.data);
  };

  const handleRefresh = async () => {
    setSuccess(true);
    // confetti({
    //   particleCount: 1000,
    //   startVelocity: 35,
    //   spread: 360,
    //   colors: ['#C41200'],
    //   shapes: ['circle'],
    //   gravity: 0.1,
    // });
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <div className='flex flex-col overflow-y-scroll bg-gray-100 rounded-md shadow-sm w-72 h-80'>
        <h1 className='sticky top-0 flex flex-col py-3 mb-3 text-center bg-blue-300'>
          <span className='text-xs text-white font-fancy'> Drawings By</span>{' '}
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
                <div className='w-full text-center font-fancy'>
                  <div>Success!</div>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      mutate();
                    }}
                  >
                    List
                  </button>
                </div>
              ) : (
                data.map((drawing, i) => (
                  <div
                    key={`drawing-title-${i}`}
                    className='flex flex-row items-center justify-between py-1'
                  >
                    <button
                      className={`px-2 py-1 text-sm text-left capitalize rounded-sm hover:bg-white w-3/4 ${
                        activeDrawing === drawing.id
                          ? 'bg-white rounded-md border  shadow-sm'
                          : null
                      }`}
                      key={`user-drawing-${i}`}
                      onClick={() => handleSelectTitle(drawing)}
                    >
                      {drawing?.title}
                    </button>
                    <DeleteButton
                      id={drawing?.id}
                      handleRefresh={handleRefresh}
                    />
                  </div>
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
