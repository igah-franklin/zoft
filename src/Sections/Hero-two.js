const HeroTwo = () => {
  return (
    <>
      <div className="flex flex-col items-center  w-[90vw]">
        <div className="border-2 border-header w-full p-[50px] text-center">
          <h1 className="text-[80px]">
            <span className="text-white">
              zo<span className="text-secondaryAlternative">ft</span>
            </span>
          </h1>
        </div>
        <div className="pt-2">
          <ul className="flex">
            <li className="mr-4 text-white border-b border-secondaryAlternative">
              <i>we Build</i>
            </li>
            <li className="mr-4 text-white">
              <i>we Brand</i>
            </li>
            <li className=" text-white border-b border-secondaryAlternative">
              <i>we Teach</i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroTwo;
