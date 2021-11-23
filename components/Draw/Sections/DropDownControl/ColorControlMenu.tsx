import ColorGrid from '../ColorPicker/ColorGrid';
import ColorPickerComponent from '../ColorPicker/ColorPickerComponent';
import ControlCenter from '../ControlCenter/ControlCenter';

const ColorControlMenu = () => {
  return (
    <div className='grid content-center justify-center w-full grid-cols-3 gap-x-2 gap-y-2 '>
      <div className='col-start-1 row-span-2'>
        <ColorGrid />
      </div>
      <div className='col-span-2 col-start-2 row-span-1 '>
        <ColorPickerComponent />
      </div>
      <div className='col-span-2 col-start-2 row-start-2'>
        <ControlCenter />
      </div>
    </div>
  );
};

export default ColorControlMenu;
