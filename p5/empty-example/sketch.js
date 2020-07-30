var img

function preload() {
  img = loadImage('IMG_3856.jpeg')
}

function setup() {
  // put setup code here
  createCanvas(img.width, img.height);
  image(img, 0, 0, img.width, img.height);

}


function draw() {
  // put drawing code here
  image(img, 0, 0, img.width, img.height);

  loadPixels();
  for (var y=0; y<height; y++) {
    for (var x=0; x<width; x++) {
      var index = (x+y*width) *4;
      var r = pixels[index+0];
      var g = pixels[index+1];
      var b = pixels[index+2];
      var a = pixels[index+3];

      // if (r<b) {
      //
      //
      // }

      pixels[index+0] = r;
      pixels[index+1] = g;
      pixels[index+2] = b;
      pixels[index+3] = a;


    }
  }
  updatePixels();
}
