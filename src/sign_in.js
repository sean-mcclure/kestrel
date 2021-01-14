import {visible} from "./visible.js";
import logo from "./logo.png";

import {new_user} from "./SignRegister";

import {
  FaTimes
} from "react-icons/fa";

export function Avatar() {

    return (
         <>
         <div id="sign_in_modal" className="modal">
             <div className="close_modal" onClick={(event) => {
                 event.preventDefault(); visible("sign_in");
                 document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 9999;
                 document.getElementsByClassName("hold_uploaded_img")[0].src = ""
                 document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none"
                 document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none"
                 }}>
                
                <FaTimes size="1.3em" className="avatar_close"/></div>

                 <div><img src={logo} alt="logo" className="logo"></img></div>
  
                 <div className="sign_in_up_wrapper">
                     <button id="sign_in" className="submit_options" onClick={(event) => {
                        document.getElementsByClassName("forgot_pass")[0].style.display = "block";
                        document.getElementById("repeat_pass").remove();
                        document.getElementById("sign_in").style.background = "gold";
                        document.getElementById("sign_up").style.background = "grey";
                        document.getElementById("sign_in").style.pointerEvents = "none";
                        document.getElementById("sign_up").style.pointerEvents = "auto";
                        document.getElementsByClassName("sign_in_input")[0].focus();
                        }}>SIGN IN</button>
                    <button id="sign_up" className="submit_options" onClick={(event) => {
                        document.getElementsByClassName("forgot_pass")[0].style.display = "none";
                        document.getElementById("hold_inputs").innerHTML += "<div><input id='repeat_pass' className='sign_in_input' placeholder='confirm password...' type='password' spellCheck='false' maxLength='100'></input></div>"
                        document.getElementById("repeat_pass").classList.add("sign_in_input");
                        document.getElementById("sign_in").style.background = "grey";
                        document.getElementById("sign_up").style.background = "gold";
                        document.getElementById("sign_up").style.color = "#141414";
                        document.getElementById("sign_in").style.pointerEvents = "auto";
                        document.getElementById("sign_up").style.pointerEvents = "none";
                        document.getElementsByClassName("sign_in_input")[0].focus();
                        }}>SIGN UP</button>
                </div>

                <div id="hold_inputs">
                    <div><input className="sign_in_input input_1" placeholder="email..." spellCheck="false" maxLength="100"></input></div>
                    <div><input className="sign_in_input" placeholder="password..." type="password" spellCheck="false" maxLength="100"></input></div>
                    <div><h4 className="forgot_pass">forgot password?</h4></div>
                </div>
                
                <div>
                    <button id="submit" className="submit" onClick={(event) => {
                        if(document.getElementsByClassName("sign_in_input")[0].value !== "" && document.getElementsByClassName("sign_in_input")[1].value !== "") {
                            if(document.getElementsByClassName("sign_in_input")[0].value.indexOf("@") === -1) {
                                alert("not an email")
                            } else {
                                document.getElementById("submit").style.pointerEvents = "none";
                                var email = document.getElementsByClassName("sign_in_input")[0].value;
                                var password = document.getElementsByClassName("sign_in_input")[1].value;
                                new_user(email, password)
                            }
                        } else {
                            alert("fill in all fields")
                        }
                    }}>SUBMIT</button>
                </div>
                     
         </div>
         </>
  );
}
export default Avatar;