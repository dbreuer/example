function drawCanvas() {
    if (!document.getElementById('drawHere')) {
        var canvas = document.createElement("canvas");
        canvas.id = "drawHere";
        canvas.width = 300;
        canvas.height = 180;
        document.getElementById('result').appendChild(canvas);
    } else {
        var canvas = document.getElementById('drawHere');   
    }
    
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#6cc5f1";
    ctx.fillRect(137,127,137,41);
    ctx.fillStyle = "#97d1ab";
    ctx.fillRect(0,127,137,41);
    ctx.fillStyle = "#000";
    ctx.font = "30px Arial";
    ctx.fillText("DAVID",25,158);
    ctx.fillStyle = "#FFF";
    ctx.font = "30px Arial";
    ctx.fillText("BREUER",143,158);
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(274,127);
    ctx.lineTo(284,115);
    ctx.lineTo(284,147);
    ctx.lineTo(274,167);
    ctx.closePath();
    ctx.fillStyle="#97d1ab";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(274,127);
    ctx.lineTo(137,127);
    ctx.lineTo(142,115);
    ctx.lineTo(284,115);
    ctx.closePath();
    ctx.fillStyle="#97d1ab";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(137,127);
    ctx.lineTo(0,127);
    ctx.lineTo(10,115);
    ctx.lineTo(142,115);
    ctx.closePath();
    ctx.fillStyle="#6cc5f1";
    ctx.fill();
    
}
var btn = document.getElementById('pushButton');


btn.addEventListener("click", drawCanvas, false);


    $(".css3-animation").click( function(e){ 
        e.preventDefault();
        $(this).toggleClass("play");
    });    

var back = document.createElement("canvas");
back.id = "footer_background";
back.width = 960;
back.height = 480;


var btx = back.getContext("2d");
 
    for (var x = 0; x < 13; x++) {
        for( var y = 0; y<28; y++) {
           
                btx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
                btx.beginPath();
                btx.moveTo(40*(y), 40*(x)); // give the (x,y) coordinates
                btx.lineTo(40*(y), 40*(x+1));
                btx.lineTo(40*(y+1), 40*(x));
                btx.fill();
                btx.closePath();
                btx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
                btx.beginPath();
                btx.moveTo(40*(y+1), 40*(x)); // give the (x,y) coordinates
                btx.lineTo(40*(y+1), 40*(x+1));
                btx.lineTo(40*(y), 40*(x+1));
                btx.fill();
                btx.closePath();
            
        }
    }
    
    //document.body.appendChild(back);
    
    var image = new Image();
    image.id = "pic"
    image.src = back.toDataURL();
    document.getElementById("footer").style.background = "url("+back.toDataURL()+")";