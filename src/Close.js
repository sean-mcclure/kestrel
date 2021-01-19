import "./Close.css";

import {
    FaTimes
} from "react-icons/fa";

export function close_div() {
    document.getElementsByClassName("sidediv")[0].style.width = "0px";
    document.getElementsByClassName("sidediv")[0].style.marginRight = "-30px";
    document.getElementsByClassName("sidediv")[0].style.transition = "0.15s ease-in";
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