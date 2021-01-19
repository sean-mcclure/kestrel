import "./SideDiv.css";

import Write from "./Write";
import Avatar from "./Avatar";

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

    document.getElementsByClassName(class_name)[0].style.display = "block";
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
        </div>
    )
}

export default SideDiv;