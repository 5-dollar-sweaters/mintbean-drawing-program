import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { useStore } from 'lib/zustand/store';
import { useUser } from '@auth0/nextjs-auth0';

const UserDrawings = () => {
  const { user } = useUser;
  const { activeUser, canvasRef } = useStore();
  const [activeDrawing, setActiveDrawing] = useState('');
  const { data, error, mutate } = useSWR(
    `/api/drawings?ownerId=${activeUser?.id}`,
    fetcher
  );

  useEffect(() => {
    mutate();
  }, [activeUser, activeDrawing]);

  const handleSelectTitle = (drawing) => {
    setActiveDrawing(drawing.id);
    canvasRef.current.loadSaveData(drawing.data);
  };

  return (
    <div className='grid w-full grid-cols-2 p-3 space-y-2 overflow-scroll bg-white border-4 border-white rounded-md lg:flex lg:flex-col h-44 '>
      {data ? (
        data.map((drawing, i) => (
          <button
            className={`px-2 py-1 text-sm text-left capitalize rounded-sm hover:bg-gray-200  ${
              activeDrawing === drawing.id ? 'bg-gray-400' : null
            }`}
            key={`user-drawing-${i}`}
            onClick={() => handleSelectTitle(drawing)}
          >
            {drawing?.title}
          </button>
        ))
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default UserDrawings;
