import "./Close.css";

import {
    FaTimes
} from "react-icons/fa";

export function close_div() {
    
    var close_elems = document.getElementsByClassName("close");
    for(var j=0; j<close_elems.length;j++) {
        close_elems[j].style.display = "none";
    }

    document.getElementsByClassName("write")[0].style.display = "none";
    document.getElementsByClassName("avatar")[0].style.display = "none";
    document.getElementsByClassName("direct_messages")[0].style.display = "none";
    document.getElementsByClassName("search")[0].style.display = "none";
    document.getElementsByClassName("sign_in")[0].style.display = "none";
    document.getElementsByClassName("repost")[0].style.display = "none";
    document.getElementsByClassName("comment")[0].style.display = "none";

    setTimeout(function() {
        document.getElementsByClassName("sidediv")[0].style.width = "0px";
        document.getElementsByClassName("sidediv")[0].style.marginRight = "-30px";
        document.getElementsByClassName("sidediv")[0].style.transition = "0.15s ease-in";
    }, 0)

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