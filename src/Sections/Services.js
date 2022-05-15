import {
  FaMobile,
  FaArrowAltCircleRight,
  FaArrowCircleRight,
  FaGraduationCap,
} from "react-icons/fa";
const Services = () => {
  return (
    <section className="mb-5">
      <div className="w-5/6 flex justify-between  items-center m-auto mt-5 mb-5">
        <span className="text-white border p-3">Z</span>
        <span className="flex items-center">
          <a href="#contact-us">
            <button className="text-white">Get in Touch</button>
          </a>
          <span className="ml-2">
            <FaArrowCircleRight style={{ color: "#fff" }} />
          </span>
        </span>
      </div>
      <div className="w-[1px] h-[120px] bg-secondaryAlternative m-auto"></div>
      <div className="text-center py-4">
        <span className="text-white text-[1.5rem]">Our Services</span>
      </div>
      <div className="w-5/6 m-auto">
        <div className="services flex flex-col lg:flex-row">
          <div className="service-1">
            <div className="border-1 border-l border-t  border-header p-5">
              <span className="pb-6">
                <FaGraduationCap
                  style={{ color: "#ff914d", fontSize: "30px" }}
                />
              </span>
              <h3 className="text-white text-[1.5rem] py-3">
                Custom Programming <br></br>
                <span className="text-secondaryAlternative">(Python)</span>
              </h3>
              <p className="py-3 text-[#717e8b] font-lato leading-8">
                Python is one of the high-level, interpreted and general-purpose
                programming languages that is easy to use, comprehensive and
                powerful. We'll walk you through basic to advanced concepts in
                python with practical/real world examples that will help
                accelerate your learning and career.
              </p>
            </div>
          </div>
          <div className="service-1">
            <div className="border-1 border-l border-t border-header p-5">
              <span className="pb-6">
                <FaGraduationCap
                  style={{ color: "#ff914d", fontSize: "30px" }}
                />
              </span>
              <h3 className="text-white text-[1.5rem] py-3">
                Web Design <br></br>
                <span className="text-secondaryAlternative">(Front End)</span>
              </h3>
              <p className="py-3 text-[#717e8b] font-lato leading-8">
                In this comprehensive course, you'll Learn What It Takes to Code
                Dynamic, Professional Websites and Web Apps from scratch and
                From The Comfort of Your Own Home. stacks like HTML5, CSS,
                Javascript, Tailwind CSS, React Js, Figma, Git and github will
                be discussed extensively (project based).
              </p>
            </div>
          </div>
          <div className="service-1">
            <div className="border-1 border-l border-t border-header p-5">
              <span className="pb-6">
                <FaGraduationCap
                  style={{ color: "#ff914d", fontSize: "30px" }}
                />
              </span>
              <h3 className="text-white text-[1.5rem] py-3">
                Web Design <br></br>{" "}
                <span className="text-secondaryAlternative">(Back End)</span>
              </h3>
              <p className="py-3 text-[#717e8b] font-lato leading-8">
                The best online course for learning how to create websites using
                Python and Django! In this course we take you from zero to hero
                in web development with python, Django, django Rest Framework
                while building tons of API's in the processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 m-auto">
        <div className="services flex flex-col lg:flex-row">
          <div className="service-1">
            <div className="border-1 border-l border-t  border-header p-5">
              <span className="pb-6">
                <FaGraduationCap
                  style={{ color: "#ff914d", fontSize: "30px" }}
                />
              </span>
              <h3 className="text-white text-[1.5rem] py-3">
                Web Design <br></br>
                <span className="text-secondaryAlternative">(Full stack)</span>
              </h3>
              <p className="py-3 text-[#717e8b] font-lato leading-8">
                this course covers all you need to know to build a website using
                HTML5, CSS, Javascript, Tailwind CSS, React Js, Figma (UI/UX),
                Python, Django, and many more web technologies! Whether you want
                to change career paths, expand your current skill set, start
                your own entrepreneurial business, become a consultant, or just
                want to learn, this is the course for you! We will teach you the
                latest technologies for building great web applications with
                Python 3 and Django! But we don't just teach that, we also teach
                the Front End technologies you need to know, including HTML,
                CSS, and Javascript. This course can be your one stop shop for
                everything you need! It will serve as a useful reference for
                many of your questions as you begin your journey in becoming a
                Full stack developer.
              </p>
            </div>
          </div>
          {/* <div className="service-1">
            <div className="border-1 border-l border-t border-header p-5">
              <span className="pb-6">
                <FaGraduationCap
                  style={{ color: "#ff914d", fontSize: "30px" }}
                />
              </span>
              <h3 className="text-white text-[1.5rem] py-3">Motion Design</h3>
              <p className="py-3 text-[#717e8b] font-lato leading-8">
                In our motion design studio we engage in UX motion designs, web
                motion designs, animations, as well as the exceptional UI motion
                designs. Let us help you leverage the power of motion graphic
                videos to deliver a compelling message that will elevate your
                message and brand. We’ve partnered with Fortune 500 companies,
                Startups, Small Businesses, and Nonprofits, helping them create
                powerful visual content that’s engaging and effective.
              </p>
            </div>
          </div> */}
          <div className="service-1">
            <div className="border-1 border-l border-t border-header p-5">
              <span className="pb-6">
                <FaGraduationCap
                  style={{ color: "#ff914d", fontSize: "30px" }}
                />
              </span>
              <h3 className="text-white text-[1.5rem] py-3">UI/UX Design</h3>
              <p className="py-3 text-[#717e8b] font-lato leading-8">
                Through a decade of experience as a UX/UI designer, We’ve learnt
                how to streamline design processes within web and mobile
                applications, carefully creating mindful designs according to
                both Apple and Android standards while having the end user at
                heart. Beside design projects, we provide a wide range of UX
                services , including design sprint facilitation, UX training
                courses and expert UX audits. We also offer a number of
                different UX and product management consulting service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
