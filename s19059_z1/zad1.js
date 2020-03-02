//Zadanie 1
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
<script>
function setup() {
createCanvas(800,600);
noLoop();
background(100);
}
function draw() {  
//noprotect

for(y=0; y<height; y++)
   for(x=0; x<width; x++) {
   let randomNumber = Math.floor(Math.random()*(255-140));
   set(x, y, color(255,randomNumber*255/140,140+randomNumber));
  }  
  updatePixels();
}


</script>