import { useState, useEffect } from 'react';

import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { FiDelete } from 'react-icons/fi';

export const DeleteDrawingById = ({ id, handleRefresh }) => {
  const [deleteIt, setDeleteIt] = useState(false);
  const { data, error, mutate } = useSWR(
    deleteIt && `/api/deleteDrawing?drawingId=${id}`,
    fetcher
  );

  useEffect(() => {
    mutate();
    setDeleteIt(false);
  }, [data]);

  const handleDelete = async () => {
    try {
      await setDeleteIt(true);
      await handleRefresh();
      await console.log('delete something');
    } catch (error) {
      console.error(error);
    } finally {
      await setDeleteIt(false);
    }
  };

  return (
    <div>
      <button
        className='text-xs text-gray-400 bg-white border rounded-md px-0.5 py-1 hover:text-gray-500 shadow-sm text-shadow-sm'
        onClick={() => handleDelete()}
      >
        <FiDelete className='mx-3 text-lg' />
        {/* delete */}
      </button>
    </div>
  );
};
