<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.js"></script>
<script type="text/javascript">
function preload() {
    img =   loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");

}
function setup() {
  createCanvas(256,256);
  background(0);
img.filter('gray');
//image(img,0,0);
  img.resize(256,256); //pomocniczno

var hArray = new Array(256);

hArray.fill(0);

    img.loadPixels();

  for(x=0;x<img.width;x++){
    for(y=0;y<img.height;y++) {
    	pos=4*(y*img.width+x); //co czwarta wartość pos -> R w RGBA
      	i = img.pixels[pos+1]; // wartość R dla img 
        hArray[i]++;   // inkrementacja danej jasności
        }
        stroke(255, 255, 255);
        line(x, 0, x, hArray[x]);
        }
}
</script>