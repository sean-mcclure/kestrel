import "./RePost.css";

import avatar from "./avatar.png";

function RePost() {
    return (
        <div className="repost">
             <div className="repost_wrapper">
                 <div className="repost_item"><textarea id="repost_textrea"></textarea></div>
                 <button className="repost_item">REPOST</button>
            </div>
    </div>
    );
}

export default RePost;