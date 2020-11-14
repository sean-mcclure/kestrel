import './App.css';
import logo from "./logo.png";
import {load_messages} from './load_messages.js';
import './pull_refresh.js';
import {pop_message} from './modal.js';

import Messages from "./Messages"


import {
  FaFeatherAlt
} from "react-icons/fa";

function App() {
  return (
         <>
        
         <div className="hold_modal"></div>
         <FaFeatherAlt color="white" size="2em" className="add_message" onClick={(event) => {
                    event.preventDefault();
                    pop_message()
         }}
                    />
         <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        </div>
        <div className="App">
        <div className="flex_grid_banner">
        <div className="header_col"><img src={logo} className="logo" alt="logo"/>
          
        </div>
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
             <Messages />
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