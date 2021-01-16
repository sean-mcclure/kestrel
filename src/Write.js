import "./Write.css";
import Poll from "./Poll";
import RePost from "./RePost";

import {character_counter} from "./counter.js";
import {post} from "./post.js";
import {visible} from "./visible.js"

import {
  FaTimes,
  FaCameraRetro,
  FaPoll
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

        <div className="write">

        <FaTimes className="close_side_div" onClick={(event) => {
             event.preventDefault(); 
             visible("write");
        }}/>

        <img id="hold_uploaded_img" className="hold_uploaded_img" alt="uploaded_img_preview" style={img_styles}></img>
        <video height="200px" playsInline controls id="hold_uploaded_video" className="hold_uploaded_video" style={img_styles}><source type="video/mp4"></source></video>
        <input id="upload_input" className="upload_input" type="file" style={input_styles}></input>        
            

            
            <Poll/>
 
             
             <div className="write_options_wrapper">
                 <div className="write_options_item">
                    <textarea id="write_textarea" className="textarea write_textarea" onChange={character_counter} maxLength="280"></textarea>
                </div>
                <div className="write_options_item">
                    <FaCameraRetro className="upload_image" size="2em" color="gold" onClick={(e) => {

                    }}/>
                </div>
                <div className="write_options_item">
                    <FaPoll className="poll" size="2em" color="gold" onClick={(event) => {
                         event.preventDefault();
                         visible("poll");
                     }}/>
                </div>
                <div className="write_options_item">
                    <div className="post" onClick={post}>POST</div>
                </div>
                <div className="write_options_item repost_toggle"><RePost/></div>
             </div>
             </div>
    );
  }
}

export default Write;