import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { FiDelete } from 'react-icons/fi';

export const DeleteDrawingById = ({ id, handleRefresh }) => {
  const [deleteIt, setDeleteIt] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

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
        onClick={() => setDialogOpen(true)}
      >
        <FiDelete className='mx-3 text-lg' />
        {/* delete */}
      </button>

      {/* Delete modal dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        className='fixed inset-0 z-50 overflow-y-auto'
      >
        <div className='z-50 flex flex-col items-center justify-center w-full h-screen min-h-screen '>
          <Dialog.Overlay className='fixed inset-0 z-50 bg-black opacity-40 backdrop-filter backdrop-blur-lg' />
          {/* <Transition> */}
          <div className='z-50 flex flex-col bg-gray-50 w-52 h-72'>
            <Dialog.Title className='text-lg text-center font-fancy '>
              Are you sure you want to delete your drawing?
            </Dialog.Title>
            <button onClick={handleDelete}>Delete Forever</button>
            <button onClick={() => setDialogOpen(false)}>
              Nevermind. It's too precious
            </button>
            {/* </Transition> */}
          </div>
        </div>
      </Dialog>
    </div>
  );
};
