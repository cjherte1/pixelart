import "./App.css";
import MyBox from "./MyBox.js";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

function App() {
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

  const [color, setColor] = useState("#aabbcc");
  const [isDown, setIsDown] = useState(false);

  function handleClick(e) {
    e.target.style.backgroundColor = color;
  }

  function handleHover(e) {
    if (isDown === true) {
      e.target.style.backgroundColor = color;
    }
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
        <HexColorPicker color={color} onChange={setColor} />
      </div>
      <div className="Canvas">{boxes}</div>
    </div>
  );
}

export default App;
