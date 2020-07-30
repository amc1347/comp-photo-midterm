// half of rectangle filled with an image

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
  // put drawing code here
  image(img, 0, 0, img.width, img.height);


  for (var i = 0; i < img.width/2.8; i++){
    // for (var j = 0; j < img.height/2; j++){
      rect(0,0, i, img.height)
      
      // image(img2, 0, 0, i, img.height)
      tint(255, 100)
    // }
  }


  // updatePixels();
}
