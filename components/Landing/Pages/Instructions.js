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
            className=" flex justify-center text-4xl lg:text-6xl text-white font-fancy pt-16"
          >
            <h1>A helping hand</h1>
          </div>
          <div
            id="description"
            className=" flex justify-center text-center px-16 py-4 lg:text-2xl text-white"
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
                    className=" flex justify-center text-center text-black bg-gray-100  h-50 w-32 lg:w-48 lg:h-64 border-4 p-4 border-black rounded-md drop-shadow-sm shadow-lg "
                  >
                    {instruction.inst}
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
