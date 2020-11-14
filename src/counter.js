export function character_counter(msg) {
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