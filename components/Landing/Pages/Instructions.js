const Instructions = () => {
  return (
    <div id="container" className=" bg-purple-400 h-screen">
      <div id="top">
        <div id="title" className=" text-7xl text-white font-fancy">
          <h1>A helping hand</h1>
        </div>
        <div id="description" className="  text-4xl text-white">
          <h2>
            Struggling to get started? Scroll down to see a list of option plus
            some handy tips and tricks
          </h2>
        </div>
      </div>
      <div id="bottom">
        <div id="image-row">
          <div id="cards">
            <div id="card" className=" h-16 w-10 bg-purple-400 border-4"></div>
            <div id="card" className=" h-16 w-10 bg-purple-400 border-4"></div>
            <div id="card" className=" h-16 w-10 bg-purple-400 border-4"></div>
            <div id="card" className=" h-16 w-10 bg-purple-400 border-4"></div>
            <div id="card" className=" h-16 w-10 bg-purple-400 border-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
