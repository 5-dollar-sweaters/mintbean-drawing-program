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
      edgeResistance: 0.65,
      bounds: "#container",
      inertia: true,
    });
  }, []);

  return (
    <>
      <a name="Instructions"></a>
      <div id="container" className=" bg-gray-900 h-screen mt-8 lg:mt-0">
        <div id="top">
          <div
            id="title"
            className=" flex justify-evenly text-4xl lg:text-6xl text-white font-fancy pt-12"
          >
            <h1>A helping hand</h1>
          </div>
          <div
            id="description"
            className=" flex justify-evenly text-center px-16 py-4 lg:text-2xl text-white"
          >
            <h2>
              Struggling to get started? <br></br>Scroll down to see a list of
              option plus some handy tips and tricks
            </h2>
          </div>
        </div>
        <div id="bottom">
          <div id="image-row" className="contents">
            <div
              id="cards"
              ref={(el) => (cards = el)}
              className=" w-max  inline-grid grid-cols-7 gap-x-12 px-16"
            >
              {instructions.map((instruction, i) => {
                return (
                  <div
                    key={i}
                    id="card"
                    className=" flex flex-col justify-evenly text-white text-center opacity-80 font-fancy hover:opacity-100  bg-blue-200 h-52 w-32 lg:w-48 lg:h-64 border-4 p-4 border-black rounded-3xl drop-shadow-sm shadow-lg "
                  >
                    <div className=" flex flex-col justify-around z-30 ">
                      Step {instruction.step}
                    </div>
                    <div className=" flex z-30  ">{instruction.inst}</div>
                    <div className=" absolute flex justify-around rounded-xl opacity-80 h-5/6 w-5/6 bg-black shadow-lg z-0"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
