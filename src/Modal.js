import {character_counter} from "./counter.js";
import {like} from "./like.js";
import {post} from "./post.js";

import {
  FaComment,
  FaRetweet,
  FaThumbsUp
} from "react-icons/fa";

export function Modal() {
    return (
         <>
         <div id="modal" className="modal">
             <div className="show_count">280</div>
             <textarea id="textarea" className="textarea" onChange={character_counter}></textarea>
             <div className="icon_wrapper">
                <div><FaComment className="icons" color="whitesmoke" size="1.6em"/></div>
                <div><FaRetweet className="icons" color="whitesmoke" size="2em"/></div>
                <div><FaThumbsUp className="icons" color="whitesmoke" size="1.6em" onClick={like}/><span className="like_count">24</span></div>
                <div className="post" onClick={post}>POST</div>
            </div>
         </div>
         </>
  );
}

export default Modal;