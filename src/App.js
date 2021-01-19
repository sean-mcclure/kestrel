import './App.css';
import './tooltip.css';
import logo from "./logo.png";

import Messages from "./Messages";
import TopPosts from "./TopPosts";
import Headlines from "./Headlines";
import Avatar from "./Avatar";
import SignIn from "./SignIn";
import DirectMessages from "./DirectMessages";
import Write from "./Write";
import Welcome from "./Welcome";
import RePost from "./RePost";

import Search from "./Search";
import {visible} from "./visible.js";
import {style_element} from "./style.js";

import {log_user_out} from "./SignRegister";

import {
  FaFeatherAlt,
  FaNewspaper,
  FaCrow,
  FaSearch,
  FaCogs,
  FaRedo,
  FaEnvelope,
} from "react-icons/fa";

function App() {
   
  return (

         <>
         <Avatar/>
         <SignIn/>
         <DirectMessages/>
         <Write/>
         <Search/>
         <Welcome/>
     
        <div className="App">


        <div className="flex_grid_banner">

            <div unselectable="on"><img src={logo} className="logo" alt="logo"/></div>
            
            <div><FaFeatherAlt color="white" size="2em" className="add_message" onClick={(event) => {
               event.preventDefault();
               // document.getElementsByClassName("repost_toggle")[0].style.display = "none";
                visible("write");
                }}/>
            </div>

        </div>

                <div className="feed_titles_wrapper">
            <div id="world" className="feed_titles" onClick={(event) => {style_element('feed', event)}}>WORLD FEED</div>
            <div id="followers" className="feed_titles" onClick={(event) => {style_element('feed', event)}}>FOLLOWER FEED</div>
            </div>


        <div className="flex-grid">
  
        <div className="col">
             <Messages/>
             <RePost/>
        </div>

        <div className="col2">


            <div className="top_and_news_wrapper">
                <div className="top_and_news"><FaCrow color="whitesmoke" size="2em" className="top_posts"></FaCrow></div>
                <div className="top_and_news"><p className="posts_title">TRENDING</p></div>
                <div className="top_and_news"><FaNewspaper color="whitesmoke" size="2em" className="news"></FaNewspaper></div>
                <div className="top_and_news"><p className="news_title">HEADLINES</p></div>
                <div className="top_and_news"></div>
                <div className="top_and_news"><TopPosts/></div>
                <div className="top_and_news"></div>
                <div className="top_and_news"><Headlines/></div>
            </div>
            
        </div>
        
        </div>

        <div className="footer">
             <div><p className="sign_in" onClick={(event) => {
                event.preventDefault();
                if(document.getElementsByClassName("sign_in")[0].innerText === "SIGN OUT") {
                    log_user_out()
                } else {
                    visible("sign_in");
                    document.body.style.overflowY = "hidden"
                    document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = -1
                }
             }}>SIGN IN/UP</p></div>
            <div class="tooltip top" data-tooltip_text="FETCH LATEST"><FaRedo id="refresh_icon" color="white" size="2em" className="options_icons"></FaRedo></div>
            <div class="tooltip top" data-tooltip_text="SEARCH"><FaSearch id="search_icon" color="white" size="2em" className="options_icons" onClick={(event) => {
                visible("search");
            }}></FaSearch></div>
            <div class="tooltip top" data-tooltip_text="MESSAGES"><FaEnvelope id="dm_icon" color="white" size="2em" className="options_icons" onClick={(event) => {
                visible("direct_message");
            }}></FaEnvelope></div>
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