import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const ColorPickerComponent = () => {
  const [color, setColor] = useState('#aabbcc');

  return (
    <div className='w-full'>
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
};

export default ColorPickerComponent;
