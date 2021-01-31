export function spinner() {
    document.getElementsByClassName("loader")[0].style.display = "block";
    setTimeout(function() {
        document.getElementsByClassName("loader")[0].style.display = "none";
    }, 2000)
}

export function click_back_poll(e) {
    alert(e)
    if(typeof(poll_wrapper) !== "undefined") {
    document.getElementsByClassName("write_options_item")[0].style.display = "block";
    document.getElementsByClassName("poll_wrapper")[0].style.display = "none";
    document.getElementsByClassName("write_options_item")[0].style.display = "block";
    document.getElementsByClassName("write_options_item")[1].style.display = "block";
    document.getElementsByClassName("write_options_item")[2].style.display = "block";
    document.getElementsByClassName("write_options_item")[3].style.display = "block";
    }
}

export function makeid() {
    var res = Math.round(Math.random()*100000000000000, 0);
    return(res)
}