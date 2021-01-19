import "./SideDiv.css";

import Write from "./Write";
import Avatar from "./Avatar";
import DirectMessages from "./DirectMessages";
import Search from "./Search";
import SignIn from "./SignIn";

import {is_mobile} from "./mobile.js";

export function open_div(class_name) {
    if (is_mobile()) {
        document.getElementsByClassName("sidediv")[0].style.width = "100%";
    } else {
        document.getElementsByClassName("sidediv")[0].style.width = "300px";
    }

    document.getElementsByClassName("sidediv")[0].style.marginRight = "0px";
    document.getElementsByClassName("sidediv")[0].style.transition = "0.15s ease-in";

    document.getElementsByClassName("write")[0].style.display = "none";
    document.getElementsByClassName("avatar")[0].style.display = "none";
    document.getElementsByClassName("direct_messages")[0].style.display = "none";
    document.getElementsByClassName("search")[0].style.display = "none";
    document.getElementsByClassName("sign_in")[0].style.display = "none";
    document.getElementsByClassName("repost")[0].style.display = "none";

    document.getElementsByClassName(class_name)[0].style.display = "block";
    document.getElementsByClassName(class_name)[0].style.width = "100%";

    if(class_name === "repost") {
        document.getElementsByClassName("write_textarea")[1].style.height = "80px";
        document.getElementsByClassName("write_textarea")[1].style.width = "85%";
        document.getElementsByClassName("write_textarea")[1].placeholder = "say something...";
        document.getElementsByClassName("post")[1].innerHTML = "REPOST";
    }

    document.getElementsByClassName("show_count")[0].innerHTML = 280;
    document.getElementsByClassName("show_count")[1].innerHTML = 280;

    var close_elems = document.getElementsByClassName("close");
    for(var j=0; j<close_elems.length;j++) {
        close_elems[j].style.display = "block";
    }
}

function SideDiv() {
    return(
        <div className="sidediv">
            <div className="write">
                <Write/>
            </div>
            <div className="avatar">
                <Avatar/>
            </div>
            <div className="direct_messages">
                <DirectMessages/>
            </div>
            <div className="search">
                <Search/>
            </div>
            <div className="sign_in">
                <SignIn/>
            </div>
            <div className="repost">
                <Write/>
            </div>
        </div>
    )
}

export default SideDiv;