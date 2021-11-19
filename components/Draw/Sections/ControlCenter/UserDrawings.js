import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { useStore } from 'lib/zustand/store';

const UserDrawings = () => {
  const { activeUser, canvasRef } = useStore();
  const [activeDrawing, setActiveDrawing] = useState();
  const { data, error, mutate } = useSWR(
    `/api/drawings?ownerId=${activeUser?.id}`,
    fetcher
  );

  return (
    <div className='flex flex-col p-2 space-y-2 bg-white rounded-md w-36'>
      {data ? (
        data.map((drawing, i) => (
          <button
            className='px-2 py-1 text-sm text-left capitalize rounded-sm hover:bg-gray-200 active:bg-gray-400'
            key={`user-drawing-${i}`}
            onClick={() => canvasRef.current.loadSaveData(drawing.data)}
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
