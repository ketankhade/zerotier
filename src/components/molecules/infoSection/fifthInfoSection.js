import React from "react";
import RoundedButton from "../../atoms/roundedButton/roundedButton";
import * as Styled from "../../../../styles/FifthInfoSection.module.css";

const PricingList = [
  {
    image:
      "https://www.zerotier.com/static/e92607a0214589a500caf5cae2f11090/b16a9/Zero_Tier_Logo_Inverted_White_73e6fee0b9.webp",
    title: "Basic",
    subTitle: "For Everyone / ZeroTier Hosted Controller",
    message: [
      "✓ 1 Admin",
      "✓ 25 Nodes",
      "✓ Unlimited Networks",
      "✖ Business SSO: n/a",
      "✓ Community Support",
      "FREE",
    ],
    actionBtn: 'Free Sign Up',
    actionBtnVariant: 'whiteBlackBg'
  },
  {
    image:
      "https://www.zerotier.com/static/794e03fb936295d0ab7d53d51d73550b/b16a9/Zero_Tier_Logo_Orange_a60eff7c4a.webp",
    title: "Professional",
    subTitle: "Licensed Only For Individuals and Testing",
    message: [
      "✓ Admins | $10 USD/mo each",
      "✓ 25 Node Packs | $5 USD/mo",
      "✓ Unlimited Networks",
      "✓ Business SSO | $5 USD/mo per seat",
      "✓ Community Support",
      "Starting at $5 USD/month",
    ],
    actionBtn: 'Sign Up',
    actionBtnVariant: 'orangeBlackBg'
  },
  {
    image:
      "https://www.zerotier.com/static/dccd19c2abf4ded3547eda65dab7d02e/b16a9/Zero_Tier_Logo_Blue_1c2a591633.webp",
    title: "Business",
    subTitle: "Licensed for Commercial Deployments",
    message: [
      "Use Cases Include:",
      "∙ IoT/IIoT",
      "∙ SD-WAN",
      "∙ VPN",
      "∙ Remote Monitoring and Management",
      "Contact Sales for Pricing",
    ],
    actionBtn: 'Contact Sales',
    actionBtnVariant: 'blueBlackBg'
  },
];

export default function FifthInfoSection() {
  return (
    <div className={Styled.fifthSectionWrapper}>
      <div className={Styled.title}>Pricing</div>
      <div className={Styled.subTitle}>
        ZeroTier makes networking easy for everyone - anywhere.
      </div>
      <div className={Styled.gridContainer}>
        {PricingList.map((item) => (
           <div className={Styled.gridItem}>
            <img src={item.image} width="65" height="65" />
            <div className={Styled.descriptionWrapper}>
              <div className={Styled.infoSectionTitle}>{item.title}</div>
              <div className={Styled.infoSectionSubTitle}>{item.subTitle}</div>
              {item.message.map((menu) => (
                <div className={Styled.infoSectionMessage}>{menu}</div>
              ))}
              <RoundedButton text={item.actionBtn} customeClass={item.actionBtnVariant} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
