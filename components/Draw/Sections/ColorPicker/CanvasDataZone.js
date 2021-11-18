import React from "react";
import { useStore } from "../../../../lib/zustand/store";

const CanvasDataZone = () => {
  const { canvasRef } = useStore();

  return (
    <div>
      <button onClick={() => canvasRef.current.undo()}>UNDO</button>
      <button onClick={() => canvasRef.current.clear()}>CLEAR</button>
    </div>
  );
};

export default CanvasDataZone;
