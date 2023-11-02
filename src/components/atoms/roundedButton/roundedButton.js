import React from "react";
import * as Styled from "../../../../styles/RoundedButton.module.css";

const RoundedButton = (props) => {
  return (
    props !== undefined && (
      <div className={Styled[props.customeClass]}>{props.text}</div>
    )
  );
};

export default RoundedButton;
