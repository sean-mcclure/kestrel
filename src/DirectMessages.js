import "./DirectMessages.css";
import {visible} from "./visible.js";

import {
  FaTimes
} from "react-icons/fa";

const React = require('react')

var direct_messages = [{
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       },
                       {
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       },
                       {
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       },
                       {
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       },
                       {
                        message : "Hey how is it going?",
                        from_user : "Luise Miguell" 
                       }
                    ]

export var dir_msgs = direct_messages.map((obj, i) => 
    <div key={i.toString()}>
        <p className="dir_msg_text">{obj.message}</p>
    </div>
);

class DirectMessages extends React.Component {
  
render() {
    return (
      <>
      <div className="direct_messages">
        <FaTimes className="close_direct_messages" onClick={(event) => {
                 event.preventDefault(); 
                 visible("direct_message");
        }}/>
        <h4>MESSAGES</h4>
        {dir_msgs}
      </div>
      </>
    );
  }
}

export default DirectMessages;