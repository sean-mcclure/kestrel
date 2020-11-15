import {character_counter} from "./counter.js";

export function Modal() {
    return (
         <>
         <div id="modal" className="modal">
             <div className="show_count"></div>
             <textarea id="textarea" className="textarea" onChange={character_counter}></textarea>
         </div>
         </>
  );
}

export default Modal;