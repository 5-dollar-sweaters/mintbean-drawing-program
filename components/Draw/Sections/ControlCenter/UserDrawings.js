import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { useStore } from 'lib/zustand/store';

const UserDrawings = () => {
  const { activeUser, canvasRef } = useStore();
  const [activeDrawing, setActiveDrawing] = useState('');
  const { data, error, mutate } = useSWR(
    `/api/drawings?ownerId=${activeUser?.id}`,
    fetcher
  );

  const handleSelectTitle = (drawing) => {
    setActiveDrawing(drawing.id);
    canvasRef.current.loadSaveData(drawing.data);
  };

  return (
    <div className='flex flex-col w-full p-2 space-y-2 bg-white rounded-md'>
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
