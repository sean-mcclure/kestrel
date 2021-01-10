import {is_mobile} from "./mobile.js"

var viz_cnt = 0;
export function visible(type) {
    window.recent_img_upload_url = undefined
    viz_cnt++;

    if((viz_cnt%2 === 0)) {
        document.getElementsByClassName("add_message")[0].style.visibility = "visible";
        document.body.style.position = "relative";
        document.body.style.overflowY = "scroll";
    } else {
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
   
    if(type === "modal") {
        if((viz_cnt%2 === 0)) {
            document.getElementById("modal").style.display = "none";
        } else {
            document.getElementById("modal").style.display = "block";
            document.getElementById("textarea1").click()
            setTimeout(function() {
                document.getElementById("textarea1").focus()
            }, 300)
            document.getElementsByClassName("add_message")[0].style.visibility = "hidden";
        }
    }

    if(type === "avatar") {
        if((viz_cnt%2 === 0)) {
            document.getElementById("avatar_modal").style.display = "none";
        } else {
            document.getElementById("avatar_modal").style.display = "block";
        }
    }

    if(type === "sign_in") {
        if((viz_cnt%2 === 0)) {
            document.getElementById("sign_in_modal").style.display = "none";
        } else {
            document.getElementById("sign_in_modal").style.display = "block";
        }
    }

}