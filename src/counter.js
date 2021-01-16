export function character_counter(e) {
    const cnt = 280 - Number(e.target.value.length)
    console.log(cnt)
    document.getElementById("show_count").innerHTML = cnt;
    if (cnt > 50 && cnt <= 280) {
        document.getElementById("show_count").style.color = "whitesmoke";
    } else if (cnt > 0 && cnt <= 50) {
        document.getElementById("show_count").style.color = "yellow";
    } else {
        document.getElementById("show_count").style.color = "red";
        document.getElementById("show_count").classList.add("rubberBand_it");
    }
}