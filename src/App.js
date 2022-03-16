import "./App.css";
import MyBox from "./MyBox.js";
import React, { useState, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import PreviewBox from "./PreviewBox.js";
import { exportComponentAsPNG } from 'react-component-export-image';


function App() {
  const [color, setColor] = useState("#aabbcc");
  const [isDown, setIsDown] = useState(false);
  const [hasBorder, setHasBorder] = useState(true);
  const [isEyedropper, setIsEyedropper] = useState(false);

  var boxes = [];
  const canvasRef = useRef();

  for (let i = 0; i < 1024; ++i) {
    boxes.push(
      <MyBox
        id={i}
        onClick={isEyedropper ? getColor : handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
    );
  }

  

  function handleClick(e) {
    e.target.style.backgroundColor = color;
    var num = e.target.id;
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
      hasBorder
        ? (a.style.borderWidth = "0")
        : (a.style.borderWidth = "0.05em");
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

  function resetHandler(e) {
    for (let a of document.getElementsByClassName("MyBox")) {
      a.style.backgroundColor = "white";
    }
  }

  function handleExport(e) {
    exportComponentAsPNG(canvasRef);
  }

  return (
    <div className="App">
      <div className="Banner"> Pixel Art Maker </div>
      <div className="PickerContainer">
        <button className="resetButton" onClick={resetHandler}>
          Reset
        </button>
        <div className="row"></div>
        <button className="gridButton" onClick={gridHandler}>
          Show/Hide Grid
        </button>
        <HexColorPicker color={color} onChange={setColor} />
        <button className="eyedropButton" onClick={eyedropHandler}>
          Eyedrop Tool
        </button>
        <div className="row"></div>
        <button className="exportButton" onClick={handleExport}>Export as PNG</button>
      </div>
      <div className="Canvas" ref={canvasRef}>{boxes}</div>
    </div>
  );
}

export default App;
