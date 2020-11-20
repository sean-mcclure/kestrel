import {character_counter} from "./counter.js";
import {post} from "./post.js";
import {visible} from "./visible.js"

import {
  FaTimes,
  FaCameraRetro,
  FaPoll,
  FaInfinity
} from "react-icons/fa";


export function Modal() {

    const input_styles = {
        display : "none"
    }

    const img_styles = {
        width : "40%",
        visibility: "hidden"
    }

    return (
         <>
         <div id="modal" className="modal">
             <div className="show_count">280</div>
             <div className="close_modal" onClick={(event) => {
                 event.preventDefault(); visible("modal");
                 document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 999999999999;
                 document.getElementsByClassName("hold_uploaded_img")[0].src = ""
                 document.getElementsByClassName("hold_uploaded_img")[0].style.visibility = "hidden"
                 document.getElementsByClassName("textarea")[0].value = ""
                 }}><FaTimes size="1.3em"/></div>
             <textarea id="textarea" className="textarea" onChange={character_counter}></textarea>
             <img id="hold_uploaded_img" className="hold_uploaded_img" alt="uploaded_img_preview" style={img_styles}></img>
             <table className="table">
                 <tbody>
                 <tr>
                     <td>
                     <div className="gif">
                     <input id="upload_input" className="upload_input" type="file" style={input_styles}></input>
                     <FaCameraRetro className="upload_image" size="2em" color="#141414" onClick={(e) => {
                            function handle_img(event) {
                                var file_types = ["png", "jpg", "jpeg", "gif"]
                                var extension = event.target.files[0].name.split(".")[1]
                                const is_success = file_types.indexOf(extension) > -1
                                if (is_success) {
                                    var reader = new FileReader();
                                    reader.readAsDataURL(event.target.files[0])
                                    reader.onload = function(event) {
                                        if (extension === "png" || extension === "jpg" || extension === "jpeg" || extension === "gif") {
                                            var file_upload_data_f678sdfa = event.target.result;
                                            document.getElementsByClassName("upload_input")[0].value = ""
                                            document.getElementsByClassName("hold_uploaded_img")[0].src = file_upload_data_f678sdfa
                                            window.recent_img_upload_url = file_upload_data_f678sdfa
                                            document.getElementsByClassName("hold_uploaded_img")[0].style.visibility = "visible"
                                            document.getElementsByClassName("hold_uploaded_img")[0].style.marginTop = "10px"
                                            document.getElementsByClassName("hold_uploaded_img")[0].style.marginBottom = "10px"
                                        } else {
                                            alert("Wrong extension. Only JPG, JPEG and GIF accepted.")
                                        }
                                    }
                                }
                            }
                            
                            document.getElementsByClassName("upload_input")[0].click()
                            document.getElementsByClassName("upload_input")[0].removeEventListener("change", handle_img)
                            document.getElementsByClassName("upload_input")[0].addEventListener("change", handle_img)
                            
                     }}/></div></td>
                     <td><FaPoll className="poll" size="2em" color="#141414"/></td>
                     <td><FaInfinity className="thread" size="2em" color="#141414"/></td>
                     <td><div className="post" onClick={post}>POST</div></td>
                 </tr>
                 </tbody>
             </table>
         </div>
         </>
  );
}
export default Modal;