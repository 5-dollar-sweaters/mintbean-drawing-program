import useSWR from 'swr';
import { fetcher } from '../../../../lib/swr/fetcher';
import { useStore } from '../../../../lib/zustand/store';

const UserDrawings = () => {
  const { activeUser, canvasRef } = useStore();
  const { data, error, mutate } = useSWR(
    `/api/drawings?ownerId=${activeUser?.id}`,
    fetcher
  );

  return (
    <div className='bg-white rounded-md w-36 '>
      {data ? (
        data.map((drawing, i) => (
          <button
            className='text-xs'
            key={`user-drawing-${i}`}
            onClick={() => canvasRef.current.loadSaveData(drawing.data)}
          >
            {drawing?.id}
          </button>
        ))
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default UserDrawings;
