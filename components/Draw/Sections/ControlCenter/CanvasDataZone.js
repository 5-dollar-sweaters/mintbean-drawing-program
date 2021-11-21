import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import React from 'react';
import { useSaveStore, useStore } from 'lib/zustand/store';
import SaveDialog from './SaveDialog';

const CanvasDataZone = () => {
  const { user } = useUser();
  const { canvasRef, activeUser } = useStore();
  const { showSaveBox, setShowSaveBox } = useSaveStore();

  const buttonStyle =
    'w-11/12 py-1 text-gray-100 transition-all duration-300   bg-gray-400 rounded-md hover:bg-gray-200 hover:text-gray-600';

  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-2 space-y-4 bg-white rounded-md lg:h-auto'>
      <button className={buttonStyle} onClick={() => canvasRef.current.undo()}>
        UNDO
      </button>
      <button className={buttonStyle} onClick={() => canvasRef.current.clear()}>
        CLEAR
      </button>
      {user && !showSaveBox && (
        <button className={buttonStyle} onClick={() => setShowSaveBox(true)}>
          SAVE{' '}
        </button>
      )}

      {showSaveBox && <SaveDialog />}
    </div>
  );
};

export default CanvasDataZone;
