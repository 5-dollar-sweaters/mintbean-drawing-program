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
    if (width <= 1200) {
      Draggable.create(cards, {
        type: 'x',
        edgeResistance: 1,
        bounds: { width: '200px' },
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
                  className='flex flex-col justify-between py-8 px-2 h-80 w-48 lg:h-80 lg:w-52 md:text-xl lg:text-2xl   text-black text-center  font-fancy hover:opacity-100  border-4  border-black rounded-3xl filter shadow-lg'
                >
                  <div className='  text-3xl z-30   '>
                    Step {instruction.step}
                  </div>
                  <div className=' z-30 font-sans '>{instruction.inst}</div>
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
