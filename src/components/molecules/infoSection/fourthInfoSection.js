import React from "react";
import * as Styled from "../../../../styles/FourthInfoSection.module.css";

const TeamInfoList = [
  {
    image:
      "https://www.zerotier.com/static/8a85fc56f42df4c757170636612573f4/1e526/game_icon_eba3d81511.webp",
    title: "Individuals",
    message: `Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere 
    
    Conveniently share files and data, or even play LAN games with others 
    
    Manage secure network access to users of choice`,
  },
  {
    image:
      "https://www.zerotier.com/static/a24340474cb83819c6d6a0f2a5c8b481/1e526/Cloud_Icon_3a0e68dbd5.webp",
    title: "IT Teams",
    message: `Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution

    Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface
    
    Easily provision remote access for all of your users`,
  },
  {
    image:
      "https://www.zerotier.com/static/9805ec01fae783e135a667da3294ca30/1e526/Dev_Ops_Icon_007d67a039.webp",
    title: "DevOps",
    message: `Quickly build backplane networks spanning multiple cloud providers

    Save on performance, storage, and bandwidth
    
    Administrate and debug from anywhere
    
    Secure corporate network overlay and failover layer`,
  },
  {
    image:
      "https://www.zerotier.com/static/1dd3895e75e865b9ea36aa98fb36dba5/1e526/Global_Network_Icon_e85c3eca3d.webp",
    title: "Embedded",
    message: `Enjoy vastly superior network control and functionality

    Develop and manage products or services running on their own decentralized networks
    
    Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM`,
  },
];

export default function FourthInfoSection() {
  return (
    <>
      <div className={Styled.fourthInfoSectionWrapper}>
        <div className={Styled.infoTitle}>
          Secure networks for teams of any size
        </div>
        <div className={Styled.subSection}>
          {TeamInfoList.map((item) => (
            <div className={Styled.itemWrapper}>
              <img src={item.image} width="103" height="103" />
              <div className={Styled.descriptionWrapper}>
                <div className={Styled.infoSectionTitle}>{item.title}</div>
                <div className={Styled.infoSectionMessage}>{item.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
