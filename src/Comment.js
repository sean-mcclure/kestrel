import "./Comment.css";

import avatar from "./avatar.png";

function RePost() {
    return (
        <div className="comment">
             <div className="comment_wrapper">
                 <div className="comment_item"><img className="avatar_repost" src={avatar} alt="avatar_img"></img></div>
                 <div className="comment_item username_repost">John Smith</div>
                 <div className="comment_item post_comment">Tsfdsfsdfdaafdsafdsfsdfsafs fdsafdsafsdf dsafsddsafdss</div>
                 <div className="comment_item"><img className="msg_img_repost" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img"></img></div>
             </div>
    </div>
    );
}

export default RePost;