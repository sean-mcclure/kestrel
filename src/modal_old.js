
var modal_cnt = 0
export function pop_message() {
    modal_cnt++
    if (modal_cnt % 2 === 0) {
        document.getElementsByClassName("hold_modal")[0].innerHTML = "";
        document.body.style.position = "relative";
        document.body.style.overflowY = "scroll";
        document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 9999999
    } else {
        document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = -1
        document.getElementsByClassName("hold_modal")[0].innerHTML = "";
        var modal = document.createElement("div");
        modal.className = "modal_main"
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
        textarea.className = "text_area"
        textarea.style.width = "90%";
        textarea.style.height = "150px";
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
        button.style.fontSize = "18px"
        button.style.width = "auto"
        button.style.border = "none"
        button.style.borderRadius = "4px"
        button.style.background = ""
        button.style.background = "#F3B32B"
        button.style.marginTop = "14px"
        button.style.marginBottom = "-5px"
        button.style.cursor = "pointer"
        button.style.marginBottom = "10px"
        button.onclick = (e) => {
            var typed_msg = document.getElementById("text_area").value
            if (typed_msg !== "") {
                modal.classList.add("koko");
                textarea.classList.add("koko");
                create_message(typed_msg)
                setTimeout(function() {
                    document.getElementsByClassName("hold_modal")[0].innerHTML = "";
                    document.body.style.position = "relative";
                    document.body.style.overflowY = "scroll";
                    modal_cnt = 0
                }, 900)
            } else {
                /*
                az.animate_element("text_area", 1, {
                    "type": "rubberBand"
                })
                */
            }
        }
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
    /*
    az.add_layout("modal_main", 1, {
        "this_class": "modal_icons_layout",
        "row_class": "modal_icons_layout_rows",
        "cell_class": "modal_icons_layout_cells",
        "number_of_rows": 1,
        "number_of_columns": 4
    })
    az.style_layout("modal_icons_layout", 1, {
        "width": "100%",
        "height": "auto",
        "margin-bottom": "-10px",
        "border": 0
    })
    az.add_icon("modal_icons_layout_cells", 1, {
        "this_class": "modal_icons",
        "icon_class": "fa-camera-retro"
    })
    az.add_event("modal_icons", 1, {
        "type": "click",
        "function": function() {
            az.click_element("upload_photo", 1)
        }
    })
    az.add_html("modal_icons_layout_cells", 2, {
        "html": "<div class='modal_icons'>GIF</div>"
    })
    az.style_html("gif_icon", 1, {
        "width": "100px",
        "height": "30px",
        "border-radius": "4px",
        "border": "3px solid whitesmoke"
    })
    az.add_icon("modal_icons_layout_cells", 3, {
        "this_class": "modal_icons",
        "icon_class": "fa-bars"
    })
    az.all_style_icon("modal_icons", {
        "color": "whitesmoke",
        "font-size": "26px",
        "align": "center",
        "cursor": "pointer"
    })
    az.style_icon("modal_icons", 2, {
        "font-size": "20px"
    })
    */
    //$(".modal_icons_layout_cells").eq(3).append(button);
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

function create_message(msg) {
    var message = document.createElement("div");
    message.style.width = "95%"
    message.style.height = "auto"
    message.style.padding = "5px"
    message.style.background = "transparent"
    message.style.marginBottom = "10px"
    message.style.color = "#141414"
    message.style.fontSize = "18px"
    message.style.margin = "10px"
    message.style.borderRadius = "4px"
    message.style.textAlign = "left"
    message.innerHTML = msg
    var new_img = document.createElement("img");
    /*
    if (!az.hold_value.uploaded_image) {
        new_img.src = "https://i.redd.it/tk46u5nrkxm21.png"
    } else {
        new_img.src = az.hold_value.uploaded_image
    }
    */
    new_img.style.width = "100%"
    var likes = document.createElement("div");
    likes.style.width = "100%"
    likes.style.height = "auto"
    likes.style.background = "#3D3D3D"
    likes.style.marginTop = "-5px"
    likes.innerHTML = "<div class='hold_icons'></div>"
    document.getElementsByClassName("col")[1].prepend(likes)
    document.getElementsByClassName("col")[1].prepend(new_img)
    document.getElementsByClassName("col")[1].prepend(message)
    /*
    az.add_layout("hold_icons", 1, {
        "this_class": "icon_layout",
        "row_class": "icon_layout_rows",
        "cell_class": "icon_layout_cells",
        "number_of_rows": 1,
        "number_of_columns": 3
    })
    az.style_layout("icon_layout", 1, {
        "width": "100%",
        "height": "auto",
        "border": 0
    })
    az.add_icon("icon_layout_cells", 1, {
        "this_class": "comment_icon",
        "icon_class": "fa-comment"
    })
    az.style_icon("comment_icon", 1, {
        "color": "whitesmoke",
        "font-size": "26px",
        "align": "center",
        "padding": "10px",
        "cursor": "pointer"
    })
    az.add_icon("icon_layout_cells", 2, {
        "this_class": "retweet_icon",
        "icon_class": "fa-retweet"
    })
    az.style_icon("retweet_icon", 1, {
        "color": "whitesmoke",
        "font-size": "26px",
        "align": "center",
        "padding": "10px",
        "cursor": "pointer"
    })
    az.add_icon("icon_layout_cells", 3, {
        "this_class": "like_icon",
        "icon_class": "fa-heart"
    })
    az.style_icon("like_icon", 1, {
        "color": "whitesmoke",
        "font-size": "26px",
        "align": "center",
        "padding": "10px",
        "cursor": "pointer"
    })
    */
    document.getElementsByClassName("flex_grid_banner")[0].style.zIndex = 9999999
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}

function create_comment(msg) {
    var comment = document.createElement("div");
    comment.style.width = "95%"
    comment.style.height = "auto"
    comment.style.padding = "5px"
    comment.style.background = "#5A2E49"
    comment.style.textAlign = "left"
    comment.innerHTML = msg
    document.getElementsByClassName("hold_modal")[0].append(comment);
}