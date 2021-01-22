export function spinner() {
    document.getElementsByClassName("loader")[0].style.display = "block";
    setTimeout(function() {
        document.getElementsByClassName("loader")[0].style.display = "none";
    }, 2000)
}