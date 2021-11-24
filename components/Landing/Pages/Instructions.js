import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { Draggable } from 'gsap/dist/Draggable';
import { instructions } from 'lib/instructionData/instructionData';
import useWindowDimensions from 'utils/useWindowDimensions';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable);
}

const Instructions = () => {
  let cards = useRef(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 800) {
      Draggable.create(cards, {
        type: 'x',
        edgeResistance: 1,
        bounds: { top: 100, right: 0, width: 1800, height: 800 },
        throwProps: true,
        overshootTolerance: 0,
        inertia: true,
      });
    }
  }, [width]);

  return (
    <>
      <a name='Instructions'></a>
      <div
        id='container'
        className=' flex-col py-16  bg-gray-900 lg:h-auto lg:mt-0'
      >
        <div id='top'>
          <div
            id='title'
            className='  flex justify-evenly text-4xl mb lg:text-6xl  text-white font-fancy '
          >
            <h1>A helping hand</h1>
          </div>
          <div
            id='description'
            className=' flex text-center flex-col lg:text-2xl py-8 px-6 text-white'
          >
            <h2>
              Struggling to get started? <br></br>Scroll down to see a list of
              option plus some handy tips and tricks
            </h2>
          </div>
        </div>
        <div id='bottom'>
          <div
            id='cards'
            ref={(el) => (cards = el)}
            className='relative inline-grid grid-cols-6 gap-x-56 lg:gap-x-20 pl-2  '
          >
            {instructions.map((instruction, i) => {
              return (
                <div
                  key={i}
                  id='card'
                  style={{
                    background: `url(${instruction.img})`,
                  }}
                  className='flex flex-col items-center overflow-hidden justify-between mb-6 text-lg py-8  h-80 w-48 lg:h-80 lg:w-52 md:text-xl lg:text-2xl text-black text-center opacity-90 font-fancy hover:opacity-100 hover:scale-105  border-4  border-black rounded-3xl filter shadow-lg'
                >
                  <div className=' top-0 items-center flex justify-center w-64 mb-2 text-2xl text-white bg-yellow-400 rounded-t-lg h-14 font-fancy '>
                    Step {instruction.step}
                  </div>
                  <div className=' backdrop-filter backdrop-blur-lg z-30 font-sans p-2'>
                    <div className=' text-lg   py-2 rounded-lg '>
                      {instruction.inst}
                    </div>
                  </div>
                  <div className=' absolute  rounded-xl bg-black shadow-lg z-0'></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
