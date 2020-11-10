import './App.css';
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
        <img src={logo} className="logo" alt="logo" />

        <div className="flex-grid">
        <div className="col">
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
        </div>
        <div className="col">
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
        </div>
        <div className="col">
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
        </div>
        </div>
      
    </div>
  );
}

export default App;