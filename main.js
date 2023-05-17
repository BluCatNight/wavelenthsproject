function sin(v) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var intensity = 10;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.stroke();
  var counter = 0, x=0,y=180;

  //100 iterations
  var increase = 90/180*Math.PI / 9;
  for(i=0; i<=720; i+=intensity){
    ctx.moveTo(x,y);
    x = i;
    y =  180 - Math.sin(counter) * 120;
    counter += increase;

    ctx.lineTo(x,y);
    ctx.stroke();
  }
}

function onload() {
  console.log("loaded!")
}

function button() {
  sin(document.getElementById("myRange").value)
}