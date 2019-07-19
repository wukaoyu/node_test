var abc = 0;
var scroll = function(e){
    var e = e || window.event;
    
    if (e.wheelDelta) {
        abc = e.wheelDelta;
    }
    if (e.detail) {
        abc = e.detail;
    }
    console.log(abc)
}
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scroll, false);
}



window.onmousewheel = document.onmousewheel = scroll;