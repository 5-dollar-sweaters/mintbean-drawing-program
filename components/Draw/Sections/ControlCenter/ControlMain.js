import ControlCenter from './ControlCenter';
import UserDrawings from './UserDrawings';
import CanvasDataZone from './CanvasDataZone';

const ControlMain = () => {
  return (
    <div className='flex flex-row items-center justify-center w-full space-x-4 lg:flex-col lg:space-y-4 '>
      <div className='w-1/4 h-full lg:w-full'>
        <ControlCenter />
      </div>
      <div className='w-2/4 h-full lg:w-full'>
        <UserDrawings />
      </div>
      <div className='w-1/4 h-full lg:w-full'>
        <CanvasDataZone />
      </div>
    </div>
  );
};

export default ControlMain;
