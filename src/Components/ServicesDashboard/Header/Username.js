import React, { useState, useEffect } from "react";

const Username = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Update the current time and date every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const day = now.toLocaleString("en", { weekday: "short" });
      const month = now.toLocaleString("en", { month: "short" });
      const date = now.getDate();
      const year = now.getFullYear();

      setCurrentTime(`${hours}:${minutes}`);
      setCurrentDate(`${day}, ${date} ${month} ${year}`);
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="main-header-date-time text-right">
      <h3 className="time">
        <span id="hours">{currentTime.split(":")[0]}</span>
        <span id="point">:</span>
        <span id="min">{currentTime.split(":")[1]}</span>
      </h3>
      <span className="date">
        <span id="date">{currentDate}</span>
      </span>
    </div>
  );
};

export default Username;
