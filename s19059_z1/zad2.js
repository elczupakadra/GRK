//Zadanie 2
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
<script>
function setup() {
createCanvas(800,600);
noLoop();
background(100);
}
function draw() {  
//noprotect
let rangeIterator = 256/width;
let colorNumber = 0;
for(x=0; x<width; x++){
   for(y=0; y<height; y++) {

   		set(x, y, Math.floor(colorNumber));
  	}
    colorNumber += rangeIterator;
 }
  updatePixels();
}
</script>