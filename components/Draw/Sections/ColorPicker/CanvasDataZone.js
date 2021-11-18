import React from 'react';
import { useStore } from '../../../../lib/zustand/store';
import { saveData } from '../../../../utils/prismaHelpers';

const CanvasDataZone = () => {
  const { canvasRef, activeUser } = useStore();

  const handleSaveDrawing = async () => {
    const drawingString = await canvasRef.current.getSaveData();
    // console.log(drawingString);
    const data = {
      data: drawingString,
      ownerId: activeUser?.id,
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
    <div>
      <button onClick={() => canvasRef.current.undo()}>UNDO</button>
      <button onClick={() => canvasRef.current.clear()}>CLEAR</button>
      {activeUser && <button onClick={() => handleSaveDrawing()}>SAVE </button>}
    </div>
  );
};

export default CanvasDataZone;
