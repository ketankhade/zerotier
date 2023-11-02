import React, { useEffect, useState } from "react";
import * as Styled from "../../../../styles/NavigationBar.module.css";
import RoundedButton from "../../atoms/roundedButton/roundedButton";

const svgArrowIcon = () => (
  <svg
    width="9"
    height="8"
    viewBox="0 0 9 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="v0n4h10"
  >
    <path
      d="M4.93301 7.25C4.74056 7.58333 4.25944 7.58333 4.06699 7.25L0.602886 1.25C0.410435 0.916666 0.650998 0.499999 1.0359 0.499999L7.9641 0.5C8.349 0.5 8.58957 0.916666 8.39712 1.25L4.93301 7.25Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default function NavigationBar(props) {
  const [isHumburgerOpen, setIsHumburgerOpen] = useState(false);
  const tabChange = (e) => {
    const tab = e.target.id;
    props.handleTabChange(tab);
  };

  const openHumburger = () => {
    setIsHumburgerOpen(!isHumburgerOpen);
  };
  // const getWidth = () => {
  //   if (typeof window !== "undefined") {
  //     const { innerWidth } = window;
  //     return innerWidth;
  //   }
  // };

  // useEffect(() => {
  //   if (isHumburgerOpen && getWidth() < 768) {
  //     document.getElementById("navId").style.display = "flex";
  //   } else {
  //     document.getElementById("navId").style.display = "none";
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [isHumburgerOpen]);

  // const handleResize = () => {
  //   if (!isHumburgerOpen && getWidth() > 768) {
  //     document.getElementById("navId").style.display = "flex";
  //   } else {
  //     setIsHumburgerOpen(false);
  //   }
  // };

  return (
    <div className={Styled.nav} onClick={(e) => tabChange(e)}>
      <div className={Styled.home} id="">
        <img
          className={Styled.mainLogo}
          src="download.png"
          width="30"
          height="30"
        />
        Zerotier
      </div>
      <div id="navId" className={Styled.subnav}>
        <div id="features">Features</div>
        <div id="pricing">Pricing</div>
        <div id="download">Download</div>
        <div id="company">
          Company
          {svgArrowIcon()}
        </div>
        <div id="support">
          Support
          {svgArrowIcon()}
        </div>
        <div className={Styled.login}>Login</div>
      </div>
      <div className={Styled.humburgerIconSubNav}>
        <div className={Styled.login}>Login</div>
        <RoundedButton text="Sign Up" customeClass="orangeBlackBg" />
        <div onClick={() => openHumburger()} className={Styled.humburgerIcon}>
          {isHumburgerOpen ? (
            "X"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
