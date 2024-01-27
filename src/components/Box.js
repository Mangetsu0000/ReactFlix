import React from "react";
import ToggleButton from "./ToggleButton";
const Box = ({ children, isOpen, onSetOpen }) => {
  return (
    <div className="box">
      <ToggleButton isOpen={isOpen} onSetOpen={onSetOpen} />
      {isOpen && children}
    </div>
  );
};

export default Box;
