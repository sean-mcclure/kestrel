var modal_cnt = 0
export function pop_message() {
    modal_cnt++
    if(modal_cnt%2==0) {
    document.getElementsByClassName("hold_modal")[0].innerHTML = "";
    } else {
    var modal = document.createElement("div");
    modal.style.width = "auto"
    modal.style.height = "200px"
    modal.style.padding = "20px"
    modal.style.borderRadius = "4px"
    modal.style.background = "#3D3D3D"
    modal.style.border = "1px solid #F3B32B"
    var textarea = document.createElement("textarea");
    textarea.style.width = "95%";
    textarea.style.height = "90%";
    textarea.style.color = "whitesmoke";
    textarea.style.outline = 0;
    textarea.style.padding = "10px";
    textarea.style.background = "#4f4434"
    textarea.style.border = "none"
    textarea.style.fontSize = "20px";
    modal.append(textarea);
    document.getElementsByClassName("hold_modal")[0].append(modal);
    } 
}