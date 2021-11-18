import { useRouter } from "next/router";
import Image from "next/router";

const Main = () => {
  const router = useRouter();

  const handleTryIt = async () => {
    try {
      await router.push("/draw");
    } catch (error) {}
  };

  return (
    <div id="container" className=" flex flex-row h-screen bg-grey-100">
      <div id="content" className=" flex flex-col flex-nowrap justify-center">
        <div id="main" className=" ">
          <h1 className=" font-fancy text-6xl">Creativity</h1>
          <h2 className=" text-3xl py-2">
            at your<br></br> fingertips
          </h2>
        </div>
        <div id="description" className="flex  w-64">
          <h3>
            Whether you are coloring inside the linese or thinking outside the
            box, its never been easier to get your ideas down
          </h3>
        </div>

        <button
          className=" flex flex-row justify-center bg-grey-100 hover:bg-blue-700 hover:border-blue-700 border-2 border-black text-black hover:text-white  font-bold cursor-pointer rounded-full h-10 w-24"
          onClick={() => handleTryIt()}
        >
          Try It
        </button>
      </div>
      <div id="video">
        {/* <Image
          src="/capture.png"
          layout="responsive"
          alt="image"
          width={70}
          height={40}
        /> */}
      </div>
    </div>
  );
};

export default Main;
