import { instructions } from 'lib/instructionData/instructionData';

const Instructions = () => {
  return (
    <div id='container' className='h-screen mt-8 bg-gray-900 lg:mt-0'>
      <div id='top'>
        <div
          id='title'
          className='flex justify-center pt-16 text-4xl text-white lg:text-6xl font-fancy'
        >
          <h1>A helping hand</h1>
        </div>
        <div
          id='description'
          className='flex justify-center px-16 py-4 text-center text-white lg:text-2xl'
        >
          <h2>
            Struggling to get started? <br></br>Scroll down to see a list of
            option plus some handy tips and tricks
          </h2>
        </div>
      </div>
      <div id='bottom'>
        <div id='image-row' className='contents'>
          <div
            id='cards'
            className='inline-grid grid-cols-7 border w-max gap-x-12'
          >
            {instructions.map((instruction, i) => {
              return (
                <div
                  key={i}
                  id='card'
                  className='w-32 h-64 p-4 text-white bg-purple-400 border-4 border-black rounded-md font-fancy lg:w-60'
                >
                  {instruction.inst}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
