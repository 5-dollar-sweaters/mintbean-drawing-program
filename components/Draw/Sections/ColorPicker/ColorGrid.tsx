import { useEffect, useRef, useState } from 'react';
import colors from 'lib/colorData/colors';
import { useStore } from 'lib/zustand/store';
import { buttonSlide } from './animation';

const ColorGrid = () => {
  // const [theme, setTheme] = useState(colors);
  const { setBrushColor, canvasRef } = useStore();
  const [current, setCurrent] = useState('');

  // let button = useRef(null);
  // useEffect(() => {
  //   buttonSlide(button);
  // }, []);

  return (
    <div
      // ref={(el) => (button = el)}
      className='grid justify-center h-full grid-cols-2 '
    >
      {colors.map((color, i) => (
        <button
          key={`colors-grid-${i}`}
          className={`flex items-center w-10 h-10 m-1 text-xl rounded-lg shadow-lg lg:w-12 lg:h-12 hover:ring-4 ring-pink-100  ${
            color.color === current && 'ring-pink-100'
          } `}
          style={{ background: `${color.color}` }}
          onClick={() => {
            setBrushColor(color.color);
            setCurrent(`${color.color}`);
          }}
        ></button>
      ))}
    </div>
  );
};

export default ColorGrid;
