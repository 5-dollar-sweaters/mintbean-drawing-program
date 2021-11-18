import { useState } from 'react';
import colors from '../../lib/data/colors';

const ColorGrid = ({ setColor }) => {
  const [theme, setTheme] = useState(colors);

  return (
    <div className='flex flex-row flex-wrap w-full'>
      {colors.map((color, i) => (
        <button
          key={`colors-grid-${i}`}
          className={`flex items-center w-10 h-10 md:w-12 md:h-12 m-1 text-xl  rounded-lg shadow-lg  hover:ring-4 ring-black  ${color.twnd}`}
          onClick={() => {
            setColor(color.color);
          }}
        ></button>
      ))}
    </div>
  );
};

export default ColorGrid;
