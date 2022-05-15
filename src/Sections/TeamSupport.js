import { FaUserGraduate, FaBusinessTime, FaPhoneVolume } from "react-icons/fa";
const TeamSupport = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-10">
      <div className="sImage rounded lg:w-1/2">
        <span className="">
          <img src={require("../assets/png/zoft-code.png")} alt="" />
        </span>
      </div>
      <div className="cards lg:w-1/2 lg:p-10">
        {/* <div className="text-header py-5 m-auto w-[90%]">
                    <small className="text-white text-sm">team Support</small>
                    <h3 className="text-white text-[35px]">Our People Help the Best</h3>
                    <p className="text-white text-sm">Use flex-col-reverse to position flex items vertically in the opposite direction:</p>
                </div> */}
        <div className="flex flex-col m-auto w-[90%]">
          <div className="flex items-center  p-8 rounded border border-header mt-5">
            <span className="w-1/6 bg-header rounded-full p-4 lg:p-8 ">
              <FaPhoneVolume style={{ color: "#fff" }} />
            </span>
            <div className="card-text lg:w-5/6 ml-5">
              <h3 className="text-[#b3ecff]">world class 24/7 Support</h3>
              <p className="text-[#717e8b]">
                Our customer/IT support have been trained to respond swiftly to
                any complaints or requests as it may be.
              </p>
            </div>
          </div>
          <div className="flex items-center  p-8 rounded border border-header mt-5">
            <span className="w-1/6 bg-header rounded-full p-4 lg:p-8 ">
              <FaBusinessTime style={{ color: "#fff" }} />
            </span>
            <div className="card-text lg:w-5/6 ml-5">
              <h3 className="text-[#b3ecff]">Quality Delivery</h3>
              <p className="text-[#717e8b]">
                We ensure that our end products are of consistent quality and
                meets the world's higest software development standards.
              </p>
            </div>
          </div>
          <div className="flex items-center  p-8 rounded border border-header mt-5">
            <span className="w-1/6 bg-header rounded-full p-4 lg:p-8 ">
              <FaUserGraduate style={{ color: "#fff" }} />
            </span>
            <div className="card-text lg:w-5/6 ml-5">
              <h3 className="text-[#b3ecff]">mentorship and Trainings</h3>
              <p className="text-[#717e8b]">
                we offer the best online web development training geared to
                advance your programming career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSupport;
