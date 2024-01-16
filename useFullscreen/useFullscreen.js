import { useEffect, useState, useRef } from "react";
import "./styles.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current.requestFullscreen) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullscreen) {
      element.current.mozRequestFullscreen();
    } else if (element.current.webkitRequestFullscreen) {
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen) {
      element.current.msRequestFullscreen();
    }
    runCb(true);
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };

  return { element, triggerFull, exitFull };
};

export default function App() {
  const callback = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(callback);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://modo-phinf.pstatic.net/20210430_129/1619755411652m5g3P_JPEG/mosaP1M1uC.jpeg?type=round256_256" />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>make fullscreen</button>
    </div>
  );
}
