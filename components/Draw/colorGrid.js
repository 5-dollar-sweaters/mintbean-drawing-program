import { useState } from 'react';
import { colors } from '../../lib/data/colors';

export const ColorGrid = ({ setColor }) => {
  // const [theme, setTheme] = useState(colors);

  return (
    <div
      id='button-grid'
      className='z-10 flex flex-row flex-wrap w-full h-auto '
    >
      {colors.map((color, i) => (
        <div
          key={`color-grid-item${i}`}
          className={`flex items-center  w-10 h-10 md:w-12 md:h-12 m-1 text-xl rounded-lg shadow-lg bg-${color.twnd} hover:ring-4 ring-black`}
          onClick={() => {
            setColor(color.color);
          }}
        ></div>
      ))}
    </div>
  );
};
