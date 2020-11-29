import {is_mobile} from "./mobile.js"

var viz_cnt = 0;
export function visible(type) {
    window.recent_img_upload_url = undefined
    viz_cnt++;
    if(type === "modal") {
        if((viz_cnt%2 === 0)) {
                document.getElementById("modal").style.display = "none";
                document.getElementsByClassName("add_message")[0].style.visibility = "visible";
                document.body.style.position = "relative";
                document.body.style.overflowY = "scroll";
        } else {
            document.getElementById("modal").style.display = "block";
            document.getElementById("textarea1").click()
            setTimeout(function() {
                document.getElementById("textarea1").focus()
            }, 300)
            document.getElementsByClassName("add_message")[0].style.visibility = "hidden";
            const mobile_check = is_mobile()
            if (mobile_check) {
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