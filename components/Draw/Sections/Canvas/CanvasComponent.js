import { useEffect, useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

import { useStore } from 'lib/zustand/store';
import useWindowDimensions from 'utils/useWindowDimensions';

const CanvasComponent = () => {
  const canvasReference = useRef();
  const { width, height } = useWindowDimensions();
  const { lazyRadius1, brushRadius1, brushColor, setCanvasRef, canvasRef } =
    useStore();

  const [canvasW, setCanvasW] = useState(1000);
  const [canvasH, setCanvasH] = useState(900);

  useEffect(() => {
    if (width <= +1023) {
      console.log('cool');
      setCanvasW(800);
      setCanvasH(900);
    } else {
      setCanvasW(1000);
      setCanvasH(800);
    }
  }, [width]);

  useEffect(() => {
    setCanvasRef(canvasReference);
  }, []);
  // console.log(canvasRef);
  // console.log(savedData);

  return (
    <CanvasDraw
      ref={canvasRef}
      hideGrid={true}
      canvasWidth={canvasW}
      canvasHeight={canvasH}
      brushRadius={brushRadius1}
      brushColor={brushColor}
      lazyRadius={lazyRadius1}
      enablePanAndZoom={true}
    />
  );
};

export default CanvasComponent;
