import { HexColorPicker } from 'react-colorful';
import { useStore } from 'lib/zustand/store';
import styles from 'components/Draw/Sections/ColorPicker/ColorPickerComponent.module.css';

const ColorPickerComponent = () => {
  const { brushColor, setBrushColor } = useStore();

  return (
    <HexColorPicker
      color={brushColor}
      onChange={setBrushColor}
      className='w-auto'
    />
  );
};

export default ColorPickerComponent;
