function sin(z,v) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.stroke();
    var counter = 0, x=0,y=180;

    //100 iterations
    var increase = 90/180*Math.PI / 9;
    for(i=0; i<=z; i+=v){

    ctx.moveTo(x,y);
    x = i;
    y =  180 - Math.sin(counter) * 120;
    counter += increase;

    ctx.lineTo(x,y);
    ctx.stroke();
}}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var value = 10;

slider.onchange = function() {
  value = slider.value;
  console.log(value)
  sin(360,value)
}

function update() {
    
}
