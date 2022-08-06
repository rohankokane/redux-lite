import { ButtonBar } from "./Buttonbar";
import { Counter } from "./Counter";
import { DozenCounter } from "./DozenCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello folks!</h1>
      <h2>This counter app is using my own version of Redux</h2>
      <DozenCounter />
      <Counter />
      <ButtonBar />
    </div>
  );
}
