import { useEffect, useState, useRef } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

export default function App() {
  const triggerNotif = useNotification("can i steel your kimchi?", {
    body: "i love kimchi, don't you?",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hi</button>
    </div>
  );
}
