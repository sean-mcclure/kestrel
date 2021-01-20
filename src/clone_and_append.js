import {is_mobile} from "./mobile.js";

export function clone_and_append(class_name, instance) {

    if(class_name === "hold_repost") {
        var target_instance = 1
    } else {
        var target_instance = 2
    }

    document.getElementsByClassName(class_name)[target_instance].innerHTML = "";

    var id = document.getElementsByClassName("msg_wrapper")[instance].id;
    
    var elem = document.getElementById(id);
    var clone = elem.cloneNode(true);

    clone.id = id + "_clone";
    clone.classList.add("msg_wrapper_clone");

    document.getElementsByClassName(class_name)[target_instance].append(clone);
    
    document.getElementsByClassName(class_name)[target_instance].style.position = "absolute";
    document.getElementsByClassName(class_name)[target_instance].style.top = "50%";
    document.getElementsByClassName(class_name)[target_instance].style.marginTop = "-40px";
    document.getElementsByClassName(class_name)[target_instance].style.paddingBottom = "30px";

    document.getElementsByClassName(class_name)[target_instance].style.background = "#F5F5F5";
    document.getElementsByClassName(class_name)[target_instance].style.width = "90%";
    document.getElementsByClassName(class_name)[target_instance].style.borderRadius = "4px";
    document.getElementsByClassName(class_name)[target_instance].style.marginLeft = "6px";
    document.getElementsByClassName("msg_wrapper_clone")[0].style.fontSize = "16px";
    document.getElementsByClassName("sidediv")[0].style.overflowY = "scroll";

    document.getElementsByClassName("msg_wrapper_clone")[0].children[3].style.width = "95%";
    document.getElementsByClassName("msg_wrapper_clone")[0].children[3].style.marginLeft = "0px";
    document.getElementsByClassName(class_name)[target_instance].style.boxShadow = "0px 2px 20px black";

    document.getElementsByClassName("msg_wrapper_clone")[0].children[4].style.display = "none";

    if(is_mobile()) {
        document.getElementsByClassName(class_name)[target_instance].style.marginTop = "-90px";
        document.getElementsByClassName(class_name)[target_instance].style.marginLeft = "35px";
        document.getElementsByClassName(class_name)[target_instance].style.paddingBottom = "100px";
        document.getElementsByClassName(class_name)[target_instance].style.width = "85%";
        document.getElementsByClassName("msg_wrapper_clone")[0].children[3].style.width = "98%";
    }

}