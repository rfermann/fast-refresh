import { useStoreActions, useStoreState } from "easy-peasy";
import "./App.css";

function App() {
  const { counter } = useStoreState((state) => state.counter);
  const { increment } = useStoreActions((state) => state.counter);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => increment()}>increment</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
