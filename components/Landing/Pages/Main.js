import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { hiddenText } from "./animation";

const Main = () => {
  const router = useRouter();
  let text = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let button = useRef(null);
  let button2 = useRef(null);

  const handleTryIt = async () => {
    const tl2 = gsap.timeline();
    try {
      await tl2
        .to(button2, { backgroundColor: "#1D4ED8", borderColor: "#1D4ED8" })
        .fromTo(
          button,
          { y: 0, color: "white" },
          { duration: 1, ease: "power1.in", y: -50 }
        );
      await router.push("/draw");
    } catch (error) {}
  };

  useEffect(() => {
    hiddenText(text, text2, text3);
  }, []);

  return (
    <>
      <a name="Main"></a>
      <div
        id="container"
        className="flex flex-col items-center lg:h-screen lg:flex-row justify-evenly bg-grey-100"
      >
        <div
          id="content"
          className="flex flex-col justify-center mt-8 lg:mt-0 flex-nowrap"
        >
          <div id="main" className="flex flex-col ">
            <div className=" after:contents overflow-hidden">
              <h1
                ref={(el) => (text = el)}
                className="  text-5xl lg:text-7xl  font-fancy "
              >
                Colorful
              </h1>
            </div>
            <div className=" after:contents overflow-hidden ">
              <h2
                ref={(el) => (text2 = el)}
                className=" py-2 text-3xl lg:text-3xl "
              >
                Digital artwork at your
                <br /> fingertips
              </h2>
            </div>
          </div>
          <div id="description" className="flex w-64 text-sm lg:text-1xl">
            <h3 ref={(el) => (text3 = el)}>
              Whether you are coloring inside the lines or thinking outside the
              box, its never been easier to get your ideas down
            </h3>
          </div>
          <div
            id="button"
            className="flex flex-col items-center pt-4 mb-8 lg:mb-0 "
          >
            <button
              className=" after:contents overflow-hidden flex flex-row items-center justify-center w-24 h-10 font-bold text-black transition-all ease-in-out border-2 border-black rounded-full cursor-pointer bg-grey-100 hover:bg-blue-700 hover:border-blue-700 hover:text-white"
              onClick={() => handleTryIt()}
              ref={(el) => (button2 = el)}
            >
              <span ref={(el) => (button = el)}>Try It</span>
            </button>
          </div>
        </div>
        {/* Video */}
        <div className="relative w-96 h-72">
          <video loop autoPlay muted className="object-fill w-full h-full">
            <source src="/pokemon.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Main;
