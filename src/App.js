import "./App.css";
import MyBox from "./MyBox.js";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

function App() {
  const [color, setColor] = useState("#aabbcc");
  const [isDown, setIsDown] = useState(false);
  const [hasBorder, setHasBorder] = useState(true);
  var boxes = [];
  for (var i = 0; i < 1296; ++i) {
    boxes.push(
      <MyBox
        onClick={handleClick}
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

  return (
    <div className="App">
      <div className="Banner"> Pixel Art Maker </div>
      <div className="PickerContainer">
        <button className="gridButton" onClick={gridHandler}>
          Show/Hide Grid
        </button>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
      <div className="Canvas">{boxes}</div>
    </div>
  );
}

export default App;
