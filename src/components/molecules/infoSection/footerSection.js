import React from "react";
import RoundedButton from "../../atoms/roundedButton/roundedButton";
import * as Styled from "../../../../styles/FooterSection.module.css";

const linkList = [
  {
    title: "GET STARTED",
    links: ["Download", "GitHub", "SDK", "Partners"],
  },
  {
    title: "SUPPORT",
    links: ["Documentation", "Knowledge Base", "Community", "Getting Started"],
  },
  {
    title: "COMPANY",
    links: ["Contact", "About Us", "Careers", "Blog", "Media Kit"],
  },
];

const socialMediaLogoList = [
  "1298747_instagram_brand_logo_social media_icon.png",
  "1775160_facebook_chat_icon.png",
  "1775232_chat_communication_evernote_icon.png",
  "3225183_app_logo_media_popular_social_icon.png",
  "4375133_logo_youtube_icon.png",
];

export default function FooterSection() {
  return (
    <div className={Styled.footerSectionWrapper}>
      <div className={Styled.gridContainer}>
        <div>
          <div className={Styled.home} id="">
            <img className={Styled.mainLogo} src="download.png" width="30" height="30" />
            Zerotier
          </div>
          <div>Securely Connecting The World's Devices.</div>
        </div>
        <div className={Styled.innerGridContainer}>
          {linkList.map((item) => (
            <div>
              <div className={Styled.linkTitle}>{item.title}</div>
              {item.links.map((link) => (
                <div className={Styled.link}>{link}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={Styled.imgGridContainer}>
        <div>
          {socialMediaLogoList.map((logo) => (
            <img
              className={Styled.imgStyle}
              src={logo}
              width="24"
              height="24"
            />
          ))}
          <div className={Styled.textStyle}>
            © 2023 ZeroTier, Inc. All rights reserved.
          </div>
        </div>
        <div className={Styled.termscondition}>
          <span>Terms</span>
          <span> Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
