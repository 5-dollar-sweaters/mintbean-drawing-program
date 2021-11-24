import { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useSWR from 'swr';
import { fetcher } from 'lib/swr/fetcher';
import { FiDelete } from 'react-icons/fi';

const DeleteButton = ({ id, handleRefresh }) => {
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
    } catch (error) {
      console.error(error);
    } finally {
      await setDeleteIt(false);
    }
  };

  return (
    <div>
      <button
        className='text-xs text-gray-400   rounded-md px-0.5 py-1 hover:text-gray-500  text-shadow-sm'
        onClick={() => setDialogOpen(true)}
      >
        <span className='mx-3 text-sm'>X</span>
        {/* delete */}
      </button>

      {/* Delete modal dialog */}
      <Transition.Root show={dialogOpen} as={Fragment}>
        <Dialog
          as='div'
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          className='fixed inset-x-0 z-50 m-auto overflow-y-auto inset-y-36'
        >
          <div className='flex flex-col items-center justify-center w-full h-full '>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 backdrop-filter backdrop-blur-md' />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            {/* <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span> */}
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='z-50 flex flex-col items-center w-64 px-6 pb-6 bg-white rounded-lg shadow-lg '>
                <h1 className='top-0 flex items-center justify-center w-64 mb-4 text-2xl text-white bg-yellow-400 rounded-t-lg h-14 font-fancy '>
                  WAIT!!!
                </h1>
                <h3 className='m-auto mb-4 text-sm text-center text-gray-600 w-44'>
                  Are you sure you want to delete this beautiful drawing?
                </h3>
                <button
                  className='w-40 p-2 mb-2 text-sm text-white bg-red-400 rounded-lg shadow-md hover:bg-red-500 hover:shadow-lg'
                  onClick={handleDelete}
                >
                  Delete Forever
                </button>
                <button
                  className='w-40 p-2 text-sm text-white bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg'
                  onClick={() => setDialogOpen(false)}
                >
                  Nevermind
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default DeleteButton;
