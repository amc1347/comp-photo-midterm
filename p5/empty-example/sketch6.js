var img

function preload() {
  img = loadImage('IMG_9149.jpeg')
  img2 = loadImage('/Lines Txt PNG/txt_IMG_9149.png')
}

function setup() {
  // put setup code here
  createCanvas(img.width, img.height);
  image(img, 0, 0, img.width, img.height);

}

let glitchlen = 0;


function draw() {
  // put drawing code here
  image(img, 0, 0, img.width, img.height);
  image(img2, 0, 0, img.width, img.height);
  tint(255, 100)

}

function draw() {

  // update screen
  if(frameCount==100){

    // new background
    background(255, 255, 255,random(255));


    // random glitch pixel length
    glitchlen = int(random(420,000))*4;
    // edit the pixels array
    loadPixels();
    // channel shift?
    let channelshift = int(random(0,4));
    // loop over chunks
    for(let i=pixels.length/16; i<pixels.length-glitchlen; i=i+glitchlen){
      // set all pixels in chunk to color of the first pixel
      for(let p=channelshift; p<glitchlen; p+=4){
        pixels[i+p] = pixels[i];
        pixels[i+p+1] = pixels[i+1];
        pixels[i+p+2] = pixels[i+2]

      }

      // }
    }
    updatePixels();
  }
  push();
  fill(255);
  pop();
}
