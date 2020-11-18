import {character_counter} from "./counter.js";
import {post} from "./post.js";
import Photo from "./photo.js"

import {
  FaCameraRetro,
  FaPoll
} from "react-icons/fa";

export function Modal() {
    return (
         <>
         <div id="modal" className="modal">
             <div className="show_count">280</div>
             <textarea id="textarea" className="textarea" onChange={character_counter}></textarea>
             <div className="hold_uploaded_img"></div>
             <div className="icon_wrapper">
                
                <div><Photo/></div>
                <div className="gif_text">GIF</div>
                <div><FaPoll className="icons" color="whitesmoke" size="2em"/></div>
                <div className="post" onClick={post}>POST</div>
            </div>
         </div>
         </>
  );
}
document.getElementsByClassName("photo_uoload_button")[0].innerHTML = "<img src='camera_icon.png'/>"
export default Modal;