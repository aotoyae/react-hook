import { useEffect, useState, useRef } from "react";
import "./styles.css";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
    onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function App() {
  const begForLife = () => console.log("pls don't leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}
