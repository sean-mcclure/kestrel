export function scroll_left(event) {
    const id = event.target.id
    if(id === "textarea2") {
         var container = document.getElementById("textarea_wrapper")
         sideScroll(container,"right",4,"10%",10);
    }
}

function sideScroll(element,direction,speed,distance,step){
    var scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction === 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}