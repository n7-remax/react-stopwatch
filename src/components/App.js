import { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(58);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval = null;
    let sec = seconds;
    let min = minutes;
    let hh = hours;
    if (isRunning) {
      interval = setInterval(() => {
        sec++;
        console.log("seconds ", sec);
        setSeconds(sec);
        if (seconds >= 60) {
          setSeconds(0);
          min++;
          console.log("minutes", minutes);
          setMinutes(min);
          if (minutes >= 60) {
            setMinutes(0);
            hh++;
            setHours(hh);
          }
        }
        console.log("tic");
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, hours]);

  const handleClick = (button) => {
    const running = isRunning;
    if (button === "Start") {
      setIsRunning(!running);
    } else if (button === "Stop") {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setIsRunning(!running);
    }
  };

  const handleReset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const handleDoubleClick = () => {
    setIsRunning(false);
  };

  return (
    <div className="App">
      <div className="time">
        {hours > 9 ? hours : "0" + hours} :{" "}
        {minutes > 9 ? minutes : "0" + minutes} :{" "}
        {seconds > 9 ? seconds : "0" + seconds}
      </div>
      <div className="control-buttons">
        <button
          onClick={
            isRunning ? () => handleClick("Stop") : () => handleClick("Start")
          }
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onDoubleClick={handleDoubleClick}>Wait</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
