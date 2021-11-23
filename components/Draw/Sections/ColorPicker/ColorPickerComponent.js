import { HexColorPicker } from 'react-colorful';
import { useStore } from 'lib/zustand/store';
import styles from 'components/Draw/Sections/ColorPicker/ColorPickerComponent.module.css';

const ColorPickerComponent = () => {
  const { brushColor, setBrushColor } = useStore();

  return (
    // <section className={styles.responsive}>
    <HexColorPicker
      color={brushColor}
      onChange={setBrushColor}
      className='w-auto'
    />
    // </section>
  );
};

export default ColorPickerComponent;
