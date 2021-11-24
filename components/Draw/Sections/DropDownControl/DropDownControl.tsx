import { useControlStore, useStore } from 'lib/zustand/store';
import { useState } from 'react';
import {
  FiChevronDown,
  FiChevronUp,
  FiSave,
  FiDownloadCloud,
  FiRefreshCw,
  FiDelete,
  FiXCircle,
} from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';

import ColorControlMenu from './ColorControlMenu';
import SaveControlMenu from './SaveControlMenu';
import LoadControlMenu from './LoadControlMenu';

const DropDownControl = () => {
  const { setShowControls, showControls, control, setControl } =
    useControlStore();
  const { canvasRef } = useStore();
  const [rotate, setRotate] = useState(false);

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
      <div className='absolute left-0 z-50 w-full h-12 bg-gray-100 '>
        <nav className='flex flex-row items-center justify-between w-full h-full px-4 lg:pl-40 lg:justify-start lg:space-x-16 lg:'>
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
            className={` ${buttonStyles} ${rotate && ' -rotate-45'}`}
            onClick={async () => {
              await canvasRef.current.undo();
            }}
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
        className={` left-0 absolute z-10 w-full h-1/3  rounded-lg  bg-gray-900 bg-opacity-20  backdrop-filter backdrop-blur-lg  transition duration-300 ease-in-out lg:mt-8  lg:w-96  lg:left-36 ${
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
            className='absolute bottom-0 z-10 flex flex-row justify-end w-full h-8 pr-4 overflow-hidden transition-all duration-300 bg-gray-100 bg-opacity-50 rounded-b-lg cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 hover:h-6 group'
            onClick={() => setShowControls(false)}
          >
            <button className=''>
              <FiChevronUp className='text-3xl text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownControl;
