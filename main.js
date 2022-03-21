var mouseevent = "empty";


canvas_var = document.getElementById("myCanvas");
ctx = canvas_var.getContext("2d");

radius =radiustxt;
color =colortxt;
width=widthtxt;

canvas_var.addEventListener("mousedown",my_mousedown );
function my_mousedown(e)
{
    mouseevent="mousedown"
}

canvas_var.addEventListener("mouseup",my_mouseup );
function my_mouseup(e)
{
    mouseevent= "mouseup"
}

canvas_var.addEventListener("mouseleave",my_mouseleave );
function my_mouseleave(e)
{
    mouseevent= "mouseleave"
}

canvas_var.addEventListener("mousemove",my_mousemove );
function my_mousemove(e)
{
    
    

    

    



}