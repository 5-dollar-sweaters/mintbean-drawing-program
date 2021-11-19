import { HexColorPicker } from 'react-colorful';
import { useStore } from 'lib/zustand/store';

const ColorPickerComponent = () => {
  const { brushColor, setBrushColor } = useStore();

  return (
    <div className='w-full'>
      <HexColorPicker color={brushColor} onChange={setBrushColor} />
    </div>
  );
};

export default ColorPickerComponent;
