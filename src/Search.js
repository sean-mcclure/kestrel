import "./Search.css";
import {visible} from "./visible.js";

import {
  FaTimes
} from "react-icons/fa";

const React = require('react')

class Search extends React.Component {
  
render() {
    return (
      <>
      <div className="search">
        <FaTimes className="close_search" onClick={(event) => {
                 event.preventDefault(); 
                 visible("search");
        }}/>
        <h4>SEARCH POSTS</h4>
            <div id="hold_inputs">
                <div><input className="search_input" placeholder="..." spellCheck="true" maxLength="100"></input></div>
                <div><input className="search_input" placeholder="..." spellCheck="true" maxLength="100"></input></div>
            </div>
      </div>
      </>
    );
  }
}

export default Search;