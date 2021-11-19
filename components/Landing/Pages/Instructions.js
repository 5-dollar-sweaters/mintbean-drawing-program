import { instructions } from "lib/instructionData/instructionData";

const Instructions = () => {
  return (
    <div id="container" className=" bg-purple-400 h-screen">
      <div id="top">
        <div
          id="title"
          className=" flex justify-center text-6xl text-white font-fancy pt-16"
        >
          <h1>A helping hand</h1>
        </div>
        <div
          id="description"
          className=" flex justify-center text-center px-16 py-4 text-2xl text-white"
        >
          <h2>
            Struggling to get started? <br></br>Scroll down to see a list of
            option plus some handy tips and tricks
          </h2>
        </div>
      </div>
      <div id="bottom">
        <div id="image-row">
          <div
            id="cards"
            className=" flex flex-row  w-screen px-8 py-4 border-"
          >
            {instructions.map((instruction, i) => {
              return (
                <div
                  key={i}
                  id="card"
                  className=" flex bg-card-background w-64 h-64 border-4 p-4 border-black rounded-tr-2xl rounded-r-2xl "
                >
                  {instruction.step}
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
