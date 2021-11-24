import { useState, useEffect, Fragment } from 'react';
import { useControlStore, useSaveStore, useStore } from 'lib/zustand/store';
import { Dialog, Transition } from '@headlessui/react';
import { FiPenTool, FiSave } from 'react-icons/fi';

const SaveModal = ({ itSaved, handleCloseModal }) => {
  const { showSaveBox, setShowSaveBox } = useSaveStore();
  const { control, setControl, setShowControls } = useControlStore();

  return (
    <Transition.Root show={itSaved} as={Fragment}>
      <Dialog
        as='div'
        open={itSaved}
        onClose={() => handleCloseModal()}
        className='fixed inset-x-0 z-50 m-auto overflow-y-auto inset-y-36'
      >
        <div className='flex flex-col items-center w-full h-full '>
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

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='z-50 flex flex-col items-center w-64 px-6 pb-6 bg-white rounded-lg shadow-lg h-80'>
              <Dialog.Title className='top-0 flex items-center justify-center w-64 mb-2 text-2xl text-white bg-green-400 rounded-t-lg h-14 font-fancy'>
                {' '}
                Nice Work!
              </Dialog.Title>

              <h3 className='m-auto text-sm text-center text-gray-600 w-44'>
                You saved your masterpiece
              </h3>
              <button
                className='flex flex-row items-center w-40 p-2 mb-4 text-sm text-white bg-pink-400 rounded-lg shadow-md hover:bg-red-500 hover:shadow-lg'
                onClick={() => {
                  setShowSaveBox(false);
                  handleCloseModal();
                  setShowControls(false);
                }}
              >
                <FiPenTool className='text-3xl' />
                <div>Go back to your drawing</div>
              </button>
              <button
                className='flex flex-row items-center w-40 p-2 text-sm text-white bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg'
                onClick={() => {
                  handleCloseModal();
                  setControl('load');
                  setShowSaveBox(true);
                }}
              >
                <FiSave className='text-4xl' />
                <div>See Your list of saved drawings</div>
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SaveModal;
