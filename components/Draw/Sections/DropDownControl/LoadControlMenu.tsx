import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { useStore } from 'lib/zustand/store';
import { DeleteDrawingById } from '../ControlCenter/DeleteDrawingById';

const LoadControlMenu = () => {
  const { activeUser, canvasRef } = useStore();
  const [activeDrawing, setActiveDrawing] = useState('');
  const [success, setSuccess] = useState(false);

  const { data, error, mutate } = useSWR(
    activeUser && `/api/drawings?ownerId=${activeUser?.id}`,
    fetcher
  );

  console.log(data);

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
    <div className='flex flex-col overflow-scroll bg-gray-100 w-72 h-80'>
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
                className='flex flex-row items-center justify-between'
              >
                <button
                  className={`px-2 py-1 text-sm text-left capitalize rounded-sm hover:bg-gray-200  ${
                    activeDrawing === drawing.id ? 'bg-gray-400' : null
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
  );
};

export default LoadControlMenu;
