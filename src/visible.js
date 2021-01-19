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
        if(viz_cnt%2===0) {
            document.getElementsByClassName("avatar_modal")[0].style.width = "0px";
            document.getElementsByClassName("avatar_modal")[0].style.marginRight = "-30px";
            document.getElementsByClassName("avatar_modal")[0].style.transition = "0.15s ease-in";
            document.getElementsByClassName("avatar_close")[0].style.display = "none";
        } else {
        if(is_mobile()) {
            document.getElementsByClassName("avatar_modal")[0].style.width = "100%";
        } else {
            document.getElementsByClassName("avatar_modal")[0].style.width = "300px";
        }
        document.getElementsByClassName("avatar_close")[0].style.display = "block";
        document.getElementsByClassName("avatar_modal")[0].style.marginRight = "0px";
        document.getElementsByClassName("avatar_modal")[0].style.transition = "0.15s ease-in";
        
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
        if(viz_cnt%2===0) {
            document.getElementsByClassName("sign_in_modal")[0].style.width = "0px";
            document.getElementsByClassName("sign_in_modal")[0].style.marginRight = "-30px";
            document.getElementsByClassName("sign_in_modal")[0].style.transition = "0.15s ease-in";
            document.getElementsByClassName("sign_in_close")[0].style.display = "none";
        } else {
        if(is_mobile()) {
            document.getElementsByClassName("sign_in_modal")[0].style.width = "100%";
        } else {
            document.getElementsByClassName("sign_in_modal")[0].style.width = "300px";
        }
        document.getElementsByClassName("sign_in_close")[0].style.display = "block";
        document.getElementsByClassName("sign_in_modal")[0].style.marginRight = "0px";
        document.getElementsByClassName("sign_in_modal")[0].style.transition = "0.15s ease-in";
        
        }
    }

    if(type === "direct_message") {
        if(viz_cnt%2===0) {
            document.getElementById("dm_icon").style.visibility = "visible";
            document.getElementsByClassName("direct_messages")[0].style.width = "0px";
            document.getElementsByClassName("direct_messages")[0].style.marginRight = "-30px";
            document.getElementsByClassName("direct_messages")[0].style.transition = "0.2s ease-in";
            document.getElementsByClassName("tooltip")[2].style.visibility = "visible";
            var elems = document.getElementsByClassName("dir_msg_text");
            document.getElementsByClassName("direct_messages")[0].style.boxShadow = "none";
            for(var i=0; i<elems.length; i++) {
                elems[i].style.display = "none";
            }
        } else {
            document.getElementById("dm_icon").style.visibility = "hidden";
            if(is_mobile()) {
                document.getElementsByClassName("direct_messages")[0].style.width = "100%";
            } else {
                document.getElementsByClassName("direct_messages")[0].style.width = "300px";
            }
            document.getElementsByClassName("close_direct_messages")[0].style.display = "block";
            document.getElementsByClassName("direct_messages")[0].style.marginRight = "0px";
            document.getElementsByClassName("direct_messages")[0].style.transition = "0.2s ease-in";
            document.getElementsByClassName("tooltip")[2].style.visibility = "hidden";
            document.getElementsByClassName("direct_messages")[0].style.zIndex = "99999999";
            document.getElementsByClassName("direct_messages")[0].style.boxShadow = "2px 2px 40px #764545";
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
            document.getElementsByClassName("search")[0].style.width = "0px";
            document.getElementsByClassName("search")[0].style.marginRight = "-30px";
            document.getElementsByClassName("search")[0].style.transition = "0.2s ease-in";
            document.getElementsByClassName("search")[0].style.boxShadow = "none";
            document.getElementsByClassName("tooltip")[0].style.visibility = "visible";
        } else {
            document.getElementById("search_icon").style.visibility = "hidden";
            if(is_mobile()) {
                document.getElementsByClassName("search")[0].style.width = "100%";
            } else {
                document.getElementsByClassName("search")[0].style.width = "300px";
            }
            document.getElementsByClassName("close_search")[0].style.display = "block";
            document.getElementsByClassName("search")[0].style.marginRight = "0px";
            document.getElementsByClassName("search")[0].style.transition = "0.2s ease-in";
            document.getElementsByClassName("tooltip")[0].style.visibility = "hidden";
            document.getElementsByClassName("search")[0].style.zIndex = "99999999";
            document.getElementsByClassName("search")[0].style.boxShadow = "2px 2px 40px #764545";
        }
    }

    if(type === "write") {
        if(viz_cnt%2===0) {
            document.getElementsByClassName("write")[0].style.width = "0px";
            document.getElementsByClassName("write")[0].style.marginRight = "-30px";
            document.getElementsByClassName("write")[0].style.transition = "0.15s ease-in";
            document.getElementsByClassName("write")[0].style.overflowY = "hidden";
        } else {
        if(is_mobile()) {
            document.getElementsByClassName("write")[0].style.width = "100%";
        } else {
            document.getElementsByClassName("write")[0].style.width = "300px";
        }
        document.getElementsByClassName("write")[0].style.marginRight = "0px";
        document.getElementsByClassName("write")[0].style.transition = "0.15s ease-in";
        document.getElementsByClassName("close_write")[0].style.display = "block";
        setTimeout(function(){
            document.getElementsByClassName("write_textarea")[0].focus();
        }, 400)
        
        }
    }

     if(type === "repost") {
        if(viz_cnt%2===0) {
            document.getElementsByClassName("repost")[0].style.width = "0px";
            document.getElementsByClassName("repost")[0].style.transition = "0.15s ease-in";
            document.getElementsByClassName("repost")[0].style.overflowY = "hidden";
        } else {
        if(is_mobile()) {
            document.getElementsByClassName("repost")[0].style.width = "100vw";
            document.getElementsByClassName("repost_item")[0].style.width = "100vw";
            document.getElementsByClassName("repost_item")[1].style.width = "100px";
        } else {
            document.getElementsByClassName("repost")[0].style.marginBottom = "70px";
            document.getElementsByClassName("repost")[0].style.width = "50vw";
            document.getElementsByClassName("repost_item")[0].style.width = "105vw";
            document.getElementsByClassName("repost_item")[0].style.marginRight = "10px";
            document.getElementsByClassName("repost_item")[1].style.width = "50px";
            document.getElementsByClassName("repost_item")[1].style.width = "100px";
            document.getElementsByClassName("repost_item")[1].style.marginTop = "-4px";
            document.getElementsByClassName("repost_item")[1].style.marginBottom = "20px";
        }
        document.getElementsByClassName("repost_item")[0].style.display = "block";
            document.getElementsByClassName("repost_item")[1].style.display = "block";
        document.getElementsByClassName("repost")[0].style.marginRight = "0px";
        document.getElementsByClassName("repost")[0].style.transition = "0.15s ease-in";       
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