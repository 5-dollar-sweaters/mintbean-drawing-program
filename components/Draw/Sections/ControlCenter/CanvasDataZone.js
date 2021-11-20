import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import React from 'react';
import { useSaveStore, useStore } from 'lib/zustand/store';
import { saveData } from 'utils/prismaHelpers';
import SaveDialog from 'components/Draw/Sections/ControlCenter/SaveDialog';

const CanvasDataZone = () => {
  const { user } = useUser();
  const { canvasRef, activeUser } = useStore();
  const { showSaveBox, setShowSaveBox } = useSaveStore();
  const [title, setTitle] = useState('');

  console.log(title);

  const handleSaveDrawing = async () => {
    const drawingString = await canvasRef.current.getSaveData();
    const data = {
      data: drawingString,
      ownerId: activeUser?.id,
      title: title,
    };
    try {
      await saveData(data);
      await alert('saved');
      canvasRef.current.clear();
    } catch (error) {
      console.log(error);
    }
  };

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

      {showSaveBox && (
        // <div className='absolute flex items-center justify-center h-24 bg-gray-200 w-72 '>
        //   <form>
        //     <textarea
        //       placeholder='Title your drawing!'
        //       className='px-3 py-2 rounded-md'
        //       onChange={(e) => setTitle(e.target.value)}
        //       value={title}
        //     />
        //   </form>
        //   <button onClick={() => handleSaveDrawing()}>Save</button>
        // </div>
        <SaveDialog />
      )}
    </div>
  );
};

export default CanvasDataZone;
