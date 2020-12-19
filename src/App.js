import './App.css';
import logo from "./logo.png";
import './pull_refresh.js';

import Messages from "./Messages"
import Modal from "./Modal"
import {visible} from "./visible.js"

import {
  FaFeatherAlt
} from "react-icons/fa";

function App() {
   
  return (

         <>
         <Modal/>
         <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        </div>
        <div className="App">
        <div className="flex_grid_banner">
        <div className="header_col" unselectable="on"><img src={logo} className="logo" alt="logo"/></div>
        {/*<div className="header_col"><input className="search" placeholder="search..."></input></div>*/}
        <div className="header_col"><FaFeatherAlt color="white" size="2em" className="add_message" onClick={(event) => {
            event.preventDefault();
            visible("modal");
            document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = -1
            }}/></div>

        </div>

        <div className="flex-grid">
        <div className="col">
        </div>
        <div className="col">
             <Messages/>
        </div>
        <div className="col">
        </div>
        </div>
      
    </div>
    </>
  );
}

export default App;