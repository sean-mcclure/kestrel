import "./RePost.css";

import avatar from "./avatar.png";

import {visible} from "./visible.js";

import {
  FaTimes
} from "react-icons/fa";

function RePost() {
    return (
        <div className="repost">
            <FaTimes size="1.3em" className="close_repost" onClick={
                (event) => {
                     event.preventDefault();
                     visible("repost");
                }
            }/>
             <div className="repost_wrapper">
                 <div className="repost_item"><textarea id="repost_textrea" placeholder="say something..."></textarea></div>
                 <button className="repost_item">REPOST</button>
            </div>     
    </div>
    );
}

export default RePost;