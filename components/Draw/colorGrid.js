import React from 'react';
import { colors } from '../../lib/data/colors';

export const ColorGrid = ({ setColor }) => {
  return (
    <div id='button-grid' className='flex flex-row flex-wrap w-full h-auto '>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-yllw hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.yellow);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-orng hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.orange);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-rd hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.red);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-pnk hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.pink);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-prpl hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.purple);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-blu hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.blue);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-brwn hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.brown);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-gry hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.gray);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-blck hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.black);
        }}
      ></div>
      <div
        className='flex items-center w-12 h-12 m-1 text-xl rounded-lg shadow-lg  bg-wht hover:ring-4 ring-black'
        onClick={() => {
          setColor(colors.white);
        }}
      ></div>
    </div>
  );
};
