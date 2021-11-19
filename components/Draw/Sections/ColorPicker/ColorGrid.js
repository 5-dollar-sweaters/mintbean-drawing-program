import { useState } from "react";
import colors from "lib/colorData/colors";
import { useStore } from "lib/zustand/store";

const ColorGrid = () => {
  // const [theme, setTheme] = useState(colors);
  const { setBrushColor, canvasRef } = useStore();

  return (
    <div className="flex flex-row flex-wrap w-full">
      {colors.map((color, i) => (
        <button
          key={`colors-grid-${i}`}
          className="flex items-center w-10 h-10 md:w-12 md:h-12 m-1 text-xl  rounded-lg shadow-lg  hover:ring-4 ring-black"
          style={{ background: `${color.color}` }}
          onClick={() => {
            setBrushColor(color.color);
          }}
        ></button>
      ))}
    </div>
  );
};

export default ColorGrid;
