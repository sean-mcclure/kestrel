var likes = {}

function get_class_instance(classname, id) {
    const elems = document.getElementsByClassName(classname);
    for (var i = 0; i < elems.length; i++) {
        if(elems[i].id === id) {
            var instance = i
        }
    }
    return(instance)
}

export function like(event) {
    const id = event.currentTarget.id
    const class_instance = get_class_instance("like_icons", id)
    var current_value = Number(document.getElementsByClassName("like_count")[class_instance].innerText)
    likes[id] = current_value
    if((current_value%2)===0 || typeof(current_value%2)==='undefined') {
        likes[id] = current_value + 1;
        document.getElementsByClassName("like_count")[class_instance].innerHTML = likes[id];
        document.getElementById(id).style.color = "#F3B32B";
    } else {
        likes[id] = current_value - 1;
        document.getElementsByClassName("like_count")[class_instance].innerHTML = likes[id];
        document.getElementById(id).style.color = "#3D3D3D";
    }

}