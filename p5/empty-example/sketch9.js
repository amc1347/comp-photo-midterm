// glitch whole or top half (change the height in halfimage)\
// working
// used for the lines edit


var img

function preload() {
  img = loadImage('winter.png')
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
    // background(255, 255, 255,random(10));

    // rectangle attempt
    fill('rgba(0,0,0,.5)');
    rect(0, 0, img.width/2, img.height)


    // random glitch pixel length
    glitchlen = int(random(4200))*4 ;

    let d = pixelDensity()

    let halfImage = 4 * (width *d) * (height/2.4 *d);


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
          pixels[i+p+2] = pixels[i+2+700]

        }

        }
      }
  }
    updatePixels();

  push();
  fill(255);
  pop();
}
