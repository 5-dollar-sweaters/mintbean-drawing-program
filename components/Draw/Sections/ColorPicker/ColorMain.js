import ColorPickerComponent from './ColorPickerComponent';
import ColorGrid from './ColorGrid';

const ColorMain = () => {
  return (
    <div className='flex flex-row items-center justify-center w-full m-auto lg:flex-col'>
      <div className='flex items-center justify-center w-1/2 lg:w-full'>
        <ColorPickerComponent />
      </div>
      <div className='w-1/2 lg:w-full'>
        <ColorGrid />
      </div>
    </div>
  );
};

export default ColorMain;
