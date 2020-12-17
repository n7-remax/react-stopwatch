import { useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(0);
  return (
    <div className="App">
      <div className="time">
        {hours} : {minutes} : {seconds}
      </div>
      <div className="control-buttons">
        <button>Start</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default App;
