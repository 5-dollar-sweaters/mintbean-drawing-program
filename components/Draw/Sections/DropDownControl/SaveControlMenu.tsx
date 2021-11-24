import { useState } from 'react';
import { useControlStore, useSaveStore, useStore } from 'lib/zustand/store';
import { saveData } from 'utils/prismaHelpers';
import { useForm } from 'react-hook-form';
import SaveModal from '../ControlCenter/SaveModal';
import { useUser } from '@auth0/nextjs-auth0';
import LoginToSave from './LoginToSave';

const SaveControlMenu = () => {
  const { showSaveBox, setShowSaveBox } = useSaveStore();
  const { control, setControl } = useControlStore();
  const { canvasRef, activeUser } = useStore();
  const { user } = useUser();
  const [title, setTitle] = useState('');
  const [itSaved, setItSaved] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(activeUser);

  type SaveData = { data: string; ownerId: string; title: string };

  const onSubmit = async (formData) => {
    console.log(formData);
    const drawingString = await canvasRef?.current.getSaveData();
    const data: SaveData = {
      data: drawingString,
      ownerId: activeUser?.id,
      title: formData?.title,
    };
    try {
      await saveData(data);
      console.log('saved!');
      await setItSaved(true);
      await reset();
    } catch (error) {
      console.log('failed at req');
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setItSaved(false);
    reset();
  };

  const buttonStyle =
    'w-11/12 py-1 text-gray-100 transition-all duration-300   bg-gray-400 rounded-md hover:bg-gray-400 hover:text-gray-600   ';

  return (
    <div>
      <SaveModal itSaved={itSaved} handleCloseModal={handleCloseModal} />
      {itSaved ? (
        <div className='flex flex-col'>
          <h1>Nice! You saved your drawing!</h1>{' '}
          <button
            className={buttonStyle}
            onClick={() => {
              setShowSaveBox(false);
              setItSaved(false);
              setControl('load');
              reset();
            }}
          >
            Go Draw Some More
          </button>
        </div>
      ) : (
        <>
          {user ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col items-center justify-center h-full '
            >
              <h1 className='mb-6 text-3xl'>Save that beauty!</h1>
              <input
                id='title'
                {...register('title', { required: true })}
                type='text'
                placeholder='Title your drawing!'
                className='w-full px-3 py-2 mb-3 font-sans rounded-md shadow-md'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                maxLength={32}
                minLength={5}
              />
              <button
                type='submit'
                className='self-end px-3 py-1 font-sans text-white transition duration-200 ease-in-out bg-gray-600 border border-gray-500 shadow-md rounded-xl hover:bg-gray-400 hover:text-white'
              >
                Save
              </button>
            </form>
          ) : (
            <LoginToSave />
          )}
        </>
      )}
    </div>
  );
};

export default SaveControlMenu;
