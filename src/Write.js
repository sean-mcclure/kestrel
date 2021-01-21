import "./Write.css";
import Poll from "./Poll";
import Close from "./Close";

import {character_counter} from "./counter.js";
import {post} from "./post.js";
import {visible} from "./visible.js"
import {clone_and_append} from "./clone_and_append.js"

import {
  FaTimes,
  FaCameraRetro,
  FaPoll,
  FaPlus
} from "react-icons/fa";

const React = require('react')

function validate_file_size(file, max_allowable_in_mb) {
    var FileSize = file.files[0].size / 1024 / 1024;
    if (FileSize > max_allowable_in_mb) {
        return("not allowed")
    } else {
        return("allowed")
    }
}

    const input_styles = {
        display : "none"
    }

    const img_styles = {
        width : "40%",
        display : "none",
        margin : "0 auto"
    }

    var camera_cnt = 0;


class Write extends React.Component {

render() {
    return (
        <>
        <Close/>
        <img id="hold_uploaded_img" className="hold_uploaded_img" alt="uploaded_img_preview" style={img_styles}></img>
        <video height="200px" playsInline controls id="hold_uploaded_video" className="hold_uploaded_video" style={img_styles}><source type="video/mp4"></source></video>
        <input id="upload_input" className="upload_input" type="file" style={input_styles}></input>        
        
        <Poll/>

        <div className="hold_comment"></div>

        <div className="write_options_wrapper">

            <div className="write_options_item">
                <div className="show_count">280</div>
                <textarea id="write_textarea" className="textarea write_textarea" onChange={(event) => {character_counter("show_count", event)}} maxLength="280"></textarea>
            </div>

            <div className="write_options_item">
                <FaCameraRetro className="upload_image" size="1.7em" color="gold" onClick={(e) => {}}/>
            </div>

            <div className="write_options_item">
                <FaPoll className="poll" size="1.7em" color="gold" onClick={(event) => {
                        event.preventDefault();
                        visible("poll");
                }}/>
            </div>

            <div className="write_options_item">
                <div className="post" onClick={post}>POST</div>
            </div>

            <div>
                <div className="make_thread" onClick={(event) => {
                    event.preventDefault();
                   var thread_area = document.createElement("textarea");
                   thread_area.style.width = "85%";
                   thread_area.style.height = "100px";
                   thread_area.style.margin = "0 auto";
                   thread_area.style.marginTop = "10px";
                   thread_area.style.background = "#4F4434";
                   thread_area.style.border = "2px solid goldenrod";
                   thread_area.style.outline = "none";
                   thread_area.style.resize = "none";
                   document.getElementsByClassName("write_options_item")[0].append(thread_area);
                   document.getElementsByClassName("sidediv")[0].style.overflowY = "scroll";
                   
                }}><FaPlus/></div>
            </div>

            <div className="hold_repost"></div>

            <div className="hold_thread"></div>
        
        </div>

        </>
    )
  }
}

export default Write;