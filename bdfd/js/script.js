function check(e)
{
alert(e.keyCode);
}
 document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117 || e.keycode === 17 || e.keycode === 85)) {//ctrl+u Alt+c, Alt+v 
        alert('Ай шалунишка.');
    }
    return false;
};
  
function click() {
event.cancelBubble = true;
event.returnValue = false;
}
document.oncontextmenu = click;