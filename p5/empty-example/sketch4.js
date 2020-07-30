// not working
//https://editor.p5js.org/DeadAugust/sketches/B1dWVKJhQ

let img;
let step = 5;

function preload() {
  img = loadImage('IMG_9150.jpeg')
  for (let x = 0; x < kitty.width; x+= step){
  for (let y = 0; y < kitty.height; y+= step){
    let c = img.get(x, y);
    fill (c);
    rect (x, y, 3, 3);
  }
}
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);

}

function draw() {

  // background(220);
  for (let x = 0; x < img.width; x+= step){
  	for (let y = 0; y < img.height; y+= step){
      let index = ((y*img.width)+x)*4;
      let c = img.get(x, y);
      fill (c);
      noStroke();
      rect (x, y, 4, 4);

			// let k = kitty.get(i, j);
			// fill(k);
  		//ellipse(i, j, 2, 2);
		}
	}
  updatePixels();

}
