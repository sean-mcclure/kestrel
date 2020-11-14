import {is_mobile} from "./mobile.js"

var viz_cnt = 0;
export function visible(type) {
    viz_cnt++;
    if(type === "modal") {
        if((viz_cnt%2 === 0)) {
            document.getElementById("modal").style.display = "none";
        } else {
            document.getElementById("modal").style.display = "block";
            document.getElementById("textarea").focus();
            const check = is_mobile()
            console.log(check)
            if (check) {
                document.body.style.position = "fixed";
                document.body.style.overflowY = "hidden";
                document.getElementsByClassName("flex-grid")[0].style.background = "";
                document.body.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                });
            }
        }
    }
}