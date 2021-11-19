import { useEffect, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

import { useStore } from 'lib/zustand/store';

const CanvasComponent = () => {
  const canvasReference = useRef();
  const { lazyRadius1, brushRadius1, brushColor, setCanvasRef, canvasRef } =
    useStore();

  const savedData = canvasRef.current?.getSaveData();

  useEffect(() => {
    setCanvasRef(canvasReference);
  }, []);
  // console.log(canvasRef);
  // console.log(savedData);

  return (
    <CanvasDraw
      ref={canvasRef}
      hideGrid={true}
      canvasWidth={700}
      canvasHeight={800}
      brushRadius={brushRadius1}
      brushColor={brushColor}
      lazyRadius={lazyRadius1}
    />
  );
};

export default CanvasComponent;
