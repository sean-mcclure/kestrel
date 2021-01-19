import {
    is_mobile
} from "./mobile.js"
var viz_cnt = 0;
export function visible(type) {
    window.recent_img_upload_url = undefined
    viz_cnt++;
    if ((viz_cnt % 2 === 0)) {
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
    if (type === "avatar_icon") {
        if ((viz_cnt % 2 === 0)) {
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
    if (type === "repost") {
        if (viz_cnt % 2 === 0) {
            document.getElementsByClassName("repost")[0].style.width = "0vw";
            document.getElementsByClassName("repost")[0].style.transition = "0.15s ease-in";
        } else {
            if (is_mobile()) {
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
    if (type === "poll") {
        if (viz_cnt % 2 === 0) {
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