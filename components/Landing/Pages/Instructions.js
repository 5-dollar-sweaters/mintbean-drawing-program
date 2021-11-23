import { useEffect, useRef } from "react";
import { scrollingCards } from "./animation";
import { gsap } from "gsap/dist/gsap";
import { Draggable } from "gsap/dist/Draggable";
import { instructions } from "lib/instructionData/instructionData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

const Instructions = () => {
  let cards = useRef(null);

  useEffect(() => {
    scrollingCards(cards);
  }, []);

  useEffect(() => {
    Draggable.create(cards, {
      type: "x",
      edgeResistance: 1,
      bounds: { width: "200px" },
      throwProps: true,
      overshootTolerance: 0,
      inertia: true,
    });
  }, []);

  return (
    <>
      <a name="Instructions"></a>
      <div
        id="container"
        className=" flex-col   bg-gray-900 lg:h-screen lg:mt-0"
      >
        <div id="top">
          <div
            id="title"
            className="  flex justify-evenly text-4xl mb lg:text-6xl pt-16  text-white font-fancy "
          >
            <h1>A helping hand</h1>
          </div>
          <div
            id="description"
            className=" flex text-center flex-col lg:text-2xl pt-8 px-6 text-white"
          >
            <h2>
              Struggling to get started? <br></br>Scroll down to see a list of
              option plus some handy tips and tricks
            </h2>
          </div>
        </div>
        <div id="bottom">
          <div
            id="cards"
            ref={(el) => (cards = el)}
            className="relative inline-grid grid-cols-6 gap-36 lg:gap-52 pl-2 "
          >
            {instructions.map((instruction, i) => {
              return (
                <div
                  key={i}
                  id="card"
                  className="flex flex-col justify-between py-8 px-2 h-80 w-32  text-black text-center  font-fancy hover:opacity-100  bg-blue-200  lg:w-48 lg:h-64 border-4  border-black rounded-3xl filter drop-shadow-sm shadow-lg "
                >
                  <div className=" text-3xl z-30 ">Step {instruction.step}</div>
                  <div className=" z-30 font-sans  ">{instruction.inst}</div>
                  <div className=" absolute  rounded-xl bg-black shadow-lg z-0"></div>
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
