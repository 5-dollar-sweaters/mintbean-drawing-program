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

  return (
    <div className='w-full'>
      <a id='Instructions'></a>
      <div
        id='container'
        className='flex-col w-full py-16 bg-gray-900 lg:h-auto lg:mt-0 '
      >
        <div className=''>
          <div id='top'>
            <div
              id='title'
              className='flex text-4xl text-white justify-evenly lg:text-6xl font-fancy'
            >
              <h1>A Helping Hand</h1>
            </div>
            <div
              id='description'
              className='flex flex-col px-6 mb-8 text-lg font-light text-center text-white lg:text-2xl'
            >
              <h2>
                A few tips to get you started
                {/* <br></br>Here are a few tips and tricks */}
              </h2>
            </div>
          </div>
          <div className='w-10/12 m-auto space-y-4 lg:space-y-6 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl=w-6/12 '>
            {instructionItems.map((item, i) => (
              <div key={i}>
                <div
                  className={`flex flex-row   justify-between    items-center text-xl text-white   ${
                    item.num % 2 === 0 && ' flex-row-reverse  '
                  }`}
                >
                  {/* <span className='w-3 h-px mr-2 bg-gray-200' /> */}
                  <p className='justify-start text-sm font-light text-white md:text-2xl'>
                    {item?.item}
                  </p>
                  <video
                    loop
                    autoPlay
                    playsInline
                    src={item?.imgSrc}
                    muted
                    className={`object-cover w-12 h-12 md:h-20 md:w-20 rounded-xl ${
                      item.num % 2 == 0 ? 'mr-4  md:mr-10 ' : 'ml-4 md:ml-8'
                    }`}
                  >
                    {/* <source src={item?.imgSrc} type='video/mp4' /> */}
                  </video>
                </div>
                <span className='block w-full h-px bg-gray-600' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;

const instructionItems: {
  item: string;
  num: number;
  imgSrc: any;
  imgAlt: string;
}[] = [
  {
    item: 'Get started as a guest user by clicking the "Try It" button',
    num: 1,
    imgSrc: '/TryIt.mp4',
    imgAlt: '',
  },
  {
    item: 'Or find the LogIn button located at the top of the screen to create an account',
    num: 2,
    imgSrc: '/login2.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'By creating an account you can save your current drawings and load previous drawings',
    num: 3,
    imgSrc: '/save.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'Once you are at the canvas, Click the pencil to choose a color and adjust your brush size',
    num: 4,
    imgSrc: '/Pencil.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'Click the little arrow at the bottom of the menu or re-Click the pencil to close the menu',
    num: 5,
    imgSrc: '/arrow.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'If you make a mistake, Click the circle arrows to undo the most recent stroke',
    num: 6,
    imgSrc: '/undo.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'When you are happy with your drawing, Click the disk icon and name your piece',
    num: 7,
    imgSrc: '/save.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'Click the load icon to see all of your saved drawings and watch them be recreated in front of your eyes',
    num: 8,
    imgSrc: '/load-long.mp4',
    imgAlt: 'A gif of instructions',
  },
];
