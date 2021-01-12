import {is_mobile} from "./mobile.js"

var viz_cnt = 0;
export function visible(type) {
    window.recent_img_upload_url = undefined
    viz_cnt++;

    if((viz_cnt%2 === 0)) {
        document.getElementsByClassName("add_message")[0].style.visibility = "visible";
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
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
            document.getElementById("profile_icon").style.visibility = "visible";
        } else {
            document.getElementById("avatar_modal").style.display = "block";
            document.getElementById("profile_icon").style.visibility = "hidden";
        }
    }

    if(type === "sign_in") {
        if((viz_cnt%2 === 0)) {
            document.getElementById("sign_in_modal").style.display = "none";
        } else {
            document.getElementById("sign_in_modal").style.display = "block";
        }
    }

    if(type === "direct_message") {
        if(viz_cnt%2===0) {
            document.getElementById("dm_icon").style.visibility = "visible";
            document.getElementsByClassName("side_div")[0].style.width = "0px";
            document.getElementsByClassName("side_div")[0].style.marginRight = "-30px";
            document.getElementsByClassName("side_div")[0].style.transition = "0.2s ease-in";
            var elems = document.getElementsByClassName("dir_msg_text");
            for(var i=0; i<elems.length; i++) {
                elems[i].style.display = "none";
            }
        } else {
            document.getElementById("dm_icon").style.visibility = "hidden";
            document.getElementsByClassName("side_div")[0].style.width = "300px";
            document.getElementsByClassName("side_div")[0].style.marginRight = "0px";
            document.getElementsByClassName("side_div")[0].style.transition = "0.2s ease-in";
            document.getElementsByClassName("side_div")[0].style.zIndex = "99999999";
            var elems_b = document.getElementsByClassName("dir_msg_text");
            setTimeout(function() {
                for(var j=0; j<elems_b.length; j++) {
                    elems_b[j].style.display = "block";
                }
            }, 500)
        }
    }

}