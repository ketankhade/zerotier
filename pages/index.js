import React, { useEffect } from "react";
import Home from "../src/components/containers/home/home";
import * as Styled from "../styles/Home.module.css";

export default function App() {
  if (typeof window !== "undefined") {
    document.body.style.background = "#1A1A1A";
  }
  return (
    <div className={Styled.container}>
      <Home />
    </div>
  );
}
