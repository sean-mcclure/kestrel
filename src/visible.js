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
            document.getElementsByClassName("tooltip")[3].style.visibility = "visible";
        } else {
            document.getElementById("avatar_modal").style.display = "block";
            document.getElementById("profile_icon").style.visibility = "hidden";
            document.getElementsByClassName("tooltip")[3].style.visibility = "hidden";
        }
    }

    if(type === "avatar_icon") {
        if((viz_cnt%2 === 0)) {
            document.getElementById("avatar_modal").style.display = "none";
        } else {
            document.getElementById("avatar_modal").style.display = "block";
            document.getElementsByClassName("camera_icon")[0].style.display = "none";
            document.getElementsByClassName("upload_title")[0].style.display = "none";
            document.getElementsByClassName("upload_title_sub")[0].style.display = "none";
            document.getElementsByClassName("follow_block_wrapper")[0].style.display = "block";
            document.getElementsByClassName("bio")[0].style.pointerEvents = "none";
            document.getElementsByClassName("save_profile")[0].style.display = "none";
        }
    }

    if(type === "sign_in") {
        if((viz_cnt%2 === 0)) {
            document.getElementById("sign_in_modal").style.display = "none";
        } else {
            document.getElementById("sign_in_modal").style.display = "block";
            document.getElementsByClassName("sign_in_input")[0].focus();
        }
    }

    if(type === "direct_message") {
        if(viz_cnt%2===0) {
            document.getElementById("dm_icon").style.visibility = "visible";
            document.getElementsByClassName("side_div")[0].style.width = "0px";
            document.getElementsByClassName("side_div")[0].style.marginRight = "-30px";
            document.getElementsByClassName("side_div")[0].style.transition = "0.2s ease-in";
            document.getElementsByClassName("tooltip")[2].style.visibility = "visible";
            var elems = document.getElementsByClassName("dir_msg_text");
            document.getElementsByClassName("side_div")[0].style.boxShadow = "none";
            for(var i=0; i<elems.length; i++) {
                elems[i].style.display = "none";
            }
        } else {
            document.getElementById("dm_icon").style.visibility = "hidden";
            if(is_mobile()) {
                document.getElementsByClassName("side_div")[0].style.width = "100%";
            } else {
                document.getElementsByClassName("side_div")[0].style.width = "300px";
            }
            document.getElementsByClassName("side_div")[0].style.marginRight = "0px";
            document.getElementsByClassName("side_div")[0].style.transition = "0.2s ease-in";
            document.getElementsByClassName("tooltip")[2].style.visibility = "hidden";
            document.getElementsByClassName("side_div")[0].style.zIndex = "99999999";
            document.getElementsByClassName("side_div")[0].style.boxShadow = "2px 2px 40px #764545";
            var elems_b = document.getElementsByClassName("dir_msg_text");
            setTimeout(function() {
                for(var j=0; j<elems_b.length; j++) {
                    elems_b[j].style.display = "block";
                }
            }, 500)
        }
    }

    if(type === "search") {
        if(viz_cnt%2===0) {
            document.getElementById("search_icon").style.visibility = "visible";
            document.getElementsByClassName("side_div")[1].style.width = "0px";
            document.getElementsByClassName("side_div")[1].style.marginRight = "-30px";
            document.getElementsByClassName("side_div")[1].style.transition = "0.2s ease-in";
            document.getElementsByClassName("side_div")[1].style.boxShadow = "none";
            document.getElementsByClassName("tooltip")[1].style.visibility = "visible";
        } else {
            document.getElementById("search_icon").style.visibility = "hidden";
            if(is_mobile()) {
                document.getElementsByClassName("side_div")[1].style.width = "100%";
            } else {
                document.getElementsByClassName("side_div")[1].style.width = "300px";
            }
            document.getElementsByClassName("side_div")[1].style.marginRight = "0px";
            document.getElementsByClassName("side_div")[1].style.transition = "0.2s ease-in";
            document.getElementsByClassName("tooltip")[1].style.visibility = "hidden";
            document.getElementsByClassName("side_div")[1].style.zIndex = "99999999";
            document.getElementsByClassName("side_div")[1].style.boxShadow = "2px 2px 40px #764545";
        }
    }

    if(type === "write") {
        if(viz_cnt%2===0) {
            document.getElementsByClassName("write")[0].style.width = "0px";
            document.getElementsByClassName("write")[0].style.marginRight = "-30px";
            document.getElementsByClassName("write")[0].style.transition = "0.2s ease-in";
            document.getElementsByClassName("write")[0].style.boxShadow = "none";
        } else {
        if(is_mobile()) {
            document.getElementsByClassName("write")[0].style.width = "100%";
        } else {
            document.getElementsByClassName("write")[0].style.width = "300px";
        }
        document.getElementsByClassName("write")[0].style.marginRight = "0px";
        document.getElementsByClassName("write")[0].style.transition = "0.2s ease-in";
        }
    }

    if(type === "poll") {
        if(viz_cnt%2===0) {
            document.getElementsByClassName("close_modal")[0].style.display = "none";
            document.getElementById("textarea_wrapper").style.display = "none";
            document.getElementById("poll_wrapper").style.display = "block";
            document.getElementsByClassName("show_count")[0].style.display = "none";
            document.getElementsByClassName("upload_image")[0].style.pointerEvents = "none";
            document.getElementsByClassName("upload_image")[0].style.opacity = "0.5";
            document.getElementsByClassName("thread")[0].style.pointerEvents = "none";
            document.getElementsByClassName("thread")[0].style.opacity = "0.5";
            
        } else {
            document.getElementsByClassName("close_modal")[0].style.display = "block";
            document.getElementById("textarea_wrapper").style.display = "block";
            document.getElementById("poll_wrapper").style.display = "none";
            document.getElementsByClassName("show_count")[0].style.display = "block";
            document.getElementsByClassName("upload_image")[0].style.pointerEvents = "auto";
            document.getElementsByClassName("upload_image")[0].style.opacity = "1";
            document.getElementsByClassName("thread")[0].style.pointerEvents = "auto";
            document.getElementsByClassName("thread")[0].style.opacity = "1";
        }
    }

}