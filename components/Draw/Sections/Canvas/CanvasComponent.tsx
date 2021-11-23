import React, { createRef, useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

import { useStore } from "lib/zustand/store";
import useWindowDimensions from "utils/useWindowDimensions";

const CanvasComponent = () => {
  const canvasReference = useRef();
  const [canvasRef, setCanvasRef] = useState();
  const { width, height } = useWindowDimensions();
  const { lazyRadius1, brushRadius1, brushColor } = useStore();

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

<<<<<<< HEAD
  // useEffect(() => {
  //   setCanvasRef(canvasReference);
  // }, []);
  // console.log(canvasRef);
  // console.log(savedData);
=======
  useEffect(() => {
    setCanvasRef(canvasReference);
  }, []);
>>>>>>> 2ff4cf68398f1335caafc852f36645d4dd83613f

  return (
    <CanvasDraw
      ref={canvasReference}
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
