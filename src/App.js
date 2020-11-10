import './App.css';
import logo from "./logo.png";
import {load_messages} from './load_messages.js';
import {pull_refresh} from './pull_refresh.js';


function App() {
  return (
         <>
         <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
        </div>
        <div className="App">
        <div className="flex_grid_banner">
        <div className="header_col"><img src={logo} className="logo" alt="logo" onClick={load_messages}/></div>
        <div className="header_col"><input className="search" placeholder="search..."></input></div>
        </div>

        <div className="flex-grid">
        <div className="col">
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
        </div>
        <div className="col">
        </div>
        <div className="col">
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
            <p>This is some stuff!!!</p>
        </div>
        </div>
      
    </div>
    </>
  );
}

export default App;