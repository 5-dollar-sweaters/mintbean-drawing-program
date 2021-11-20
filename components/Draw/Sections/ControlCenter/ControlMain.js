import ControlCenter from './ControlCenter';
import UserDrawings from './UserDrawings';
import CanvasDataZone from './CanvasDataZone';

const ControlMain = () => {
  return (
    <div className='flex flex-row items-center justify-center w-full h-40 mx-auto lg:flex-col lg:space-y-4 lg:h-full'>
      <div className='w-1/4 h-full mx-2 lg:h-40 lg:w-full'>
        <ControlCenter />
      </div>
      <div className='w-2/4 mx-2 lg:w-full'>
        <UserDrawings />
      </div>
      <div className='w-1/4 h-full mx-2 lg:w-full'>
        <CanvasDataZone />
      </div>
    </div>
  );
};

export default ControlMain;
