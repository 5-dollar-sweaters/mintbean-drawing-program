import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

const ColorPickerComponent = () => {
  const [color, setColor] = useColor('hex', '#121212');

  return (
    <div className='w-full'>
      <ColorPicker
        height={228}
        color={color}
        onChange={setColor}
        hideHSV
        dark
      />
    </div>
  );
};

export default ColorPickerComponent;
