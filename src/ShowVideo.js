

import "./ShowVideo.css";

import { useState } from 'react';

import ReactHtmlParser from 'react-html-parser';

export function determine_img_format() {
    var res = "";
    if(typeof(window.recent_img_video_url) !== "undefined") {
    if(window.recent_img_video_url.includes("image")) {
        res = "<img src={window.recent_img_video_url}></img>"
    } else {
        res = "<video src={window.recent_img_video_url}></video>"
    }
    }
    return(res)
}

function ShowVideo() {

    const [books, updateBooks] = useState([]);
   
    const handleClick = () => {
        updateBooks([...books, { name: 'A new Book', id: '...'}]);
    }

    return(
        <div className="hold_img_or_video">
            <img src={window.recent_img_video_url}></img>
        </div>
    )
}

export default ShowVideo;