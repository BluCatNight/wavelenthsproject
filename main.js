function sin(v,int) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var intensity = v;
  ctx.stroke();
  ctx.strokeStyle = "#04AA6D";
  var counter = 0, x=0,y=180;

  //100 iterations
  var increase = 90/180*Math.PI / 9;
  for(i=0; i<=1000; i+=intensity){
    ctx.moveTo(x,y);
    x = i;
    y =  180 - Math.sin(counter) * int;
    counter += increase;

    ctx.lineTo(x,y);
    ctx.stroke();
  }
}
function clear() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath()
  ctx.fillStyle = "rgba(0, 0, 0, 255)"
  ctx.fillRect(0, 0, c.width, c.height)    
  ctx.stroke();  
}
function onload() {
  console.log("loaded!")
}

function button() {
  clear()
  sin(weirdfunction(document.getElementById("myRange").value),document.getElementById("intrange").value)
  console.log(weirdfunction(document.getElementById("myRange").value))
}
function weirdfunction(x) {
  if(x==1) {
    return 1
  }
  if(x==2) {
    return 2
  }
  if(x==3) {
    return 3
  }
  if(x==4) {
    return 4
  }
  if(x==5) {
    return 5
  }
  if(x == 6){
    return 6
  }
  if(x == 7){
    return 7
  }
  if(x == 8){
    return 8
  }
  if(x == 9){
    return 9
  }
  if(x == 10){
    return 10
  }
  if(x == 11){
    return 11
  }
  if(x == 12){
    return 12
  }
  if(x == 13){
    return 13
  }
  if(x == 14){
    return 14
  }
  if(x == 15){
    return 15
  }
  if(x == 16){
    return 16
  }
  if(x == 17){
    return 17
  }
  if(x == 18){
    return 18
  }
  if(x == 19){
    return 19
  }
  if(x == 20){
    return 20
  }

}