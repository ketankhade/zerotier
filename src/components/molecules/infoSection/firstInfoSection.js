import React from "react";
import RoundedButton from "../../atoms/roundedButton/roundedButton";
import * as Styled from "../../../../styles/FirstInfoSection.module.css";

export default function FirstInfoSection() {
  return (
    <>
      <div className={Styled.firstInfoSectionWrapper}>
        <div className={Styled.infoSectionTitle}>
          Securely connect any device, anywhere.
        </div>
        <div className={Styled.infoSectionMessage}>
          ZeroTier lets you build modern, secure multi-point virtualized
          networks of almost any type. From robust peer-to-peer networking to
          multi-cloud mesh infrastructure, we enable global connectivity with
          the simplicity of a local network.
        </div>
        <div className={Styled.buttonSection}>
          <RoundedButton text="Get ZeroTier" customeClass="orangeBlackBg" />
          <span>{`Learn more ›`}</span>
        </div>
      </div>
      <div className={Styled.infoSecBottomMsg}>
        🔔 NEW! ZeroTier Summer 2023 Release:{" "}
        <span className={Styled.link}>Download 1.12.2</span> -{" "}
        <span className={Styled.link}>Read More</span>
      </div>
    </>
  );
}
