import ReactDOM from "react-dom";
import Head from "next/head";
import { ColorGrid } from "../components/Draw/colorGrid";
import CanvasDraw from "react-canvas-draw";
import useSWR from "swr";
import prisma from "../lib/prisma/prisma";
import { useState, useEffect, useRef } from "react";
import {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from "next";
import { useUser, getSession } from "@auth0/nextjs-auth0";
// import { fetcher } from '../lib/swr/fetcher';
import { useStore } from "../lib/zustand/store";

export const fetcher = (url) => fetch(url).then((res) => res.json());

const Draw: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const [brushRadius, setBrushRadius] = useState(12);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [lazyRadius, setLazyRadius] = useState(30);
  const [color, setColor] = useState("#000000");
  const canvasRef: any = useRef();
  const { activeUser, setActiveUser } = useStore();
  const { user } = useUser();
  type DATA_TO_SAVE = { sketchId: string; userId: string };

  const { data, error, mutate } = useSWR(user && "/api/user", fetcher);

  console.log(data);
  useEffect(() => {
    user && setActiveUser(data);
  }, [user]);

  useEffect(() => {
    ReactDOM.render(
      <CanvasDraw
        ref={canvasRef}
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

  const handleSave = async () => {
    const savedDrawing = canvasRef?.current?.getSaveData();
    const dataToSave: DATA_TO_SAVE = {
      sketchId: savedDrawing,
      userId: "fornow",
    };
    try {
      // await saveData(dataToSave);
      console.log(dataToSave);
      // console.log('You saved it!');
    } catch (error) {}
  };

  return (
    <div
      id="container"
      className="flex flex-col justify-evenly md:flex-row min-h-screen py-2 m-auto"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="z-10 flex flex-col w-full text-black"></div>
      <button
        className="absolute z-30"
        onClick={() => {
          const saveIT = canvasRef?.current?.getSaveData();
          return saveIT;
        }}
      >
        saveIt
      </button>
      {/* Control Center */}
      <div className="absolute z-10 flex flex-col items-center bg-gray-800 justify-evenly w-52 h-52">
        {/* Brush Stroke */}
        <input
          className="relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128"
          type="range"
          min={1}
          max={50}
          step={1}
          value={brushRadius}
          onChange={(e) => setBrushRadius(+e.target.value)}
        />
        {/* Canvas Width */}
        <input
          className="relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128 "
          type="range"
          min={200}
          max={1000}
          step={25}
          value={canvasWidth}
          onChange={(e) => setCanvasWidth(+e.target.value)}
        />
        {/* Canvas Height */}
        <input
          className="relative h-3 overflow-hidden bg-gray-400 rounded-lg appearance-none w-128 "
          type="range"
          min={200}
          max={700}
          step={25}
          value={canvasHeight}
          onChange={(e) => setCanvasHeight(+e.target.value)}
        />
      </div>
      <ColorGrid setColor={setColor} />
      {/* Canvas   */}
      <div className="flex items-center justify-center h-screen bg-gray-400">
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
};

export default Draw;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const userReq: any = await fetch(`${process.env.NEXT_APP_URL}/api/user`);
  const dbUser: any = await userReq.json();
  console.log(userReq);
  return {
    props: {
      dbUser,
    },
  };
};
