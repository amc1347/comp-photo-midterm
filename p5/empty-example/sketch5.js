// half of rectangle filled

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


function draw() {
  // put drawing code here
  image(img, 0, 0, img.width, img.height);


  for (var i = 0; i < img.width/2; i++){

    // rect(0,0, i, img.height)
    rect(img2, 0, 0, i, img.height)
    tint(255, 126)


  }


  // updatePixels();
}
