import "./Avatar.css";

import {visible} from "./visible.js";

import UploadImage from "./UploadImage";

import {
  FaTimes,
  FaCamera
} from "react-icons/fa";

export function Avatar() {

    return (
         <>
         <div id="avatar_modal" className="avatar_modal">
             <div className="close_modal" onClick={(event) => {
                    event.preventDefault();
                    visible("avatar");
                    document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 9999;
                    document.getElementsByClassName("hold_uploaded_img")[0].src = "";
                    document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none";
                    document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none";
                    document.getElementsByClassName("camera_icon")[0].style.display = "block";
                    document.getElementsByClassName("camera_icon")[0].style.margin = "0 auto";
                    document.getElementsByClassName("camera_icon")[0].style.marginTop = "-10px";
                    document.getElementsByClassName("camera_icon")[0].style.marginBottom = "-10px";
                    document.getElementsByClassName("upload_title")[0].style.display = "block";
                    document.getElementsByClassName("upload_title_sub")[0].style.display = "block";
                    document.getElementsByClassName("follow_block_wrapper")[0].style.display = "none";
                    document.getElementsByClassName("bio")[0].style.pointerEvents = "auto";
                    document.getElementsByClassName("save_profile")[0].style.display = "block";
                    document.getElementsByClassName("save_profile")[0].style.margin = "0 auto";
                    document.getElementsByClassName("save_profile")[0].style.marginBottom = "10px";
                 }}>
                
                <FaTimes size="1.3em" className="avatar_close"/></div>
                
                    <UploadImage></UploadImage>
                    <p id="follower_count">217 Followers</p>
                    <div className="follow_block_wrapper">
                    <button className="follow_block">FOLLOW</button><button className="follow_block">BLOCK</button>
                    </div>
                    <FaCamera className="camera_icon" onClick={(event) => {
                        document.getElementsByClassName("input_hide")[0].click()
                        document.getElementById("avatar_pic").style.backgroundImage = "";
                    }}></FaCamera>
                    <h4 className="upload_title">UPLOAD PROFILE PIC</h4>
                    <h5 className="upload_title_sub">crop to square for best results</h5>

                    <div>
                        <textarea className="bio" placeholder="your bio..." maxLength="100" spellCheck="false"></textarea>
                    </div>

                    <div>
                        <button className="save_profile">SAVE</button>
                    </div>
                     
         </div>
         </>
  );
}
export default Avatar;