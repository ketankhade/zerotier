import React from "react";
import RoundedButton from "../../atoms/roundedButton/roundedButton";
import * as Styled from "../../../../styles/ThirdInfoSection.module.css";

export default function ThirdInfoSection() {
  return (
    <>
      <div className={Styled.thirdInfoSectionWrapper}>
        <div className={Styled.infoSectionTitle}>
          Used by the world's most innovative teams
        </div>
        {/* First Msg */}
        <div className={Styled.subSection}>
          <img
            src="https://www.zerotier.com/static/6ef0d11bd53a0e07913da12681ac3522/c45f5/User_Icon_01c147556c.webp"
            width="48"
            height="48"
          />
          <div className={Styled.descriptionWrapper}>
            <div className={Styled.infoSectionMessage}>
              "Set up ZeroTier in minutes with remote, automated deployment.
              Emulates Layer 2 Ethernet with multipath, multicast, and bridging
              capabilities. ZeroTier’s zero-trust networking solution provides
              scalable security with 256-bit end-to-end encryption.""
            </div>
            <div className={Styled.specialMsg}>PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY</div>
          </div>
        </div>
        {/* Second Msg */}
        <div className={Styled.subSection}>
          <img
            src="https://www.zerotier.com/static/6ef0d11bd53a0e07913da12681ac3522/c45f5/User_Icon_01c147556c.webp"
            width="48"
            height="48"
          />
          <div className={Styled.descriptionWrapper}>
            <div className={Styled.infoSectionMessage}>
              "ZeroTier provides a robust and essential backbone for our communications stack.""
            </div>
            <div className={Styled.specialMsg}>ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS</div>
          </div>
        </div>
         {/* Third Msg */}
        <div className={Styled.subSection}>
          <img
            src="https://www.zerotier.com/static/6ef0d11bd53a0e07913da12681ac3522/c45f5/User_Icon_01c147556c.webp"
            width="48"
            height="48"
          />
          <div className={Styled.descriptionWrapper}>
            <div className={Styled.infoSectionMessage}>
              "Loft Orbital uses ZeroTier to improve interoperability between its offices in the United States and France. It connects our engineers to key resources quickly and easily, which allows our team to focus on making space simple.""
            </div>
            <div className={Styled.specialMsg}>BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITAL</div>
          </div>
        </div>
      </div>
    </>
  );
}
