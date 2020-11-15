import Messages from "./Messages"
var messages = window.messages

export function post() {
  
  messages[0] = "hoho"

  const list_of_messages = messages.map((msg, i) => 
      <div className="msg_wrapper" key={i.toString()}>{msg}<img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png"></img></div>
  );

  return (
         <>
         {list_of_messages}
         </>
  );
}

export default post;