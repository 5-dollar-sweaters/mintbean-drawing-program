import { useStore } from 'lib/zustand/store';

const ControlCenter = () => {
  const { brushRadius1, setBrushRadius1, lazyRadius1, setLazyRadius1 } =
    useStore();

  return (
    <div className='z-30 flex flex-col items-center w-full h-full p-6 bg-gray-800 rounded-md justify-evenly'>
      {/* Brush Stroke */}
      <label htmlFor='brushStroke' className='text-xs font-bold text-white'>
        Brush Stroke
      </label>

      <input
        className='relative w-full h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none'
        name='brushStroke'
        type='range'
        min={1}
        max={50}
        step={1}
        value={brushRadius1}
        onChange={(e) => setBrushRadius1(+e.target.value)}
      />

      {/* Lazy Length*/}

      <label
        htmlFor='lazyLength'
        className='hidden -mb-2 text-xs font-bold text-white'
      >
        Lazy Length
      </label>
      <input
        className='relative hidden w-full h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none'
        type='range'
        name='lazyLength'
        min={1}
        max={50}
        step={2}
        value={lazyRadius1}
        onChange={(e) => setLazyRadius1(+e.target.value)}
      />
    </div>
  );
};

export default ControlCenter;
