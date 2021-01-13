import React from 'react';

import "./Poll.css";

const poll_styles = {
    display: "none"
}

class Poll extends React.Component {
  render() {
    return (
         <>
            <div id="poll_wrapper" style={poll_styles}>
                <div className="polls_run_for">Polls run for 24 hours.</div>
                <div><input className="poll_input poll_input_1" placeholder="Ask a question..." spellCheck="true" maxLength="100"></input></div>
                <div><input className="poll_input poll_input_2" placeholder="Choice 1" spellCheck="true" maxLength="100"></input></div>
                <div><input className="poll_input poll_input_3" placeholder="Choice 2" spellCheck="true" maxLength="100"></input></div>
                <div><input className="poll_input poll_input_4" placeholder="Choice 3 (optional)" spellCheck="true" maxLength="100"></input></div>
                <div><input className="poll_input poll_input_5" placeholder="Choice 4 (optional)" spellCheck="true" maxLength="100"></input></div>

            </div>
            
         </>
    );
  }
}

export default Poll;