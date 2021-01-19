export function which_open() {
    var res;
    var check_write = document.getElementsByClassName("write")[0].style.width;
    var check_avatar = document.getElementsByClassName("avatar")[0].style.width;
    var check_dm = document.getElementsByClassName("direct_messages")[0].style.width;
    var check_search = document.getElementsByClassName("search")[0].style.width;
    var check_sign = document.getElementsByClassName("sign_in_modal")[0].style.width;
    if(check_write !== "0px" && check_write !== "") {
        res = "write"
    }
    if(check_avatar !== "0px" && check_avatar !== "") {
        res = "avatar"
    }
    if(check_dm !== "0px" && check_dm !== "") {
        res = "direct_messages"
    }
    if(check_search !== "0px" && check_search !== "") {
        res = "search"
    }
    if(check_sign !== "0px" && check_sign !== "") {
        res = "sign_in_modal"
    }
    return(res)
}