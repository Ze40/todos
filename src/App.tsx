import { AllTask } from "./pages";
import classes from "./App.module.scss";

function App() {
  return (
    <main className={classes.main}>
      <h1 className={classes.name}>Do More</h1>
      <AllTask />
    </main>
  );
}

export default App;
