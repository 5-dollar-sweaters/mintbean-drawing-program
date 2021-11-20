import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <a name="About"></a>
      <div
        id="container"
        className=" lg:flex-1 bg-gray-400 h-screen text-white text-xs"
      >
        <div
          id="box"
          className="flex flex-col content-center items-center justify-center px-32 py-8 lg:pl-24 lg:pt-14 "
        >
          <div id="ian" className="  lg:flex border-t-2  ">
            <div className=" lg:m-4">
              <Image
                className=" rounded-full"
                src="/ian.png"
                alt="ian"
                width={200}
                height={200}
              />
            </div>
            <div id="info" className="lg:w-100 lg:p-4 lg:pl-24">
              <div id="name" className="py-4 lg:flex lg:flex-row">
                <p>Ian Cameron Lyles</p>
                <p className="lg:pl-36">SOFTWARE DEVELOPER</p>
              </div>
              <div id="ian-description" className="lg:pt-8 text-sm">
                <p>
                  14 years of experience with all types of things and I know
                  just about all there is to know so dont teach me anything.
                </p>
              </div>
            </div>
          </div>
          <div id="ethan" className="lg:flex border-b-2">
            <div className=" lg:m-4">
              <Image
                className=" rounded-full"
                src="/ethan.jfif"
                alt="ethan"
                width={220}
                height={220}
              />
            </div>
            <div id="info" className="lg:w-100 lg:p-4 lg:pl-24 ">
              <div id="name" className=" py-4 lg:flex lg:flex-row ">
                <p>Ethan William Pierce</p>
                <p className="lg:pl-36">SOFTWARE DEVELOPER</p>
              </div>
              <div id="ethan-description" className="lg:pt-8 text-sm">
                <p>
                  Listen here you young whippersnapper. This is all the things I
                  know how to do, nothing more. All I know is that I know
                  nothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
