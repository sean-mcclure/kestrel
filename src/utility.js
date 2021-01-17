export function spinner() {
    document.getElementsByClassName("loader")[0].style.display = "block";
    setTimeout(function() {
        document.getElementsByClassName("loader")[0].style.display = "none";
    }, 2000)
}

export function smooth_scroll(e, scroll_to_id) {
    e.preventDefault();
    document.querySelector(scroll_to_id).scrollIntoView({
        behavior: "smooth"
    });
}