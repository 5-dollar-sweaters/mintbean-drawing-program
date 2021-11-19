import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import React from 'react';
import { useStore } from 'lib/zustand/store';
import { saveData } from 'utils/prismaHelpers';

const CanvasDataZone = () => {
  const { user } = useUser();
  const { canvasRef, activeUser } = useStore();
  const [showSaveBox, setShowSaveBox] = useState(false);
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

  return (
    <div className='flex flex-col w-full p-2 space-y-2 bg-white rounded-md'>
      <button onClick={() => canvasRef.current.undo()}>UNDO</button>
      <button onClick={() => canvasRef.current.clear()}>CLEAR</button>
      {user && !showSaveBox && (
        <button onClick={() => setShowSaveBox(true)}>SAVE </button>
      )}
      {showSaveBox && (
        <div className='absolute flex items-center justify-center h-24 bg-gray-200 w-72 '>
          <form>
            <textarea
              placeholder='Title your drawing!'
              className='px-3 py-2 rounded-md'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </form>
          <button onClick={() => handleSaveDrawing()}>Save</button>
        </div>
      )}
    </div>
  );
};

export default CanvasDataZone;
