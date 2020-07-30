// glitch partial from bottom
// working
// used for the lines edit


var img

function preload() {
  img = loadImage('sagrada.png')
}

function setup() {
  // put setup code here
  createCanvas(img.width, img.height);
  image(img, 0, 0, img.width, img.height);

}
function draw() {

  // update screen
  if(frameCount==100){

    // new background

    // random glitch pixel length
    glitchlen = int(random(420,000))*4;
    // edit the pixels array
    loadPixels();
    // channel shift?
    let channelshift = int(random(0,4));
    // loop over chunks
    for (var i = 0; i < img.width/2.2; i++) {
      for(let i=pixels.length/4; i<pixels.length-glitchlen; i=i+glitchlen){
        // set all pixels in chunk to color of the first pixel
        for(let p=channelshift; p<glitchlen; p+=8){
          pixels[i+p] = pixels[i];
          pixels[i+p+1] = pixels[i+1];
          pixels[i+p+2] = pixels[i+2]

        }

        }
      // }
  }
    updatePixels();
  }
  push();
  fill(255);
  pop();
}
