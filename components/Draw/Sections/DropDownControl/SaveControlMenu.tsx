import { useState } from 'react';
import { useControlStore, useSaveStore, useStore } from 'lib/zustand/store';
import { saveData } from 'utils/prismaHelpers';

const SaveControlMenu = () => {
  const { showSaveBox, setShowSaveBox } = useSaveStore();
  const { control, setControl } = useControlStore();
  const { canvasRef, activeUser } = useStore();
  const [title, setTitle] = useState('');
  const [itSaved, setItSaved] = useState(false);

  type SaveData = { data: string; ownerId: string; title: string };

  const handleSaveDrawing = async () => {
    const drawingString = await canvasRef?.current.getSaveData();
    const data: SaveData = {
      data: drawingString,
      ownerId: activeUser?.id,
      title: title,
    };
    try {
      await saveData(data);
      console.log('saved!');
      await setItSaved(true);
      canvasRef.current.clear();
    } catch (error) {
      console.log('failed at req');
      console.log(error);
    }
  };

  const buttonStyle =
    'w-11/12 py-1 text-gray-100 transition-all duration-300   bg-gray-400 rounded-md hover:bg-gray-400 hover:text-gray-600   ';

  return (
    <div>
      {' '}
      {itSaved ? (
        <div className='flex flex-col'>
          <h1>Nice! You saved your drawing!</h1>{' '}
          <button
            className={buttonStyle}
            onClick={() => {
              setShowSaveBox(false);
              setItSaved(false);
              // setControl('load');
            }}
          >
            Go Draw Some More
          </button>
        </div>
      ) : (
        <>
          <form className='flex flex-col items-center justify-center h-full font-fancy '>
            <h1 className='mb-6 text-3xl'>Name that beauty!</h1>
            <input
              type='text'
              placeholder='Title your drawing!'
              className='w-full px-3 py-2 mb-3 font-sans rounded-md shadow-md'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              maxLength={32}
              required
            />
            <button
              className='self-end px-3 py-1 font-sans text-white transition duration-200 ease-in-out bg-gray-600 border border-gray-500 shadow-md rounded-xl hover:bg-gray-400 hover:text-white'
              onClick={() => handleSaveDrawing()}
            >
              Save
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default SaveControlMenu;
