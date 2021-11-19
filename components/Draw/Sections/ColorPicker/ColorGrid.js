import { useState } from 'react';
// import { colors } from 'lib/colorData/colors';
import { useStore } from 'lib/zustand/store';

const ColorGrid = () => {
  // const [theme, setTheme] = useState(colors);
  const { setBrushColor, canvasRef } = useStore();

  return (
    <div className='flex flex-row flex-wrap w-full'>
      {tryColors.map((color, i) => (
        <button
          key={`colors-grid-${i}`}
          className={`flex items-center w-10 h-10 md:w-12 md:h-12 m-1 text-xl  rounded-lg shadow-lg  hover:ring-4 ring-black  ${color.twnd}`}
          onClick={() => {
            setBrushColor(color.color);
          }}
        ></button>
      ))}
    </div>
  );
};

export default ColorGrid;

const tryColors = [
  { name: 'orange', color: '#FF991A', twnd: 'bg-orng' },
  { name: 'red', color: '#C41200', twnd: 'bg-rd' },
  { name: 'yellow', color: '#FFF00D', twnd: 'bg-rd' },
  { name: 'pink', color: '#FFA8F7', twnd: 'bg-pnk' },
  { name: 'purple', color: '#913DFF', twnd: 'bg-prpl' },
  { name: 'blue', color: '#008AFF', twnd: 'bg-blu' },
  { name: 'brown', color: '#6B3D00', twnd: 'bg-brwn' },
  { name: 'gray', color: '#A8ADAD', twnd: 'bg-gry' },
  { name: 'black', color: '#000000', twnd: 'bg-blck' },
  { name: 'white', color: '#ffffff', twnd: 'bg-wht' },
];
