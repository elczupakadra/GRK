//Zadanie 5 
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
<script>

function setup() {
createCanvas(800,700);
//noLoop();
frameRate(2);
}
function draw() {  
//noprotect
background(0);

var offside1 = Math.random() * 400;
var offside2 = Math.random() * 300;

var size = 8;
var x1 = 0 + offside1;
var y1 = 0 + offside2;
var x2 = 50*size + offside1;
var y2 = 0 + offside2;
var x3 = 25*size + offside1;
var y3 = 48*size + offside2;


let cx = x1;
let cy = y1;
stroke(255);
point(x1,y1);
point(x2,y2);
point(x3,y3);
for(i=0; i<30000; i++){
	let x = Math.floor(Math.random()*3)
    switch(x) {
  case 0:
    cx = (cx+x1)/2;
    cy = (cy+y1)/2;
    break;
  case 1:
   	cx = (cx+x2)/2;
    cy = (cy+y2)/2;
    break;
  default:
  	cx = (cx+x3)/2;
    cy = (cy+y3)/2;

}
point(cx,cy);

}
updatePixels();
}
</script>