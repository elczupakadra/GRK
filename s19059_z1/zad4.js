//Zadanie 4
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
<script>
function setup() {
createCanvas(800,600);
noLoop();
background(color(200,200,255)); //niebo
}
function draw() {  
//noprotect
for(x=0; x<width; x++){
   for(y=height; y>22/30*height; y--) {
   		set(x, y, color(0,100,0)); //trawa
        if(Math.random() *  (22/30*height*width) < 1000  ) // losuje ze wszystkich pixeli trawy 1000 par punktów
        set(x,y, color(floor(random(0,255)),floor(random(0,255)) ,floor(random(0,255)))); //kwiaty
  	}
 } 
 for(x=1/4* width; x< 3/4*width; x++)
   for(y=10/23*height; y<22/30*height; y++) 
   set(x, y, color(100,50,30)); //fasada

for(x= 1/2 * width; x < 5/6* width;x++)
	for(y =  10/23*height ; y > x- 1/2*width  ; y--){  //taka konstrukcja zadziałą dla kąta 45stopni 
		set(x,y, color(255,100,100)); //dach lewy
        set(width - x,y     , color(255,100,100)); //dach prawy
        }
  updatePixels();
}
</script>