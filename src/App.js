import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let timer;
    if (isCounting) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCounting]);

  return (
    <div className="container">
      <section className="wrapper">
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <div>
          <button className="button start" onClick={() => setIsCounting(true)}>
            Start
          </button>
          <button className="button stop" onClick={() => setIsCounting(false)}>
            Stop
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
