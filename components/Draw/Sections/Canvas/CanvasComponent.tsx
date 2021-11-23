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
    if (width <= 812 && width > 400) {
      setCanvasW(775);
    } else if (width <= 500) {
      setCanvasW(350);
      // setCanvasH(812);
    }

    if (height <= 375) {
      setCanvasH(380);
    } else {
      setCanvasH(900);
    }
  }, [width]);

  useEffect(() => {
    setCanvasRef(canvasReference);
  }, []);

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
