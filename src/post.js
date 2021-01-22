import {list_of_messages} from "./Messages.js"
import {close_div} from "./Close";
import {like} from "./like.js";
import avatar from "./avatar.png";
import {uploadFile} from "./upload_image.js"

import {
  FaComment,
  FaRetweet,
  FaThumbsUp,
  FaInfinity
} from "react-icons/fa";

export function post() {

    if(document.getElementById("write_textarea").value !== "") {

    close_div();

    setTimeout(function() {
        document.getElementsByClassName("col")[0].scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, 1000)
    
    document.getElementsByClassName("hold_uploaded_img")[0].src = ""
    var videoElement = document.getElementById("hold_uploaded_video");
    videoElement.pause();
    videoElement.removeAttribute('src');
    videoElement.load();
    document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none"
    document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none"
    document.getElementsByClassName("upload_input")[0].value = ""

    var msg = document.getElementById("write_textarea").value

    var threads = document.getElementsByClassName("thread_textarea");
    var all_threads = [];
    for(var t=0; t<threads.length; t++) {
        all_threads.push(threads[t].value)
    }

    all_threads.unshift(msg)

    var image_src = window.recent_img_upload_url
    
    var post_id = Math.round(Math.random()*10000000000000, 1)
    var like_id = Math.round(Math.random()*10000000000000, 1)

    if(typeof(image_src) !== "undefined") {
        
        if(image_src.indexOf("video/mp4") === -1 && image_src.indexOf("video/quicktime") === -1) {

        list_of_messages.unshift(<div className="msg_wrapper" key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img"></img></div><div className="user">John Smith</div><div className="hold_msg">{all_threads}</div>
        <img className="msg_img" src={image_src} alt="kestrel_img"></img>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em"/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em"/></div>
                <div><FaThumbsUp id={like_id} className="like_icons" color="#3D3D3D" size="1.6em" onClick={like}/><span className="like_count">0</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )
        uploadFile(image_src)
        } else {
            if(document.getElementById("hold_uploaded_video").duration > 30) {
                alert("video too long")
            }
            list_of_messages.unshift(<div className="msg_wrapper" key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img"></img></div><div className="user">John Smith</div><div className="hold_msg">{all_threads}</div>
        <video height="200px" playsinline controls id="hold_uploaded_video" className="hold_uploaded_video"><source type="video/mp4" src={image_src}></source></video>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em"/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em"/></div>
                <div><FaThumbsUp id={like_id} className="like_icons" color="#3D3D3D" size="1.6em" onClick={like}/><span className="like_count">0</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )
        uploadFile(image_src)
        }
    } else {
        list_of_messages.unshift(<div className="msg_wrapper" key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img"></img></div><div className="user">John Smith</div><div className="hold_msg">{all_threads}</div>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em"/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em"/></div>
                <div><FaThumbsUp id={like_id} className="like_icons" color="#3D3D3D" size="1.6em" onClick={like}/><span className="like_count">0</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )  
    }

    var areas = document.querySelectorAll('textarea');
    [].forEach.call(areas, function(area) {
        area.value = "";
    });
    document.getElementById("hold_uploaded_img").innerHTML = "";

  return (
         <>
         {list_of_messages}
         </>
  );

    } else {
        var areas_b = document.querySelectorAll('textarea');
        [].forEach.call(areas_b, function(area) {
                area.classList.add("shake_it");
                area.style.border = "2px solid red";
            setTimeout(function() {
                area.classList.remove("shake_it");
                area.style.border = "0px solid red";
        }, 1000)
        });

    }

}

export default post;