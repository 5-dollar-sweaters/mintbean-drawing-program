const ControlCenter = ({
  brushRadius,
  setBrushRadius,

  lazyRadius,
  setLazyRadius,
}) => {
  return (
    <div className='z-10 flex flex-col items-center h-24 bg-gray-800 md:h-40 justify-evenly'>
      {/* Brush Stroke */}
      <input
        className='relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128'
        type='range'
        min={1}
        max={50}
        step={1}
        value={brushRadius}
        onChange={(e) => setBrushRadius(+e.target.value)}
      />

      {/* Lazy Length*/}
      <input
        className='relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none '
        type='range'
        min={1}
        max={50}
        step={2}
        value={lazyRadius}
        onChange={(e) => setLazyRadius(+e.target.value)}
      />
    </div>
  );
};

export default ControlCenter;
