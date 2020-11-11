export function load_messages(e) {

    document.getElementsByClassName("col")[1].innerHTML = ""
    
    const messages = [
        "This is some text that represents a message in Kestrel.",
        "This is some text that represents a message in Kestrel.",
        "This is some text that represents a message in Kestrel.",
        "This is some text that represents a message in Kestrel.",
        "This is some text that represents a message in Kestrel.",
        "This is some text that represents a message in Kestrel.",
        "This is some text that represents a message in Kestrel."
    ]
    
    messages.forEach(function(msg) {
        var new_div_elem = document.createElement("div");
        new_div_elem.style.width = "95%"
        new_div_elem.style.height = "auto"
        new_div_elem.style.padding = "5px"
        new_div_elem.style.background = "transparent"
        new_div_elem.style.marginBottom = "10px"
        new_div_elem.style.color = "#141414"
        new_div_elem.style.fontSize = "18px"
        new_div_elem.style.margin = "10px"
        new_div_elem.style.borderRadius = "4px"
        new_div_elem.style.textAlign = "left"
        new_div_elem.innerHTML = msg
        var new_img = document.createElement("img");
        new_img.src = "https://i.redd.it/tk46u5nrkxm21.png"
        new_img.style.width = "100%"
        document.getElementsByClassName("col")[1].append(new_div_elem)
        document.getElementsByClassName("col")[1].append(new_img)
    })
}