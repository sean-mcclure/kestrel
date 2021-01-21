import {get_instance} from "./utility.js";

export function character_counter(e) {

    var id = e.target.id;

    var class_name = document.getElementById(id).className;

    if(class_name === "textarea write_textarea") {
        var instance = 0;
    } else {
        var instance = get_instance(id);
    }

    const cnt = 280 - Number(e.target.value.length)
    
    document.getElementsByClassName("show_count")[instance].innerHTML = cnt;
    
    if (cnt > 50 && cnt <= 280) {
        document.getElementsByClassName("show_count")[instance].style.color = "whitesmoke";
    } else if (cnt > 0 && cnt <= 50) {
        document.getElementsByClassName("show_count")[instance].style.color = "yellow";
    } else {
       document.getElementsByClassName("show_count")[instance].style.color = "red";
       document.getElementsByClassName("show_count")[instance].classList.add("rubberBand_it");
    }
}