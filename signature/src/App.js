import "./App.css";
import Branding from "./components/main/Branding";
import Generator from "./components/generator/Generator";
function App() {
  return (
    <div className="App">
      <Branding />
      <div style={{ marginTop: "30px" }} />
      <Generator />
    </div>
  );
}

export default App;
