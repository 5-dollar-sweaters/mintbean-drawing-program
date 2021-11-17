import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import CanvasDraw from "react-canvas-draw";
import { useUser } from "@auth0/nextjs-auth0";
import { colors } from "../lib/data/colors";

export default function Draw() {
  const [brushRadius, setBrushRadius] = useState(12);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [lazyRadius, setLazyRadius] = useState(30);

  const [color, setColor] = useState("#B082FF");

  const { user, loading } = useUser();

  useEffect(() => {
    ReactDOM.render(
      <CanvasDraw
        hideGrid={true}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        brushRadius={brushRadius}
        brushColor={color}
        lazyRadius={lazyRadius}
      />,
      document.querySelector(".main")
    );
  }, [brushRadius, canvasWidth, canvasHeight, color, lazyRadius]);

  return (
    <div
      id="container"
      className="flex flex-col justify-evenly md:flex-row min-h-screen py-2 m-auto"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="left-sidebar">
        {/* Control Center */}
        <div className="relative z-10 flex flex-col items-center bg-gray-800 justify-evenly w-52 h-52">
          {/* Brush Stroke */}
          <input
            className="relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none "
            type="range"
            min={1}
            max={50}
            step={1}
            value={brushRadius}
            onChange={(e) => setBrushRadius(+e.target.value)}
          />
          {/* Canvas Width */}
          <input
            className="relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none "
            type="range"
            min={200}
            max={1000}
            step={25}
            value={canvasWidth}
            onChange={(e) => setCanvasWidth(+e.target.value)}
          />
          {/* Canvas Height */}
          <input
            className="relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none "
            type="range"
            min={200}
            max={700}
            step={25}
            value={canvasHeight}
            onChange={(e) => setCanvasHeight(+e.target.value)}
          />
        </div>
        {/*Color Buttons */}
        <div id="button-grid" className=" flex flex-col">
          <div
            className=" flex items-center text-xl w-12 h-12 bg-yllw rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.yellow);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-orng rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.orange);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-rd rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.red);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-pnk rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.pink);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-prpl rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.purple);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-blu rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.blue);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-brwn rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.brown);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-gry rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.gray);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-blck rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.black);
            }}
          ></div>
          <div
            className=" flex items-center text-xl w-12 h-12 bg-wht rounded-lg px-2 py-1 shadow-lg hover:ring-4 ring-black"
            onClick={() => {
              setColor(colors.white);
            }}
          ></div>
        </div>
      </div>
      {/* Canvas div  className='main' */}
      <div
        id="canvas"
        className="flex items-center justify-center h-screen bg-gray-400"
      >
        <div
          className={` main    bg-gray-400 flex items-center justify-center  rounded-3xl  overflow-hidden`}
        />
      </div>
      <div id="right-sidebar">
        {/* Control Center */}
        <div className="relative z-10 flex flex-col items-center bg-gray-800 justify-evenly w-52 h-52">
          {/* Brush Stroke */}
          <input
            className="relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none "
            type="range"
            min={1}
            max={50}
            step={1}
            value={brushRadius}
            onChange={(e) => setBrushRadius(+e.target.value)}
          />
          {/* Lazy Length*/}
          <input
            className="relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none "
            type="range"
            min={1}
            max={50}
            step={2}
            value={lazyRadius}
            onChange={(e) => setLazyRadius(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
