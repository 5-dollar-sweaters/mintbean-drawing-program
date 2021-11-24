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

  // useEffect(() => {
  //   if (width <= 800) {
  //     Draggable.create(cards, {
  //       type: 'x',
  //       edgeResistance: 1,
  //       bounds: { top: 100, right: 0, width: 1800, height: 800 },
  //       throwProps: true,
  //       overshootTolerance: 0,
  //       inertia: true,
  //     });
  //   }
  // }, [width]);

  return (
    <>
      <a name='Instructions'></a>
      <div
        id='container'
        className='flex-col py-16 bg-gray-900 lg:h-auto lg:mt-0'
      >
        <div id='top'>
          <div
            id='title'
            className='flex text-4xl text-white justify-evenly mb lg:text-6xl font-fancy'
          >
            <h1>A helping hand</h1>
          </div>
          <div
            id='description'
            className='flex flex-col px-6 py-8 font-light text-center text-white lg:text-2xl'
          >
            <h2>
              Struggling to get started? <br></br>Here are a few tips and tricks
            </h2>
          </div>
        </div>
        {/* <div id='bottom'>
          <div
            id='cards'
            ref={(el) => (cards = el)}
            className='relative inline-grid grid-cols-6 pl-2 gap-x-56 lg:gap-x-20 '
          >
            {instructions.map((instruction, i) => {
              return (
                <div
                  key={i}
                  id='card'
                  style={{
                    background: `url(${instruction.img})`,
                  }}
                  className='flex flex-col items-center justify-between w-48 py-8 mb-6 overflow-hidden text-lg text-center text-black border-4 border-black shadow-lg h-80 lg:h-80 lg:w-52 md:text-xl lg:text-2xl opacity-90 font-fancy hover:opacity-100 hover:scale-105 rounded-3xl filter'
                >
                  <div className='top-0 flex items-center justify-center w-64 mb-2 text-2xl text-white bg-yellow-400 rounded-t-lg h-14 font-fancy'>
                    Step {instruction.step}
                  </div>
                  <div className='z-30 p-2 font-sans backdrop-filter backdrop-blur-lg'>
                    <div className='py-2 text-lg rounded-lg '>
                      {instruction.inst}
                    </div>
                  </div>
                  <div className='absolute z-0 bg-black shadow-lg rounded-xl'></div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Instructions;
