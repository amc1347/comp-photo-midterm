// color + combo of glitch on top

var img

function preload() {
  img = loadImage('sketch.png')
}

function setup() {
  // put setup code here
  createCanvas(img.width, img.height);
  image(img, 0, 0, img.width, img.height);

}


function draw() {
  // put drawing code here

  loadPixels();

  for (var y=0; y<height; y++) {
    for (var x=0; x<width; x++) {
      var index = (x+y*width) *4;
      var r = pixels[index+0];
      var g = pixels[index+1];
      var b = pixels[index+2];
      var a = pixels[index+3];

      pixels[index+0] = r;
      pixels[index+1] = g;
      pixels[index+2] = b;
      pixels[index+3] = a;


    }
  }

  // second for loop

  if(frameCount==100){

    // new background
    // background(255, 255, 255,random(10));

    // rectangle attempt
    fill('rgba(237,255,133,.3)');
    // rectMode(CENTER);
    rect(0, 500, img.width/3.5, img.height)


    // random glitch pixel length
    glitchlen = int(random(10000))*4 ;

    let d = pixelDensity()

    let halfImage = 4 * (width *d) * (height/1.7 *d);


    // edit the pixels array
    loadPixels();
    // channel shift?
    let channelshift = int(random(0,4));
    // loop over chunks

    for (var x = 0; x < img.width/2; x++) {
    for(let i=0; i<halfImage -glitchlen; i=i+glitchlen){

        // set all pixels in chunk to color of the first pixel
        // change p+= for more different glitch effect
        for(let p=channelshift; p<glitchlen; p+=8){
          pixels[i+p] = pixels[i];
          pixels[i+p+1] = pixels[i+1];
          pixels[i+p+2] = pixels[i+2]

        }

        }
      }
  }
    updatePixels();

  push();
  fill(255);
  pop();

  updatePixels();
}
