import { useControlStore, useStore } from 'lib/zustand/store';
import {
  FiChevronDown,
  FiChevronUp,
  FiSave,
  FiDownloadCloud,
  FiRefreshCw,
} from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';

import ColorGrid from '../ColorPicker/ColorGrid';
import ColorPickerComponent from '../ColorPicker/ColorPickerComponent';
import SaveDialog from '../ControlCenter/SaveDialog';
import ColorControlMenu from './ColorControlMenu';
import SaveControlMenu from './SaveControlMenu';
import UserDrawings from '../ControlCenter/UserDrawings';
import LoadControlMenu from './LoadControlMenu';

const DropDownControl = () => {
  const { setShowControls, showControls, control, setControl } =
    useControlStore();
  const { canvasRef } = useStore();

  const handleSaveControls = () => {
    if (showControls && control === 'save') {
      setShowControls(false);
    } else {
      setShowControls(true);
      setControl('save');
    }
  };

  const handleLoadFileControls = () => {
    if (showControls && control === 'load') {
      setShowControls(false);
    } else {
      setShowControls(true);
      setControl('load');
    }
  };

  const handleColorControls = () => {
    if (showControls && control === 'color') {
      setShowControls(false);
    } else {
      setShowControls(true);
      setControl('color');
    }
  };

  const buttonStyles =
    'text-xl text-black transition-all duration-200 ease-linear hover:scale-125';

  return (
    <div className='w-full'>
      <div className='absolute left-0 z-50 w-full h-12 bg-blue-100 lg:hidden'>
        <nav className='flex flex-row items-center justify-between w-full h-full px-4'>
          {showControls ? (
            <FiChevronUp
              className={`  text-3xl ${buttonStyles}`}
              onClick={() => setShowControls(false)}
            />
          ) : (
            <FiChevronDown
              className={buttonStyles}
              onClick={() => setShowControls(true)}
            />
          )}
          <FiRefreshCw
            className={buttonStyles}
            onClick={() => canvasRef.current.undo()}
          />
          <BsPencil className={buttonStyles} onClick={handleColorControls} />

          <FiDownloadCloud
            className={buttonStyles}
            onClick={handleLoadFileControls}
          />
          <FiSave className={buttonStyles} onClick={handleSaveControls} />
        </nav>
      </div>
      {/* Mobile Control */}
      <div
        className={` left-0 absolute z-10 w-full h-1/3  rounded-lg  bg-gray-900 bg-opacity-20  backdrop-filter backdrop-blur-lg  transition duration-300 ease-in-out  ${
          showControls ? '-translate-y-0' : '-translate-y-full'
        } `}
      >
        <div className='flex flex-col items-center justify-center w-full h-full m-auto'>
          {control === 'color' && (
            <div>
              <ColorControlMenu />
            </div>
          )}

          {control === 'save' && (
            <div>
              <SaveControlMenu />
            </div>
          )}

          {control === 'load' && (
            <div>
              <LoadControlMenu />
            </div>
          )}
          <div
            className='absolute bottom-0 z-10 flex flex-row justify-end w-full h-4 pr-4 overflow-hidden transition-all duration-300 bg-gray-200 bg-opacity-50 rounded-b-lg cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 hover:h-6 group'
            onClick={() => setShowControls(false)}
          >
            <button className='translate-y-10 group-hover:translate-y-0 '>
              {' '}
              <FiChevronUp className='text-lg text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownControl;
