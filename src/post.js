import {list_of_messages} from "./Messages.js"


export function post() {

    var msg = document.getElementById("textarea").value
    var post_id = Math.round(Math.random()*10000000000000, 1)

    list_of_messages.unshift(<div className="msg_wrapper" key={post_id}>{msg}<img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img"></img></div>)

  return (
         <>
         {list_of_messages}
         </>
  );

}

export default post;