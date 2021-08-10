(function(){
    function w() {
        var r = document.documentElement;  //html标签的dom元素  
        var a = r.getBoundingClientRect().width;
        if (a > 750 ){
            a = 750;
        }
        var rem = a / 7.5;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
})();
