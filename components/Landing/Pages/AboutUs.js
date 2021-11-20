import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      id="container"
      className=" flex flex-col flex-wrap bg-gray-300 h-screen"
    >
      <div
        id="title"
        className="flex justify-center text-4xl lg:text-6xl mt-8 lg:mt-16 text-black font-fancy"
      >
        <h1> About Us</h1>
      </div>
      <div
        id="images"
        className=" flex flex-col content-center justify-evenly items-center"
      >
        <div className=" m-4">
          <Image src="/ethan.jfif" alt="ethan" width={100} height={100} />
        </div>
        <div className=" m-4">
          <Image src="/ian.png" alt="ian" width={100} height={100} />
        </div>
      </div>
      <div id="description">
        <h2 className=" flex flex-wrap justify-center w-60 lg:text-2xl">
          We serve the needs of the client which includes engineering, content
          creation, and design. Hailing from Portland, OR we deliver a smooth
          experience for the clients and users.
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
