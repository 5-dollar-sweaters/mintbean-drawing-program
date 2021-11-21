import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useSaveStore, useStore } from 'lib/zustand/store';
import { saveData } from 'utils/prismaHelpers';

const SaveDialog = () => {
  const { showSaveBox, setShowSaveBox } = useSaveStore();
  const { canvasRef, activeUser } = useStore();
  const [title, setTitle] = useState('');
  const [itSaved, setItSaved] = useState(false);

  console.log(title);

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
    'w-11/12 py-1 text-gray-100 transition-all duration-300   bg-gray-400 rounded-md hover:bg-gray-400 hover:text-gray-600';

  return (
    <div>
      <Dialog
        className='fixed inset-0 z-10 overflow-y-auto'
        open={showSaveBox}
        onClose={() => setShowSaveBox(false)}
      >
        <div className='flex items-center justify-center min-h-screen'>
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

          <Dialog.Title>Save Your Drawing</Dialog.Title>

          <div className='absolute flex items-center justify-center h-24 bg-gray-200 w-72 '>
            {itSaved ? (
              <div className='flex flex-col'>
                <h1>Nice! You saved your drawing!</h1>{' '}
                <button
                  className={buttonStyle}
                  onClick={() => {
                    setShowSaveBox(false);
                    setItSaved(false);
                  }}
                >
                  Go Draw Some More
                </button>
              </div>
            ) : (
              <>
                <form>
                  <textarea
                    placeholder='Title your drawing!'
                    className='px-3 py-2 rounded-md'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </form>
                <button onClick={() => handleSaveDrawing()}>Save</button>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SaveDialog;
