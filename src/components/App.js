import { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (isRunning) {
        add();
        console.log("tic")
      }
    }, 1000);
  });

  const add = () => {
    let sec = seconds;
    let min = minutes;
    let hh = hours;
    sec++;
    console.log("seconds ",sec)
    setSeconds(sec);
    if (seconds >= 60) {
      setSeconds(0);
      min++;
      setMinutes(min);
      if (minutes >= 60) {
        setMinutes(0);
        hh++;
        setHours(hh);
      }
    }
  };

  const onStartHandle = () => {
    const running = isRunning;
    setIsRunning(!running);
  };

  return (
    <div className="App">
      <div className="time">
        {hours} : {minutes} : {seconds}
      </div>
      <div className="control-buttons">
        <button onClick={onStartHandle}>Start</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default App;
