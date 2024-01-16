import { useEffect, useState, useRef } from "react";
import "./styles.css";

const useHover = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => console.log("Hello");
  const abort = () => console.log("Aborted");
  const title = useHover(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
