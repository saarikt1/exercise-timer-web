import "./App.css";
import useTimer from "easytimer-react-hook";

function App() {
  const [timer, _isTargetAchieved] = useTimer({
    startValues: { minutes: 0, seconds: 0 },
  });

  return (
    <>
      <h1>Timer</h1>
      <div className="card">
        <button onClick={() => timer.start()}>
          {timer.getTimeValues().toString()}
        </button>
        <p>Click the timer to start</p>
      </div>
    </>
  );
}

export default App;
