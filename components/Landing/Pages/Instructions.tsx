import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { Draggable } from 'gsap/dist/Draggable';
import { instructions } from 'lib/instructionData/instructionData';
import useWindowDimensions from 'utils/useWindowDimensions';
import { BsDiamond } from 'react-icons/bs';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable);
}

const Instructions = () => {
  let cards = useRef(null);
  const { width } = useWindowDimensions();

  return (
    <>
      <a id='Instructions'></a>
      <div
        id='container'
        className='flex-col py-16 bg-gray-900 lg:h-auto lg:mt-0'
      >
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
        <div className='w-10/12 m-auto space-y-4 '>
          {instructionItems.map((item, i) => (
            <>
              <div
                key={i}
                className={`flex flex-row      items-center text-xl text-white   ${
                  item.num % 2 === 0 && ' flex-row-reverse '
                }`}
              >
                {/* <span className='w-3 h-px mr-2 bg-gray-200' /> */}
                <p className='justify-start text-sm font-light text-white'>
                  {item?.item}
                </p>
                <video
                  loop
                  autoPlay
                  muted
                  className={`object-cover w-12 h-12 rounded-xl ${
                    item.num % 2 == 0 ? 'mr-4' : 'ml-4'
                  }`}
                >
                  <source src={item.imgSrc} type='video/mp4' />
                </video>
              </div>
              <span className='block w-full h-px bg-gray-600' />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instructions;

const instructionItems: {
  item: String;
  num: number;
  imgSrc: string;
  imgAlt: string;
}[] = [
  {
    item: 'Get started as a guest user by clicking the "Try It" button',
    num: 1,
    imgSrc: '/vids/Tryit.mp4',
    imgAlt: '',
  },
  {
    item: 'Or find the LogIn button located at the top of the screen to create an account',
    num: 2,
    imgSrc: '/vids/Login.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'By creating an account you can save your current drawings and load previous drawings',
    num: 3,
    imgSrc: '/vids/Tryit.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'Once you are at the canvas, Click the pencil to choose a color and adjust your brush size',
    num: 4,
    imgSrc: '/vids/Pencil.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'Click the little arrow at the bottom of the menu or re-Click the pencil to close the menu',
    num: 5,
    imgSrc: '/vids/Pencil.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'If you make a mistake, Click the circle arrows to undo the most recent stroke',
    num: 6,
    imgSrc: '/vids/Pencil.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'When you are happy with your drawing, Click the disk icon and name your piece',
    num: 7,
    imgSrc: '/vids/Pencil.mp4',
    imgAlt: 'A gif of instructions',
  },
  {
    item: 'Click the load icon to see all of your saved drawings and watch them be recreated in front of your eyes',
    num: 8,
    imgSrc: '/vids/Pencil.mp4',
    imgAlt: 'A gif of instructions',
  },
];
