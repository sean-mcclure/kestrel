var modal_cnt = 0
export function pop_message() {
    modal_cnt++
    if(modal_cnt%2===0) {
        document.getElementsByClassName("hold_modal")[0].innerHTML = "";
    } else {
    document.getElementsByClassName("hold_modal")[0].innerHTML = "";
    var modal = document.createElement("div");
    modal.style.width = "400px"
    modal.style.height = "auto"
    modal.style.padding = "20px"
    modal.style.paddingTop = "10px"
    modal.style.borderRadius = "4px"
    modal.style.background = "#3D3D3D"
    modal.style.border = "1px solid #F3B32B"
    modal.style.textAlign = "center"
    var word_count = document.createElement("div");
    word_count.className = "show_count";
    word_count.style.position = "absolute";
    word_count.style.marginBottom = "5px";
    modal.append(word_count);
    var textarea = document.createElement("textarea");
    textarea.style.width = "95%";
    textarea.style.height = "200px";
    textarea.style.color = "whitesmoke";
    textarea.style.outline = 0;
    textarea.style.padding = "10px";
    textarea.style.background = "#4f4434"
    textarea.style.border = "none"
    textarea.style.marginTop = "24px"
    textarea.style.marginBottom = "0px"
    textarea.style.fontSize = "20px";
    textarea.oninput = (e) => {
        write(e.target.value)
    }
    modal.append(textarea);
    var button = document.createElement("button");
    button.textContent = "POST"
    button.style.height = "30px"
    button.style.width = "auto"
    button.style.border = "none"
    button.style.background = "#D1CCC0"
    button.style.marginTop = "10px"
    button.style.marginBottom = "-5px"
    button.style.cursor = "pointer"
    modal.append(button);
    document.getElementsByClassName("hold_modal")[0].append(modal);
    }
    document.getElementsByClassName("flex-grid")[0].onclick = (e) => {
        document.getElementsByClassName("hold_modal")[0].innerHTML = "";
        modal_cnt = 0
    }
}

function write(msg) {
    document.getElementsByClassName("show_count")[0].innerHTML = "";
    var show_count = document.createElement("a");
    show_count.text = 280 - Number(msg.length)
    document.getElementsByClassName("show_count")[0].append(show_count);
    if(msg.length >= 0 && msg.length <= 260) {
        document.getElementsByClassName("show_count")[0].style.color = "whitesmoke";
    } else if(msg.length > 260 && msg.length <= 280) {
         document.getElementsByClassName("show_count")[0].style.color = "yellow";
    } else {
         document.getElementsByClassName("show_count")[0].style.color = "red";
    }
}