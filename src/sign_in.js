import {visible} from "./visible.js";
import logo from "./logo.png";

import {
  FaTimes
} from "react-icons/fa";

export function Avatar() {

    return (
         <>
         <div id="sign_in_modal" className="modal">
             <div className="close_modal" onClick={(event) => {
                 event.preventDefault(); visible("sign_in");
                 document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 999999999999;
                 document.getElementsByClassName("hold_uploaded_img")[0].src = ""
                 document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none"
                 document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none"
                 }}>
                
                <FaTimes size="1.3em" className="avatar_close"/></div>

                 <div><img src={logo} alt="logo" className="logo"></img></div>
                <div><input className="sign_in_input input_1" id="" placeholder="email..." spellCheck="false" maxLength="100"></input></div>
                <div><input className="sign_in_input" id="" placeholder="password..." type="password" spellCheck="false" maxLength="100"></input></div>
                <div><h4 className="forgot_pass">forgot password?</h4></div>
                <div><button className="submit">SIGN IN</button></div>
                     
         </div>
         </>
  );
}
export default Avatar;