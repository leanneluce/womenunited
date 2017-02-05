
var wnd = window.open("schedule.html", "setmore-fancy-box-close-icon");
wnd.onunload = function(){
    // do something
    window.open ('index.html','_self',false)
};