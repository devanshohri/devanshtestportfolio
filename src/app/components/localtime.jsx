"use client";
import { useState, useEffect } from "react";

const LocalTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const timeOptions = {
        timeZone: "Europe/Helsinki",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      };
      setTime(new Date().toLocaleTimeString("en-US", timeOptions));
    }

    updateTime(); // Call once on mount to avoid delay
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return <span className="localtime">{time}</span>;
};

export default LocalTime;
