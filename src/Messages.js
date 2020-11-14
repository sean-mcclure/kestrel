import {
  FaFeatherAlt
} from "react-icons/fa";

 const messages = ["This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel."]

  const list_of_messages = messages.map((msg, i) => 
      <div className="msg_wrapper" key={i.toString()}>{msg}<img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png"></img></div>
  );

export function Messages() {
  return (
         <>
         {list_of_messages}
         </>
  );
}

export default Messages;