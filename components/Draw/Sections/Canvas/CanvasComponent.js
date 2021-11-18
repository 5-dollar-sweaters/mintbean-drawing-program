import { useEffect, useRef } from 'react';

import CanvasDraw from 'react-canvas-draw';
import { useStore } from '../../../../lib/zustand/store';

const CanvasComponent = () => {
  const canvasReference = useRef();
  const { lazyRadius1, brushRadius1, brushColor, setCanvasRef, canvasRef } =
    useStore();

  const savedData = canvasRef.current?.getSaveData();

  useEffect(() => {
    setCanvasRef(canvasReference);
  }, []);
  console.log(canvasRef);
  // console.log(savedData);

  return (
    <div>
      <div
        className={` main    bg-gray-400 flex items-center justify-center  rounded-3xl  overflow-hidden`}
      />
      <CanvasDraw
        ref={canvasRef}
        hideGrid={true}
        canvasWidth={500}
        canvasHeight={500}
        brushRadius={brushRadius1}
        brushColor={brushColor}
        lazyRadius={lazyRadius1}
      />
    </div>
  );
};

export default CanvasComponent;
