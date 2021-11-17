import React from "react";
import { colors } from "../../lib/data/colors";

export const ColorGrid = ({ setColor }) => {
  return (
    <div id="button-grid" className=" flex flex-row flex-wrap w-52 h-auto">
      <div
        className=" flex items-center text-xl w-12 h-12 bg-yllw rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.yellow);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-orng rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.orange);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-rd rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.red);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-pnk rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.pink);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-prpl rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.purple);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-blu rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.blue);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-brwn rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.brown);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-gry rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.gray);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-blck rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.black);
        }}
      ></div>
      <div
        className=" flex items-center text-xl w-12 h-12 bg-wht rounded-lg m-1 shadow-lg hover:ring-4 ring-black"
        onClick={() => {
          setColor(colors.white);
        }}
      ></div>
    </div>
  );
};
