import React from 'react';

const messages = ["This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel."]

export var list_of_messages = messages.map((msg, i) => 
      <div className="msg_wrapper" key={i.toString()}>{msg}<img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img"></img></div>
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

export default Messages; 
 
 
 
 /*
 var messages = ["This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel."]
 window.messages = messages

  const list_of_messages = messages.map((msg, i) => 
      <div className="msg_wrapper" key={i.toString()}>{msg}<img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img"></img></div>
  );

export function Messages() {
  return (
         <>
         {list_of_messages}
         </>
  );
}

export default Messages;
*/