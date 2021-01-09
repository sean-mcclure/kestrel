import {visible} from "./visible.js";
import {change_width} from "./avatar_drag.js";
import {uploadFile} from "./upload_image.js";


import {
  FaTimes,
  FaCameraRetro
} from "react-icons/fa";

function validate_file_size(file, max_allowable_in_mb) {
    var FileSize = file.files[0].size / 1024 / 1024;
    if (FileSize > max_allowable_in_mb) {
        return("not allowed")
    } else {
        return("allowed")
    }
}


export function Avatar() {



    const input_styles = {
        display : "none"
    }


    var camera_cnt = 0;

    return (
         <>
         <div id="avatar" className="modal">
             <div className="close_modal" onClick={(event) => {
                 event.preventDefault(); visible("avatar");
                 document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 999999999999;
                 document.getElementsByClassName("hold_uploaded_img")[0].src = ""
                 document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none"
                 document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none"
                 }}>
                     <FaTimes size="1.3em"/></div>

                    <h3 className="avatar_title">Drag Photo to Position</h3>
                    <div class="avatar_wrapper" id="avatar_wrapper">
                        <img id="hold_uploaded_img" className="hold_uploaded_img" draggable="true" src="https://bit.ly/3q3FY8d" alt="uploaded avatar"></img>
                    </div>
                    <h3 className="avatar_title">Resize Image</h3>

                    <input type="range" min="100" max="1000" defaultValue="50" onChange={(e) => {change_width(e)}}></input>
                           
                
                     <div className="gif">
                     <input id="upload_input" className="upload_input" type="file" style={input_styles}></input>
                     <FaCameraRetro className="upload_image" size="2em" color="#141414" onClick={(e) => {
                            camera_cnt++;
                            function handle_img(event) {
                                if(validate_file_size(event.target, 10) === "allowed") {
                                var file_types = ["png", "jpg", "jpeg", "gif"]
                                var extension = event.target.files[0].name.split(".")[1]
                                const is_success = file_types.indexOf(extension) > -1 || extension.length === 36
                                if (is_success) {
                                    var reader = new FileReader();
                                    reader.readAsDataURL(event.target.files[0])
                                    reader.onload = function(event) {
                                        if (extension === "png" || extension === "jpg" || extension === "jpeg" || extension === "gif") {
                                            var file_upload_data_f678sdfa = event.target.result;
                                            document.getElementsByClassName("upload_input")[0].value = ""
                                            window.recent_img_upload_url = file_upload_data_f678sdfa
                                            uploadFile(file_upload_data_f678sdfa)
                                         } else {
                                            if(camera_cnt < 2) {
                                            alert("Wrong extension. Only JPG, JPEG, GIF accepted.")
                                            setTimeout(function() {
                                                camera_cnt = 0;
                                            }, 1000)
                                            }
                                        }
                                    }
                                }
                            } else {
                                alert("File size too large. Keep images less than 10MB.")
                            }
                            }
                            document.getElementsByClassName("upload_input")[0].click()
                            document.getElementsByClassName("upload_input")[0].removeEventListener("change", handle_img)
                            document.getElementsByClassName("upload_input")[0].addEventListener("change", handle_img)
                            
                     }}/></div>
         </div>
         </>
  );
  
}
export default Avatar;