var type = "null"

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
  type = "Move a slider to start!";
  Update()
  console.log("loaded!")
}

function button() {
  clear()
  sin(weirdfunction(document.getElementById("myRange").value),document.getElementById("intrange").value)
  console.log(document.getElementById("myRange").value)
}
function weirdfunction(x) {
  if(x==1) {
    type = "Gamma ray";
    Update()
    return 1
  }
  if(x==2) {
    type = "X-ray";
    Update()
    return 2
  }
  if(x==3) {
    type = "X-ray"
    Update()
    return 3
  }
  if(x==4) {
    type = "Ultraviolet"
    Update()
    return 4
  }
  if(x==5) {
    type = "Visable light"
    Update()
    return 5
  }
  if(x == 6){
    type = "Infrared"
    Update()
    return 6
  }
  if(x == 7){
    type = "Infrared"
    Update()
    return 7
  }
  if(x == 8){
    type = "Infrared"
    Update()
    return 8
  }
  if(x == 9){
    type = "Infrared"
    Update()
    return 9
  }
  if(x == 10){
    type = "Infrared"
    Update()
    return 10
  }
  if(x == 11){
    type = "Microwave"
    Update()
    return 11
  }
  if(x == 12){
    type = "Microwave"
    Update()
    return 12
  }
  if(x == 13){
    type = "Microwave"
    Update()
    return 13
  }
  if(x == 14){
    type = "Microwave"
    Update()
    return 14
  }
  if(x == 15){
    type = "Microwave"
    Update()
    return 15
  }
  if(x == 16){
    type = "Microwave"
    Update()
    return 16
  }
  if(x == 17){
    type = "Radio"
    Update()
    return 17
  }
  if(x == 18){
    type = "Radio"
    Update()
    return 18
  }
  if(x == 19){
    type = "Radio"
    Update()
    return 19
  }
  if(x == 20){
    type = "Radio"
    Update()
    return 20
  }

}

function Update() {
  var text = document.getElementById("wavetype");
  text.innerHTML = type;
}

function timeupdate() {
  console.log("Time update!")
}