import React from "react";
import { useRouter } from "next/router";

import NavigationBar from "../../containers/navigationBar/navigationBar";
import InfoSection from "../../molecules/infoSection/index";
import * as Styled from "../../../../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const handleTabChange = (tab) => {
    router.push(`/${tab}`);
  };
  return (
    <div>
      <div className={Styled.firstSectionWrapper}>
      <NavigationBar handleTabChange={handleTabChange} />
      <InfoSection/>
      </div>
    </div>
  );
}
