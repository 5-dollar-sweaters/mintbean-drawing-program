import { instructions } from "lib/instructionData/instructionData";

const Instructions = () => {
  return (
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
            className=" w-max border inline-grid grid-cols-7 gap-x-12"
          >
            {instructions.map((instruction, i) => {
              return (
                <div
                  key={i}
                  id="card"
                  className=" text-white font-fancy bg-purple-400 w-32 lg:w-60 h-64 border-4 p-4 border-black rounded-md "
                >
                  {instruction.inst}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
