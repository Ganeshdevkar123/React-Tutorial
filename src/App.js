import "./App.css";
import HelloWorld from "./Components/Functional-Components/HelloWorld";
import HellocWorld from "./Components/Class-Components/HellocWorld";
import { ExportChange } from "./Components/Functional-Components/ExportChange";
import AddProps from "./Props/AddProps";
import StateInClassComponent from "./Components/Class-Components/StateInClassComponent";
import FetchApi from "./Components/Functional-Components/FetchApi";
import Counter from "./Components/Class-Components/Counter";
import DestructureProps from "./Props/DestructureProps";
import ClickcFunction from "./Events/ClickcFunction";
import ClickfFunction from "./Events/ClickfFunction";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <hr></hr>
      <HellocWorld />
      <hr></hr>
      <ExportChange />
      <hr></hr>
      <AddProps name="Mahendra Singh Dhoni" PName="Captan Cool" />
      <hr></hr>
      <AddProps name="Sachin Tendulkar" PName="God of cricket" />
      <hr></hr>
      <StateInClassComponent />
      <hr></hr>
      <FetchApi />
      <hr></hr>
      <Counter />
      <hr></hr>
      <DestructureProps name="V Kohli" PName="chicku" />
      <hr></hr>
      <ClickcFunction />
      <ClickfFunction />
      <hr></hr>
    </div>
  );
}

export default App;
