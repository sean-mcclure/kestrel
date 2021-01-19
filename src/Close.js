import "./Close.css";

import {
    FaTimes
} from "react-icons/fa";

export function close_div() {
    document.getElementsByClassName("sidediv")[0].style.width = "0px";
    document.getElementsByClassName("sidediv")[0].style.marginRight = "-30px";
    document.getElementsByClassName("sidediv")[0].style.transition = "0.15s ease-in";
    var close_elems = document.getElementsByClassName("close");
    for(var j=0; j<close_elems.length;j++) {
        close_elems[j].style.display = "none";
    }
}

function Close() {
    return(
        <FaTimes className="close" onClick={(event) => {
            event.preventDefault();
            close_div()
        }}/>
    )
}

export default Close;