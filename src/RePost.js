import "./RePost.css";

import avatar from "./avatar.png";

function RePost() {
    return (
        <div className="repost">
             <div className="repost_wrapper">
                 <div className="repost_item"><img className="avatar_repost" src={avatar} alt="avatar_img"></img></div>
                 <div className="repost_item username_repost">John Smith</div>
                 <div className="repost_item post_repost">Tsfdsfsdfdaafdsafdsfsdfsafs fdsafdsafsdf dsafsddsafdss</div>
                 <div className="repost_item"><img className="msg_img_repost" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img"></img></div>
             </div>
    </div>
    );
}

export default RePost;