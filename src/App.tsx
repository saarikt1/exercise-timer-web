import styles from "./App.module.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <h1>Exercise timer</h1>
      <div className={styles.buttonContainer}>
        <Link to={`for-time`}>FOR TIME</Link>
        <Link to={`amrap`}>AMRAP</Link>
        <Link to={`emom`}>EMOM</Link>
        <Link to={`tabata`}>TABATA</Link>
      </div>
    </div>
  );
}

export default App;
