import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var messages = window.messages

export function post() {
  
  messages[0] = "hoho"

  console.log(messages)

  const list_of_messages = messages.map((msg, i) => 
      <div className="msg_wrapper" key={i.toString()}>{msg}<img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img"></img></div>
  );

  ReactDOM.render(
     <App />,
    list_of_messages,
    document.getElementById('root')
  );
 /*
  return (
         <>
         {list_of_messages}
         </>
  );
  */

}



export default post;