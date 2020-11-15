export function character_counter(e) {
    const cnt = 280 - Number(e.target.value.length)
    document.getElementsByClassName("show_count")[0].innerHTML = cnt;
    if (cnt > 50 && cnt <= 280) {
        document.getElementsByClassName("show_count")[0].style.color = "whitesmoke";
    } else if (cnt >= 0 && cnt <= 50) {
        document.getElementsByClassName("show_count")[0].style.color = "yellow";
    } else {
        document.getElementsByClassName("show_count")[0].style.color = "red";
    }
}