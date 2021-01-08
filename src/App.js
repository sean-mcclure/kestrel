import './App.css';
import './tooltip.css';
import logo from "./logo.png";

import Messages from "./Messages"
import Modal from "./Modal"
import {visible} from "./visible.js"

import {
  FaFeatherAlt,
  FaNewspaper,
  FaSearch,
  FaCogs,
  FaRedo,
  FaEnvelope
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
            document.body.style.overflowY = "hidden"
            document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = -1
            }}/></div>

        </div>

        <div className="flex-grid">
  
        <div className="col">
             <Messages/>
        </div>

        <div className="col2">
            <table className="news_header">
                <tbody>
                <tr>
                    <td className="news_header_cell"><FaNewspaper color="whitesmoke" size="2em" className="news"></FaNewspaper></td>
                    <td className="news_header_cell"><p>WHAT'S HAPPENING?</p></td>
                </tr>
                </tbody>
            </table>
        </div>
      
        </div>

        <div className="footer">
            <div class="tooltip top" data-tooltip_text="FETCH LATEST"><FaRedo id="refresh_icon" color="white" size="2em" className="options_icons"></FaRedo></div>
            <div class="tooltip top" data-tooltip_text="SEARCH"><FaSearch id="search_icon" color="white" size="2em" className="options_icons"></FaSearch></div>
            <div class="tooltip top" data-tooltip_text="MESSAGES"><FaEnvelope id="dm_icon" color="white" size="2em" className="options_icons"></FaEnvelope></div>
            <div class="tooltip top" data-tooltip_text="PROFILE"><FaCogs id="profile_icon" color="white" size="2em" className="options_icons"></FaCogs></div>
        </div>
      
    </div>
    </>
  );
}

export default App;