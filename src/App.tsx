import styles from "./App.module.css";
import { Button } from "./Button.tsx";

function App() {
  return (
    <div className={styles.app}>
      <h1>Exercise timer</h1>
      <div className={styles.buttonContainer}>
        <Button label={"FOR TIME"} />
        <Button label={"AMRAP"} />
        <Button label={"EMOM"} />
        <Button label={"TABATA"} />
      </div>
    </div>
  );
}

export default App;
