import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { useStore } from 'lib/zustand/store';
import { DeleteDrawingById } from '../ControlCenter/DeleteDrawingById';

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
  };

  return (
    <div>
      <h1 className='flex flex-col mb-3 text-center text-shadow-md '>
        <span className='text-xs text-gray-500 font-fancy'> Drawings By</span>{' '}
        <span className='text-xl text-gray-700 font-fancy'>
          {activeUser.name}
        </span>
      </h1>
      <div className='flex flex-col px-3 py-2 overflow-y-scroll bg-gray-100 rounded-md shadow-sm w-72 h-80'>
        {error ? (
          <div>...error</div>
        ) : data ? (
          <>
            {success ? (
              <>
                <div>Success!</div>
                <button
                  onClick={() => {
                    setSuccess(false);
                    mutate();
                  }}
                >
                  List
                </button>
              </>
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
                  <DeleteDrawingById
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
  );
};

export default LoadControlMenu;
