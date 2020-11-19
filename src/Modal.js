import {character_counter} from "./counter.js";
import {post} from "./post.js";
import Photo from "./photo.js"
import {visible} from "./visible.js"


export function Modal() {
    
    return (
         <>
         <div id="modal" className="modal">
             <div className="show_count">280</div>
             <div className="close_modal" onClick={(event) => {event.preventDefault(); visible("modal")}}>X</div>
             <textarea id="textarea" className="textarea" onChange={character_counter}></textarea>
             <div id="hold_uploaded_img" className="hold_uploaded_img"></div>
             <table className="table">
                 <tbody>
                 <tr>
                     <td><Photo/></td>
                     <td><div className="gif">GIF</div></td>
                     <td><div className="poll">POLL</div></td>
                     <td><div className="post" onClick={post}>POST</div></td>
                 </tr>
                 </tbody>
             </table>
         </div>
         </>
  );
}
export default Modal;