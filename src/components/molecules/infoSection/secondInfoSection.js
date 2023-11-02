import React from "react";
import RoundedButton from "../../atoms/roundedButton/roundedButton";
import * as Styled from "../../../../styles/SecondInfoSection.module.css";

export default function SecondInfoSection() {
  return (
    <>
      <div className={Styled.secondInfoSectionWrapper}>
        <div className={Styled.subSectionOne}>
          <img
            src="https://www.zerotier.com/static/5e7354d2749f6a90d8ea8a64ec51423c/3fffc/Zero_Tier_smart_phone_in_hand_vector_illustration_dcd7d498ae.webp"
            width="500"
            height="500"
          />
          <div className={Styled.descriptionWrapper}>
            <div className={Styled.infoSectionTitle}>It just works</div>
            <div className={Styled.infoSectionMessage}>
              ZeroTier combines the capabilities of VPN and SD-WAN, simplifying
              network management. Enjoy flexibility while avoiding costly
              hardware vendor lock in.
            </div>
            <RoundedButton text="Learn more ›" customeClass="whiteBlackBg" />
          </div>
        </div>
        <div className={Styled.subSectionTwo}>
          <img
            src="https://www.zerotier.com/static/78067775c199cfb1556608e9305183d0/6baf7/secure_technology_32950d4870.webp"
            width="500"
            height="500"
          />
          <div className={Styled.descriptionWrapper}>
            <div className={Styled.infoSectionTitle}>
              Speed, flexibility, and security
            </div>
            <div className={Styled.infoSectionMessage}>
              Set up ZeroTier in minutes with remote, automated deployment.
              Emulates Layer 2 Ethernet with multipath, multicast, and bridging
              capabilities. ZeroTier’s zero-trust networking solution provides
              scalable security with 256-bit end-to-end encryption.
            </div>
            <RoundedButton text="Get ZeroTier" customeClass="whiteBlackBg" />
          </div>
        </div>
      </div>
    </>
  );
}
