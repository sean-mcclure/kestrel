import {character_counter} from "./counter.js";
import {post} from "./post.js";
import Photo from "./photo.js"

export function Modal() {
    return (
         <>
         <div id="modal" className="modal">
             <div className="show_count">280</div>
             <textarea id="textarea" className="textarea" onChange={character_counter}></textarea>
             <div id="hold_uploaded_img" className="hold_uploaded_img"></div>
             <div className="icon_wrapper">
                 <div><Photo/></div>
                <div className="gif">GIF</div>
                <div className="poll">POLL</div>
                <div className="post" onClick={post}>POST</div>
            </div>
         </div>
         </>
  );
}
export default Modal;