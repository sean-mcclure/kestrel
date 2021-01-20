import "./Avatar.css";

import Close from "./Close";
import UploadImage from "./UploadImage";

import {
  FaCamera
} from "react-icons/fa";

export function Avatar() {
    return (
         <>
         <Close/>
         <div className="avatar_wrapper">
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