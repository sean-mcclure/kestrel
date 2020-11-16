import React from 'react';
import {like} from "./like.js";

import {
  FaComment,
  FaRetweet,
  FaThumbsUp
} from "react-icons/fa";

const messages = ["This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel."]

export var list_of_messages = messages.map((msg, i) => 
      <div className="msg_wrapper" key={i.toString()}>{msg}<img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img"></img>
      <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em"/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em"/></div>
                <div><FaThumbsUp className="icons_post" color="#3D3D3D" size="1.6em" onClick={like}/><span className="like_count">24</span></div>
            </div>
      </div>    
);

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: list_of_messages
};
  }

  componentDidMount() {
    this.message_id = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.message_id);
  }

  tick() {
    this.setState({
      messages: list_of_messages
    });
  }



  render() {
    return (
         <>
         {this.state.messages}
         </>
    );
  }
}

export default Messages