import {visible} from "./visible.js";

import UploadImage from "./UploadImage";

import {
  FaTimes,
  FaCamera
} from "react-icons/fa";

export function Avatar() {

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

                    <div class="avatar_wrapper" id="avatar_wrapper">
                    <UploadImage></UploadImage>
                    </div>
                    <FaCamera className="camera_icon" onClick={(event) => {
                        document.getElementsByClassName("input_hide")[0].click()
                        document.getElementById("avatar_pic").style.backgroundImage = ""
                    }}></FaCamera>

                      <input type="range" min="100" max="1000" defaultValue="200" onInput={(e) => {
                          console.log(e.target.value.toString())
                          document.getElementById("avatar_pic").style.width = e.target.value.toString() + "px"
                      }}></input>

                     
         </div>
         </>
  );
}
export default Avatar;