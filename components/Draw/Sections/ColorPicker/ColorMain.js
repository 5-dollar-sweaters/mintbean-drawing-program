import React, { useEffect, useRef } from "react";
import ColorPickerComponent from "./ColorPickerComponent";
import ColorGrid from "./ColorGrid";
import { entrance } from "./animation";
// import gsap from "gsap";

const ColorMain = () => {
  let intro = useRef(null);
  useEffect(() => {
    entrance(intro);
  }, []);
  return (
    <div
      id="menu"
      ref={(el) => (intro = el)}
      className="flex flex-row items-center justify-center h-screen w-full m-auto lg:flex-col px-5 "
    >
      <div className="flex items-center justify-center w-1/2 lg:w-full">
        <ColorPickerComponent />
      </div>
      <div className="w-1/2 lg:w-full z-10">
        <ColorGrid />
      </div>
    </div>
  );
};

export default ColorMain;
