import { FaArrowAltCircleRight } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center px-4 lg:px-12 h-auto">
        <div className="w-full pt-10 lg:w-1/2 flex flex-col justify-center px-4 lg:px-12">
          <div className="">
            <h1 className="text-white text-[35px] lg:text-[45px] capitalize">
              Best programming and career journey ever!
            </h1>
            <p className="text-white">
              Based on practical knowledge with the best and world class
              mentors.
            </p>
          </div>
          <div>
            <a href="#contact-us">
              <button className=" flex text-white items-center bg-header px-10 py-4 rounded mt-5 hover:bg-black hover:text-white transition duration-150 ease-out hover:ease-in">
                Enroll Now
                <span className="mx-3">
                  <FaArrowAltCircleRight />
                </span>
              </button>
            </a>
            <span className="">
              <img className="" src="" alt="" />
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className=""
            src={require("../assets/png/zoft-coding-journey.png")}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
