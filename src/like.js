var like_cnt = 0
export function like() {
    like_cnt++
    var current_value = Number(document.getElementsByClassName("like_count")[0].innerHTML)
    if((like_cnt%2)===0) {
        document.getElementsByClassName("like_count")[0].innerHTML = current_value - 1;
        document.getElementsByClassName("icons")[2].style.color = "whitesmoke";
    } else {
        document.getElementsByClassName("like_count")[0].innerHTML = current_value + 1;
        document.getElementsByClassName("icons")[2].style.color = "#F3B32B";
    }
}