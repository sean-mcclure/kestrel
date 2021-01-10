import './App.css';
import './tooltip.css';
import logo from "./logo.png";

import Messages from "./Messages";
import TopPosts from "./TopPosts";
import Headlines from "./Headlines";
import Modal from "./Modal";
import Avatar from "./avatar.js";
import SignIn from "./sign_in.js";
import {visible} from "./visible.js";

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
         <Avatar/>
          <SignIn/>
     
        <div className="App">

        <div className="flex_grid_banner">

            <div unselectable="on"><img src={logo} className="logo" alt="logo"/></div>
            
            <div><FaFeatherAlt color="white" size="2em" className="add_message" onClick={(event) => {
                event.preventDefault();
                visible("modal");
                document.body.style.overflowY = "hidden"
                document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = -1
                }}/>
            </div>

        </div>

        <div className="flex-grid">
  
        <div className="col">
             <Messages/>
        </div>

        <div className="col2">
            <table className="col_2_table">
                <tbody>
                <tr>
                    <td className="top_posts_cell"><FaNewspaper color="whitesmoke" size="2em" className="news"></FaNewspaper></td>
                    <td className="top_posts_cell"><p className="posts_title">TODAY'S TOP POSTS</p></td>
                    <td className="news_header_cell"><FaNewspaper color="whitesmoke" size="2em" className="news"></FaNewspaper></td>
                    <td className="news_header_cell"><p className="news_title">WHAT'S HAPPENING?</p></td>
                </tr>
                <tr>
                    <td></td>
                    <td><TopPosts/></td>
                    <td></td>
                    <td><Headlines/></td>
                </tr>
                </tbody>
            </table>
            
        </div>
        
        </div>

        <div className="footer">
             <div><p className="sign_in" onClick={(event) => {
                event.preventDefault();
                visible("sign_in");
                document.body.style.overflowY = "hidden"
                document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = -1
             }}>SIGN IN</p></div>
            <div class="tooltip top" data-tooltip_text="FETCH LATEST"><FaRedo id="refresh_icon" color="white" size="2em" className="options_icons"></FaRedo></div>
            <div class="tooltip top" data-tooltip_text="SEARCH"><FaSearch id="search_icon" color="white" size="2em" className="options_icons"></FaSearch></div>
            <div class="tooltip top" data-tooltip_text="MESSAGES"><FaEnvelope id="dm_icon" color="white" size="2em" className="options_icons"></FaEnvelope></div>
            <div class="tooltip top" data-tooltip_text="PROFILE"><FaCogs id="profile_icon" color="white" size="2em" className="options_icons" onClick={(event) => {
                event.preventDefault();
                visible("avatar");
                document.body.style.overflowY = "hidden"
                document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = -1
            }}></FaCogs></div>
        </div>
      
    </div>
    </>
  );
}

export default App;