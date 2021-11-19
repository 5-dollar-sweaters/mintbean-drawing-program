import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      id="container"
      className=" flex flex-col flex-wrap justify-center bg-gray-300 h-screen"
    >
      <div id="images" className=" flex ">
        <Image src="/ethan.jfif" alt="ethan" width={200} height={200} />
        <Image src="/ian.png" alt="ian" width={200} height={200} />
      </div>
      <div id="words" className=" flex flex-col items-end">
        <div id="title" className=" text-7xl text-black font-fancy">
          <h1> About Us</h1>
        </div>
        <div id="description">
          <h2>
            We serve the needs of the client which includes engineering, content
            creation, and design. Hailing from Portland, OR we deliver a smooth
            experience for the clients and users.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
