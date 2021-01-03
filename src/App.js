import './App.css';
import logo from "./logo.png";

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
     
        <div className="App">
        <div className="flex_grid_banner">
        <div unselectable="on"><img src={logo} className="logo" alt="logo"/></div>
        <div><FaFeatherAlt color="white" size="2em" className="add_message" onClick={(event) => {
            event.preventDefault();
            visible("modal");
            document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = -1
            }}/></div>

        </div>

        <div className="flex-grid">
  
        <div className="col">
             <Messages/>
        </div>
      
        </div>
      
    </div>
    </>
  );
}

export default App;