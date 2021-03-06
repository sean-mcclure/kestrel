import "./Poll.css";

import {click_back_poll} from "./utility.js";

import {post} from "./post.js";

import {open_div} from "./SideDiv";

import {
  FaArrowCircleLeft
} from "react-icons/fa";

function Poll() {
    return (
            <div className="poll_wrapper">
                <div className="polls_run_for">Polls run for 24 hours.</div>
                <div><input className="poll_input poll_input_1" placeholder="Ask a question..." spellCheck="true" maxLength="100"></input></div>
                <div><input className="poll_input poll_input_2" placeholder="Choice 1" spellCheck="true" maxLength="100"></input></div>
                <div><input className="poll_input poll_input_3" placeholder="Choice 2" spellCheck="true" maxLength="100"></input></div>
                <div><input className="poll_input poll_input_4" placeholder="Choice 3 (optional)" spellCheck="true" maxLength="100"></input></div>
                <div><input className="poll_input poll_input_5" placeholder="Choice 4 (optional)" spellCheck="true" maxLength="100"></input></div>
                <div><button className="post_poll" onClick={(event) => {
                    window.polling = true;
                    post();
                }}>POST POLL</button></div>
                <div onClick={(event) => {
                     event.preventDefault();
                     open_div("write");
                }}><FaArrowCircleLeft size="2em" className="back_to_write"/>
                </div>
            </div>
    );
  }

export default Poll;