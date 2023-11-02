import React from "react";
import RoundedButton from "../../atoms/roundedButton/roundedButton";
import * as Styled from "../../../../styles/SixInfoSection.module.css";

export default function SixInfoSection() {
  return (
    <div className={Styled.sixSectionWrapper}>
      <div className={Styled.gridContainer}>
        <div className={Styled.gridItem}>
          <div className={Styled.descriptionWrapper}>
            <div className={Styled.infoSectionTitle}>ZeroTier Enterprise</div>
            <div className={Styled.infoSectionSubTitle}>
              For high-volume VPN, IoT, IIoT, edge, embedded networking, multi &
              hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.
            </div>
            <RoundedButton text="Contact Sales" customeClass="blueOrangeBg" />
          </div>
          <img
            src="https://www.zerotier.com/static/7f3f0800479132383698966a2145ee76/1e526/Continuous_Integration_ee887d3f58.webp"
            width="370"
            height="370"
          />
        </div>
        <div className={Styled.gridItem}>
          <img
            src="https://www.zerotier.com/static/c079e7ff52368ba0a4fad799a1af1192/1e526/Sales_Graphs_Art_dc7e900aa6.webp"
            width="370"
            height="370"
          />
          <div className={Styled.descriptionWrapper}>
            <div className={Styled.infoSectionTitle}>Service Providers</div>
            <div className={Styled.infoSectionSubTitle}>
              For hardware and software companies interested in embedding or
              integrating the ZeroTier platform within their service offering,
              as well as enterprise-facing channels including Managed Service
              Providers (MSPs), Resellers, and Systems Integrators.
            </div>
            <RoundedButton
              text="Contact SP Sales"
              customeClass="blueOrangeBg"
            />
          </div>
        </div>
        <div className={Styled.gridItemDarkGrayBg}>
          <div className={Styled.descriptionWrapper}>
            <div className={Styled.infoSectionTitle}>
              Open Source Community Edition
            </div>
            <div className={Styled.infoSectionSubTitle}>
              Featuring unlimited nodes, networks, and admins. Self-hosted.
              Designed for non-Commercial Use cases.
            </div>
            <div className={Styled.buttonSection}>
              <RoundedButton
                text="ZeroTier GitHub"
                customeClass="blackWhiteBg"
              />
              <span>Read Documentation</span>
            </div>
          </div>
        </div>
        <div className={Styled.gridItemBlackBg}>
        <div className={Styled.newsletterTitle}>Newsletter Signup</div>
          <div className={Styled.subscribeWrapper}>
            <div className={Styled.subTitle}>
              Join over 350,000 community members worldwide and receive the
              latest news from Team ZeroTier.
            </div>
            <div className={Styled.subscribeBtnWrapper}>
              <input className={Styled.inputWrapper} placeholder="Email Address" />
              <RoundedButton
                text="Subscribe"
                customeClass="orangeBlackBg"
              />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
