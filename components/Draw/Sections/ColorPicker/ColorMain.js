import React, { useEffect, useRef } from 'react';
import ColorPickerComponent from './ColorPickerComponent';
import ColorGrid from './ColorGrid';
import { entrance } from './animation';

const ColorMain = () => {
  let intro = useRef(null);
  useEffect(() => {
    entrance(intro);
  }, []);
  return (
    <div
      id='menu'
      ref={(el) => (intro = el)}
      className='flex flex-row items-center justify-center w-full px-5 m-auto lg:flex-col '
    >
      <div className='flex items-center justify-center w-1/2 lg:w-full'>
        <ColorPickerComponent />
      </div>
      <div className='z-10 w-1/2 lg:w-full'>
        <ColorGrid />
      </div>
    </div>
  );
};

export default ColorMain;
