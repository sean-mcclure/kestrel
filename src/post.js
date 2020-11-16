import {list_of_messages} from "./Messages.js"
import {visible} from "./visible.js"


export function post() {

    if(document.getElementById("textarea").value !== "") {

    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });

    var msg = document.getElementById("textarea").value
    var post_id = Math.round(Math.random()*10000000000000, 1)

    list_of_messages.unshift(<div className="msg_wrapper" key={post_id}>{msg}<img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img"></img></div>)

    document.getElementById("textarea").value = "";

    visible("modal")

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