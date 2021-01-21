export function spinner() {
    document.getElementsByClassName("loader")[0].style.display = "block";
    setTimeout(function() {
        document.getElementsByClassName("loader")[0].style.display = "none";
    }, 2000)
}

export function get_instance(id) {
    var res;
    var this_class = document.getElementById(id).className;
    var all_classes = document.getElementsByClassName(this_class);
    for(var c=0;c<all_classes.length;c++) {
        if(all_classes[c].id === id) {
            res = c
        }
    }
    return(c)
}