import "./Welcome.css";

import logo from "./logo.png";

import {
  FaHandsHelping,
  FaCogs
} from "react-icons/fa";

export function Welcome() {

    return (
         <>
         <div id="welcome_modal" className="modal">
             <div><img src={logo} alt="logo" className="logo"></img></div>
            <h1>WELCOME</h1>  
            <FaHandsHelping color="gold" size="5em" className="hand_shake"/> 
            <p>Set your profile and start posting.</p>     
         </div>
         </>
  );
}
export default Welcome;