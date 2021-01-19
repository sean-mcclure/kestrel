import "./Close.css";

import {is_mobile} from "./mobile.js";
import {which_open} from "./which_open.js";

import {
    FaTimes
} from "react-icons/fa";

export function close_div(class_name) {
    document.getElementsByClassName(class_name)[0].style.width = "0px";
    document.getElementsByClassName(class_name)[0].style.marginRight = "-30px";
    document.getElementsByClassName(class_name)[0].style.transition = "0.15s ease-in";
}

function Close() {
    return(
        <FaTimes className="close" onClick={(event) => {
            event.preventDefault();
            var open_class = which_open();
            close_div(open_class)
        }}/>
    )
}

export default Close;