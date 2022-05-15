import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ActivateDarkMode from "../components/ActivateDarkMode";
import { MenuItem } from "../components/MenuItem";
import Brands from "../Sections/Brands";
import Contact from "../Sections/Contact";
import Faqs from "../Sections/Faq";
import Footer from "../Sections/Footer";
import Hero from "../Sections/Hero";
import HeroTwo from "../Sections/Hero-two";
import TeamSupport from "../Sections/TeamSupport";
import Services from "../Sections/Services";

const MobileNav = () => {
  const OpenHamburgerIcon = () => {
    const menuItems = document.querySelector(".menu_items_cover");
    menuItems.classList.toggle("open");
  };

  //function to display live stream
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggleMusicPopup = () => {
    setIsMusicOpen(!isMusicOpen);
  };

  return (
    <>
      <div className="dark:text-white bg-primary">
        <div className="h-[100vh] flex justify-center items-center">
          <div className="logo_mobile flex justify-between items-center h-[80px] w-[100%] bg-[#083645] fixed top-0 z-[8]">
            <h1 className="ml-12 lg:ml-[100px]">
              <a href="/">
                <span className="text-white">
                  zo<span className="text-secondaryAlternative">ft</span>
                </span>
              </a>
            </h1>

            <div
              className="HamburgerIcon bg-secondaryAlternative px-3 py-3"
              onClick={OpenHamburgerIcon}
            >
              <FaPlus
                style={{ color: "#fff", fontSize: "25px", cursor: "pointer" }}
              />
            </div>
          </div>

          <ActivateDarkMode />
          <div className="menu_items_cover">
            <div className="menu_items flex flex-col justify-center items-center h-[100vh]">
              <MenuItem
                main={<a href="#courses">courses</a>}
                // submenu1={<Link to="/">Contact Us</Link>}
                // submenu2={<Link to="/">About Us</Link>}
              />

              <MenuItem
                main={<a href="#contact-us">contact us</a>}
                // submenu1={<Link to="/">Outreaches</Link>}
                // submenu2={<Link to="/">Mission | Vision</Link>}
              />
              {/* <MenuItem
                main={"Ministries"}
                submenu1={<Link to="/">Descipleship</Link>}
                submenu2={<Link to="/">AWM</Link>}
                submenu3={<Link to="/">AYM</Link>}
                submenu4={<Link to="/">Music Ministries</Link>}
              />

              <MenuItem
                main={"Giving"}
                submenu1={<Link to="/">Tithe | Offering</Link>}
                submenu2={<Link to="/">Projects</Link>}
              />

              <MenuItem
                main={"Resources"}
                submenu1={<Link to="/">Join Live Worship</Link>}
                submenu2={<Link to="/">Media Archive</Link>}
              /> */}
            </div>
          </div>
          <HeroTwo />
        </div>

        <div className="active">
          <Hero />
          <TeamSupport />
          <div id="courses">
            <Services />
          </div>
          <div id="contact-us">
            <Contact />
          </div>
          <Faqs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
