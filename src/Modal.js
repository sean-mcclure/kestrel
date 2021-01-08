import {character_counter} from "./counter.js";
import {post} from "./post.js";
import {visible} from "./visible.js"

import {
  FaTimes,
  FaCameraRetro,
  FaPoll,
  FaPlusCircle
} from "react-icons/fa";

function validate_file_size(file, max_allowable_in_mb) {
    var FileSize = file.files[0].size / 1024 / 1024;
    if (FileSize > max_allowable_in_mb) {
        return("not allowed")
    } else {
        return("allowed")
    }
}

export function Modal() {

    const input_styles = {
        display : "none"
    }

    const img_styles = {
        width : "40%",
        display : "none",
        margin : "0 auto"
    }

    var camera_cnt = 0;

    return (
         <>
         <div id="modal" className="modal">
             <div className="show_count">280</div>
             <div className="close_modal" onClick={(event) => {
                 event.preventDefault(); visible("modal");
                 document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 999999999999;
                 document.getElementsByClassName("hold_uploaded_img")[0].src = ""
                 var videoElement = document.getElementById("hold_uploaded_video");
                 videoElement.pause();
                 videoElement.removeAttribute('src');
                 videoElement.load();
                 document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none"
                 document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none"
                 document.getElementsByClassName("textarea")[0].value = ""
                 document.getElementsByClassName("textarea")[0].style.marginBottom = "10px"
                 }}><FaTimes size="1.3em"/></div>
                 <div id="textarea_wrapper" className="scrolling-wrapper">
                    <textarea id="textarea1" className="textarea" onChange={character_counter} maxLength="280"></textarea>
                 </div>
             <img id="hold_uploaded_img" className="hold_uploaded_img" alt="uploaded_img_preview" style={img_styles}></img>
             <video height="200px" playsInline controls id="hold_uploaded_video" className="hold_uploaded_video" style={img_styles}><source type="video/mp4"></source></video>
             <table className="table">
                 <tbody>
                 <tr>
                     <td>
                     <div className="gif">
                     <input id="upload_input" className="upload_input" type="file" style={input_styles}></input>
                     <FaCameraRetro className="upload_image" size="2em" color="#141414" onClick={(e) => {
                            camera_cnt++;
                            function handle_img(event) {
                                if(validate_file_size(event.target, 10) === "allowed") {
                                var file_types = ["png", "jpg", "jpeg", "gif", "mp4", "MOV"]
                                var extension = event.target.files[0].name.split(".")[1]
                                const is_success = file_types.indexOf(extension) > -1 || extension.length === 36
                                if (is_success) {
                                    var reader = new FileReader();
                                    reader.readAsDataURL(event.target.files[0])
                                    reader.onload = function(event) {
                                        if (extension === "png" || extension === "jpg" || extension === "jpeg" || extension === "gif" || extension === "mp4" || extension === "MOV" || extension.length === 36) {
                                            var file_upload_data_f678sdfa = event.target.result;
                                            document.getElementsByClassName("upload_input")[0].value = ""
                                            window.recent_img_upload_url = file_upload_data_f678sdfa
                                            if(extension !== "mp4" && extension !== "MOV" && extension.length !== 36) {
                                                document.getElementsByClassName("hold_uploaded_img")[0].src = file_upload_data_f678sdfa
                                                document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none"
                                                document.getElementsByClassName("hold_uploaded_img")[0].style.display = "block"
                                                document.getElementsByClassName("hold_uploaded_img")[0].style.marginTop = "0px"
                                                document.getElementsByClassName("hold_uploaded_img")[0].style.marginBottom = "10px"
                                            } else {
                                                document.getElementsByClassName("hold_uploaded_video")[0].src = file_upload_data_f678sdfa
                                                document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none"
                                                document.getElementsByClassName("hold_uploaded_video")[0].style.display = "block"
                                                document.getElementsByClassName("hold_uploaded_video")[0].style.marginTop = "10px"
                                                document.getElementsByClassName("hold_uploaded_video")[0].style.marginBottom = "10px"
                                            }
                                            document.getElementsByClassName("textarea")[0].style.marginBottom = "10px"             
                                        } else {
                                            if(camera_cnt < 2) {
                                            alert("Wrong extension. Only JPG, JPEG, GIF, mp4, and MOV accepted.")
                                            setTimeout(function() {
                                                        camera_cnt = 0;
                                            }, 1000)
                                            }
                                        }
                                    }
                                }
                            } else {
                                alert("File size too large. Keep images less than 10MB and videos less than 35 seconds.")
                            }
                            }
                            document.getElementsByClassName("upload_input")[0].click()
                            document.getElementsByClassName("upload_input")[0].removeEventListener("change", handle_img)
                            document.getElementsByClassName("upload_input")[0].addEventListener("change", handle_img)
                            
                     }}/></div></td>
                     <td><FaPoll className="poll" size="2em" color="#141414"/></td>
                     <td><FaPlusCircle className="thread" size="2em" color="#141414"/></td>
                     <td><div className="post" onClick={post}>POST</div></td>
                 </tr>
                 </tbody>
             </table>
         </div>
         </>
  );
}
export default Modal;