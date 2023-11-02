import FirstInfoSection from "./firstInfoSection";
import SecondInfoSection from "./secondInfoSection";
import ThirdInfoSection from "./thirdInfoSection";
import FourthInfoSection from "./fourthInfoSection";
import FifthInfoSection from "./fifthInfoSection";
import SixInfoSection from "./sixInfoSection";
import FooterSection from "./footerSection";
import * as Styled from "../../../../styles/FirstInfoSection.module.css";

export default function InfoSection() {
  return (
    <div className={Styled.infoSectionWrapper}>
      <FirstInfoSection />
      <SecondInfoSection />
      <ThirdInfoSection />
      <FourthInfoSection />
      <FifthInfoSection />
      <SixInfoSection />
      <FooterSection />
    </div>
  );
}
