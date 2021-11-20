import { useState } from 'react';
import colors from 'lib/colorData/colors';
import { useStore } from 'lib/zustand/store';

const ColorGrid = () => {
  // const [theme, setTheme] = useState(colors);
  const { setBrushColor, canvasRef } = useStore();

  return (
    <div className='grid flex-wrap w-full grid-cols-4'>
      {colors.map((color, i) => (
        <button
          key={`colors-grid-${i}`}
          className='flex items-center w-10 h-10 m-1 text-xl rounded-lg shadow-lg lg:w-12 lg:h-12 hover:ring-4 ring-black'
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
