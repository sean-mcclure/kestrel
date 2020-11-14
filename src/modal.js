var modal_cnt = 0
export function pop_message() {
    modal_cnt++
    if (modal_cnt % 2 === 0) {
        document.getElementsByClassName("hold_modal")[0].innerHTML = "";
        document.body.style.position = "relative";
        document.body.style.overflowY = "scroll";
    } else {
        document.getElementsByClassName("hold_modal")[0].innerHTML = "";
        var modal = document.createElement("div");
        modal.style.width = "90%"
        modal.style.height = "auto"
        modal.style.padding = "20px"
        modal.style.paddingTop = "10px"
        modal.style.borderRadius = "4px"
        modal.style.background = "#3D3D3D"
        modal.style.border = "1px solid #F3B32B"
        modal.style.boxShadow = "2px 2px 100px white"
        modal.style.textAlign = "center"
        var word_count = document.createElement("div");
        word_count.className = "show_count";
        word_count.style.position = "absolute";
        word_count.style.marginBottom = "5px";
        modal.append(word_count);
        var textarea = document.createElement("textarea")
        textarea.id = "text_area"
        textarea.style.width = "90%";
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
        button.style.borderRadius = "4px"
        button.style.background = ""
        button.style.background = "#F3B32B"
        button.style.marginTop = "10px"
        button.style.marginBottom = "-5px"
        button.style.cursor = "pointer"
        button.onclick = (e) => {
            modal.classList.add("koko");
            textarea.classList.add("koko");
            setTimeout(function() {
                document.getElementsByClassName("hold_modal")[0].innerHTML = "";
                document.body.style.position = "relative";
                document.body.style.overflowY = "scroll";
                modal_cnt = 0
            }, 900)
        }
        modal.append(button);
        document.getElementsByClassName("hold_modal")[0].append(modal);
        document.getElementById("text_area").focus();

        if (isMobile()) {
            document.body.style.position = "fixed";
            document.body.style.overflowY = "hidden";
            document.getElementsByClassName("flex-grid")[0].style.background = "";
            document.body.addEventListener('touchstart', function(e) {
                e.preventDefault();
            });
        }

    }
    document.getElementsByClassName("flex-grid")[0].onclick = (e) => {
        document.getElementsByClassName("hold_modal")[0].innerHTML = "";
        modal_cnt = 0
        document.body.style.position = "relative";
        document.body.style.overflowY = "scroll";
    }
    
}

function write(msg) {
    document.getElementsByClassName("show_count")[0].innerHTML = "";
    var show_count = document.createElement("a");
    show_count.text = 280 - Number(msg.length)
    document.getElementsByClassName("show_count")[0].append(show_count);
    if (msg.length >= 0 && msg.length <= 260) {
        document.getElementsByClassName("show_count")[0].style.color = "whitesmoke";
    } else if (msg.length > 260 && msg.length <= 280) {
        document.getElementsByClassName("show_count")[0].style.color = "yellow";
    } else {
        document.getElementsByClassName("show_count")[0].style.color = "red";
    }
}

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}