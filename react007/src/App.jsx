import "./App.css";
import ClickCounter from "./components/hoc/ClickCounter";
import HoverCounter from "./components/hoc/HoverCounter";
function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
