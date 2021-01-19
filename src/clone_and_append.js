import {is_mobile} from "./mobile.js";

export function clone_and_append(instance) {

    document.getElementsByClassName("hold_repost")[1].innerHTML = "";

    var id = document.getElementsByClassName("msg_wrapper")[instance].id;
    
    var elem = document.getElementById(id);
    var clone = elem.cloneNode(true);

    clone.id = id + "_clone";
    clone.classList.add("msg_wrapper_clone");

    document.getElementsByClassName("hold_repost")[1].append(clone);

    document.getElementsByClassName("hold_repost")[1].style.position = "absolute";
    document.getElementsByClassName("hold_repost")[1].style.top = "50%";
    document.getElementsByClassName("hold_repost")[1].style.marginTop = "-40px";
     document.getElementsByClassName("hold_repost")[1].style.paddingBottom = "30px";
    document.getElementsByClassName("hold_repost")[1].style.background = "#F5F5F5";
    document.getElementsByClassName("hold_repost")[1].style.width = "90%";
    document.getElementsByClassName("hold_repost")[1].style.borderRadius = "4px";
    document.getElementsByClassName("hold_repost")[1].style.marginLeft = "6px";
    document.getElementsByClassName("msg_wrapper_clone")[0].style.fontSize = "16px";
    document.getElementsByClassName("sidediv")[0].style.overflowY = "scroll";

    document.getElementsByClassName("msg_wrapper_clone")[0].children[3].style.width = "95%";
    document.getElementsByClassName("msg_wrapper_clone")[0].children[3].style.marginLeft = "0px";
    document.getElementsByClassName("hold_repost")[1].style.boxShadow = "0px 2px 20px black";

    document.getElementsByClassName("msg_wrapper_clone")[0].children[4].style.display = "none";

    if(is_mobile()) {
        document.getElementsByClassName("hold_repost")[1].style.marginTop = "-90px";
        document.getElementsByClassName("hold_repost")[1].style.marginLeft = "35px";
        document.getElementsByClassName("hold_repost")[1].style.paddingBottom = "100px";
        document.getElementsByClassName("hold_repost")[1].style.width = "85%";
        document.getElementsByClassName("msg_wrapper_clone")[0].children[3].style.width = "98%";
    }


}