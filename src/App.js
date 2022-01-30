import "./App.css";
import MyBox from "./MyBox.js";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

function App() {
  const [color, setColor] = useState("#aabbcc");
  const [isDown, setIsDown] = useState(false);
  const [hasBorder, setHasBorder] = useState(true);
  const [isEyedropper, setIsEyedropper] = useState(false);

  var boxes = [];
  for (var i = 0; i < 1296; ++i) {
    boxes.push(
      <MyBox
        onClick={isEyedropper ? getColor : handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
    );
  }

  function handleClick(e) {
    e.target.style.backgroundColor = color;
  }

  function handleHover(e) {
    if (isDown === true) {
      e.target.style.backgroundColor = color;
    }
  }

  function getColor(e) {
    setColor(e.target.style.backgroundColor);
    setIsEyedropper(false);
  }

  function gridHandler(e) {
    for (let a of document.getElementsByClassName("MyBox")) {
      hasBorder ? (a.style.borderWidth = "0") : (a.style.borderWidth = "0.1em");
    }
    hasBorder ? setHasBorder(false) : setHasBorder(true);
  }

  document.body.addEventListener("mousedown", handleMouseDown);
  document.body.addEventListener("mouseup", handleMouseUp);

  function handleMouseUp(e) {
    setIsDown(false);
  }

  function handleMouseDown(e) {
    setIsDown(true);
  }

  function eyedropHandler(e) {
    setIsEyedropper(true);
  }

  return (
    <div className="App">
      <div className="Banner"> Pixel Art Maker </div>
      <div className="PickerContainer">
        <button className="gridButton" onClick={gridHandler}>
          Show/Hide Grid
        </button>
        <HexColorPicker color={color} onChange={setColor} />
        <button className="eyedropButton" onClick={eyedropHandler}>
          Eyedrop Tool
        </button>
      </div>
      <div className="Canvas">{boxes}</div>
    </div>
  );
}

export default App;
