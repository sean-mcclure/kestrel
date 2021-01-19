export function character_counter(class_name, e) {
    const cnt = 280 - Number(e.target.value.length)
    document.getElementsByClassName(class_name)[0].innerHTML = cnt;
    document.getElementsByClassName(class_name)[1].innerHTML = cnt;
    if (cnt > 50 && cnt <= 280) {
        document.getElementsByClassName(class_name)[0].style.color = "whitesmoke";
        document.getElementsByClassName(class_name)[1].style.color = "whitesmoke";
    } else if (cnt > 0 && cnt <= 50) {
        document.getElementsByClassName(class_name)[0].style.color = "yellow";
        document.getElementsByClassName(class_name)[1].style.color = "yellow";
    } else {
        document.getElementsByClassName(class_name)[0].style.color = "red";
        document.getElementsByClassName(class_name)[1].style.color = "red";
        document.getElementsByClassName(class_name)[0].classList.add("rubberBand_it");
        document.getElementsByClassName(class_name)[1].classList.add("rubberBand_it");
    }
}