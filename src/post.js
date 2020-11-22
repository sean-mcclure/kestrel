import {list_of_messages} from "./Messages.js"
import {visible} from "./visible.js"
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

    if(document.getElementById("textarea").value !== "") {

    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });

    document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 999999999999;
    document.getElementsByClassName("hold_uploaded_img")[0].src = ""
    var videoElement = document.getElementById("hold_uploaded_video");
    videoElement.pause();
    videoElement.removeAttribute('src');
    videoElement.load();
    document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none"
    document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none"
    document.getElementsByClassName("upload_input")[0].value = ""
    document.getElementsByClassName("textarea")[0].style.marginBottom = "10px"

    var msg = document.getElementById("textarea").value
    var image_src = window.recent_img_upload_url
    
    var post_id = Math.round(Math.random()*10000000000000, 1)

    if(typeof(image_src) !== "undefined") {
        
        if(image_src.indexOf("video/mp4") === -1 && image_src.indexOf("video/quicktime") === -1) {

        list_of_messages.unshift(<div className="msg_wrapper" key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img"></img></div><div className="user">John Smith</div><div className="hold_msg">{msg}</div>
        <img className="msg_img" src={image_src} alt="kestrel_img"></img>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em"/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em"/></div>
                <div><FaThumbsUp className="icons_post" color="#3D3D3D" size="1.6em" onClick={like}/><span className="like_count">24</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )
        uploadFile(image_src)
        } else {
            alert(document.getElementById("hold_uploaded_video").duration)
            if(document.getElementById("hold_uploaded_video").duration > 30) {
                alert("video too long")
            }
            list_of_messages.unshift(<div className="msg_wrapper" key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img"></img></div><div className="user">John Smith</div><div className="hold_msg">{msg}</div>
        <video height="200px" playsinline controls id="hold_uploaded_video" className="hold_uploaded_video"><source type="video/mp4" src={image_src}></source></video>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em"/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em"/></div>
                <div><FaThumbsUp className="icons_post" color="#3D3D3D" size="1.6em" onClick={like}/><span className="like_count">24</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )
        uploadFile(image_src)
        }
    } else {
        list_of_messages.unshift(<div className="msg_wrapper" key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img"></img></div><div className="user">John Smith</div><div className="hold_msg">{msg}</div>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em"/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em"/></div>
                <div><FaThumbsUp className="icons_post" color="#3D3D3D" size="1.6em" onClick={like}/><span className="like_count">24</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )  
    }

    document.getElementById("textarea").value = "";
    document.getElementById("hold_uploaded_img").innerHTML = "";
    document.getElementsByClassName("textarea")[0].style.height = "150px"
    document.getElementsByClassName("show_count")[0].innerHTML = 280

    visible("modal")

    document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 99999999999999

  return (
         <>
         {list_of_messages}
         </>
  );

    } else {
        document.getElementById("textarea").classList.add("shake_it");
        setTimeout(function() {
        document.getElementById("textarea").classList.remove("shake_it");
        }, 1000)

    }

}

export default post;