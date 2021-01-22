import {get_instance} from "./utility.js";

export function character_counter(e) {

    var id = e.target.id;

    var class_name = document.getElementById(id).className;

    var cnt = 280 - Number(e.target.value.length)

    document.getElementById(id).previousElementSibling.innerHTML = cnt;

    if (cnt > 50 && cnt <= 280) {
        document.getElementById(id).previousElementSibling.style.color = "whitesmoke";
    } else if (cnt > 0 && cnt <= 50) {
        document.getElementById(id).previousElementSibling.style.color = "yellow";
    } else {
        document.getElementById(id).previousElementSibling.style.color = "red";
        document.getElementById(id).previousElementSibling.classList.add("rubberBand_it");
    }
}