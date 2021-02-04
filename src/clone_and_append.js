import {
    is_mobile
} from "./mobile.js";

export function clone_and_append(from_id, to_class_name, to_instance) {




    if (to_class_name === "hold_repost") {
        var to_instance = 1
    }
    if (to_class_name === "hold_comment") {
        var to_instance = 2
    }
    if (to_class_name === "hold_thread") {
        var to_instance = 0
    }
    document.getElementsByClassName(to_class_name)[to_instance].innerHTML = "";
<<<<<<< HEAD

    if(!from_id.toString().includes("msg_wrapper")) {
        from_id = "msg_wrapper_" + from_id;
    }

=======
    if(!from_id.toString().includes("msg_wrapper_")) {
        var from_id = "msg_wrapper_" + from_id
    }
>>>>>>> 35c1cf8b86c7158222a3e517b8073497187425b4
    var elem = document.getElementById(from_id);
    
    var clone = elem.cloneNode(true);
    clone.id = from_id + "_clone";
    clone.classList.add("clone");
    document.getElementsByClassName(to_class_name)[to_instance].append(clone);
    if (to_class_name !== "hold_thread") {
        document.getElementsByClassName(to_class_name)[to_instance].style.position = "absolute";
        document.getElementsByClassName(to_class_name)[to_instance].style.top = "50%";
        document.getElementsByClassName(to_class_name)[to_instance].style.marginTop = "-40px";
        document.getElementsByClassName(to_class_name)[to_instance].style.paddingBottom = "30px";
        document.getElementsByClassName(to_class_name)[to_instance].style.background = "#F5F5F5";
        document.getElementsByClassName(to_class_name)[to_instance].style.width = "90%";
        document.getElementsByClassName(to_class_name)[to_instance].style.borderRadius = "4px";
        document.getElementsByClassName(to_class_name)[to_instance].style.marginLeft = "6px";
        document.getElementsByClassName("clone")[0].style.fontSize = "16px";
        document.getElementsByClassName("sidediv")[0].style.overflowY = "scroll";
        document.getElementsByClassName("clone")[0].children[3].style.width = "95%";
        document.getElementsByClassName("clone")[0].children[3].style.marginLeft = "0px";
        document.getElementsByClassName(to_class_name)[to_instance].style.boxShadow = "0px 2px 20px black";
        var all_clones = document.getElementsByClassName("clone");
        for(var c=0; c<all_clones.length; c++) {
            all_clones[c].children[4].style.display = "none"
        }
        if (typeof(document.getElementsByClassName("clone")[0].children[4]) !== "undefined") {
            document.getElementsByClassName("clone")[0].children[4].style.display = "none";
        }
    }
    if (is_mobile()) {
        document.getElementsByClassName(to_class_name)[to_instance].style.marginTop = "-90px";
        document.getElementsByClassName(to_class_name)[to_instance].style.marginLeft = "35px";
        document.getElementsByClassName(to_class_name)[to_instance].style.paddingBottom = "100px";
        document.getElementsByClassName(to_class_name)[to_instance].style.width = "85%";
        if (to_class_name !== "hold_thread") {
            document.getElementsByClassName("clone")[0].children[3].style.width = "98%";
        }
    }
        window.repost = true;
        window.repost_id = from_id + "_clone";
}