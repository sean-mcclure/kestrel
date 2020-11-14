const az = window.az


export function load_messages(e) {
            
    document.getElementsByClassName("col")[1].innerHTML = ""
            const messages = ["This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel.", "This is some text that represents a message in Kestrel."]
            messages.forEach(function(msg, i) {
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
                new_img.src = "https://i.redd.it/tk46u5nrkxm21.png"
                new_img.style.width = "100%"
                var likes = document.createElement("div");
                likes.style.width = "100%"
                likes.style.height = "auto"
                likes.style.background = "#3D3D3D"
                likes.style.marginTop = "-5px"
                likes.innerHTML = "<div class='hold_icons'><i style='font-size:40px' class='fa-camera'></i></div>"
                document.getElementsByClassName("col")[1].append(message)
                document.getElementsByClassName("col")[1].append(new_img)
                document.getElementsByClassName("col")[1].append(likes)
                
                
                /*
                if (i === 6) {
                    az.call_multiple({
                        "iterations": 6,
                        "function": function(elem, i) {
                            az.add_layout("hold_icons", i + 1, {
                                "this_class": "icon_layout",
                                "row_class": "icon_layout_rows",
                                "cell_class": "icon_layout_cells",
                                "number_of_rows": 1,
                                "number_of_columns": 3
                            })
                            az.style_layout("icon_layout", i + 1, {
                                "width": "100%",
                                "height": "auto",
                                "border": 0
                            })
                            az.add_icon("icon_layout_cells", (i * 3) + 1, {
                                "this_class": "comment_icon",
                                "icon_class": "fa-comment"
                            })
                            az.style_icon("comment_icon", i + 1, {
                                "color": "whitesmoke",
                                "font-size": "26px",
                                "align": "center",
                                "padding": "10px",
                                "cursor": "pointer"
                            })
                            az.add_event("comment_icon", i + 1, {
                                "type": "click",
                                "function": function() {
                                    az.hold_value.pop_message()
                                }
                            })
                            az.add_icon("icon_layout_cells", (i * 3) + 2, {
                                "this_class": "retweet_icon",
                                "icon_class": "fa-retweet"
                            })
                            az.style_icon("retweet_icon", i + 1, {
                                "color": "whitesmoke",
                                "font-size": "26px",
                                "align": "center",
                                "padding": "10px",
                                "cursor": "pointer"
                            })
                            az.add_icon("icon_layout_cells", (i * 3) + 3, {
                                "this_class": "like_icon",
                                "icon_class": "fa-heart"
                            })
                            az.style_icon("like_icon", i + 1, {
                                "color": "whitesmoke",
                                "font-size": "26px",
                                "align": "center",
                                "padding": "10px",
                                "cursor": "pointer"
                            })
                        }
                    })
                }
                */
            })
        }
        