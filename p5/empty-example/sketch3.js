// website
// https://editor.p5js.org/jeremydouglass/sketches/L13wuQ2hg
// working: bottom of the half is glitched out

var img

function preload() {
  img = loadImage('IMG_9721.jpeg')

}

let glitchlen = 0;

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0, img.width, img.height);
}

function draw() {

  // update screen
  if(frameCount==100){

    // new background
    background(random(255), random(255), random(255), random(50));


    // random glitch pixel length
    glitchlen = int(random(50,000))*4;
    // edit the pixels array
    loadPixels();
    // channel shift?
    let channelshift = int(random(0,4));
    // loop over chunks
    for(let i=pixels.length/2; i<pixels.length-glitchlen; i=i+glitchlen){
      // set all pixels in chunk to color of the first pixel
      for(let p=channelshift; p<glitchlen; p+=4){
        pixels[i+p] = pixels[i];
        pixels[i+p+1] = pixels[i+1];
        pixels[i+p+2] = pixels[i+2];
      }
    }
    updatePixels();
  }
  push();
  fill(255);
  pop();
}
