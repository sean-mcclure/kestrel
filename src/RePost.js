import "./RePost.css";

import Close from "./Close";

import {
  FaTimes
} from "react-icons/fa";

function RePost() {
    return (
    <>
        <div><Close/></div>
        <div className="repost_wrapper">
            <div className="repost_item"><textarea id="repost_textrea" placeholder="say something..."></textarea></div>
            <button className="repost_item">REPOST</button>
        </div> 
    </>    
    );
}

export default RePost;