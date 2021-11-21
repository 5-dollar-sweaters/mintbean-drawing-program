import { useControlStore } from 'lib/zustand/store';
import {
  FiChevronDown,
  FiChevronUp,
  FiSave,
  FiDownloadCloud,
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

  const handleShowDrawingControls = () => {};

  return (
    <>
      <div className='absolute left-0 z-50 w-full h-12 bg-red-200 lg:hidden'>
        <nav className='flex flex-row items-center justify-between w-full h-full px-4'>
          {showControls ? (
            <FiChevronUp
              className='text-2xl text-black'
              onClick={() => setShowControls(false)}
            />
          ) : (
            <FiChevronDown
              className='text-2xl text-black '
              onClick={() => setShowControls(true)}
            />
          )}
          <BsPencil onClick={() => setControl('color')} />
          <FiDownloadCloud
            className='text-xl'
            onClick={() => setControl('load')}
          />
          <FiSave className='text-xl ' onClick={() => setControl('save')} />
        </nav>
      </div>
      {/* Mobile Control */}
      <div
        className={` left-0 absolute z-10 w-full h-1/3 bg-gray-700 rounded-lg bg-opacity-90  transition duration-300 ease-in-out  ${
          showControls ? '-translate-y-0' : '-translate-y-full'
        } `}
      >
        <div className='flex flex-col items-center justify-center w-full h-full m-auto'>
          {/* Color Control */}

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
            className='absolute bottom-0 z-10 flex flex-row justify-end w-full h-4 pr-4 overflow-hidden transition-all duration-300 bg-gray-300 bg-opacity-50 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:bg-opacity-50 hover:h-6 group'
            onClick={() => setShowControls(false)}
          >
            <button className='translate-y-10 group-hover:translate-y-0 '>
              {' '}
              <FiChevronUp className='text-lg text-white' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDownControl;
