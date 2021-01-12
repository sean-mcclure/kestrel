import "./SideDiv.css";
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

class SideDiv extends React.Component {
  
render() {
    return (
      <>
      <div className="side_div">
        <FaTimes className="close_side_div" onClick={(event) => {
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

export default SideDiv;