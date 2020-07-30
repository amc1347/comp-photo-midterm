//Glitch FX object
function GlitchFX(src_){
	this.src = src_; //this source copy can be overwritten (especially in the mosh function);
	this.src_original = this.src.get(); //but still keep a copy of the original even when overwritten
	this.w = this.src.width;
	this.h = this.src.height;
}

/*----NON DESTRUCTIVE FILTERS/GLITCHES---
	These should NOT overwrite the original source image
*/
GlitchFX.prototype.scramble = function(){
	var s_copy = this.src.get(); //copy that doesn't change
	var dest = s_copy; //

	let N = round(random(0,10));
	for (var i = 0; i < N; i++){
		let sx = floor(random(this.w));
		let sy = floor(random(this.h));
		let sw = floor(random(this.w));
		let sh = floor(random(this.h));

		let dx = floor(random(this.w));
		let dy = floor(random(this.h));
		let dw = floor(random(this.w));
		let dh = floor(random(this.h));
		dest.copy(s_copy,sx,sy,sw,sh,dx,dy,dw,dh);
	}
	return dest;
}

GlitchFX.prototype.scanlines = function(){
	var s_copy = this.src.get();
	var dest = s_copy;
	var d = pixelDensity();
	dest.loadPixels();
	for (var x = 0; x < 4*d*this.w; x+=4){
		for (var y = 0; y < this.h; y+=2){
			let i = x + (this.w * y) * d * 4;
			dest.pixels[i] = 0; //Red
			dest.pixels[i + 1] = 0; //Green
			dest.pixels[i + 2] = 0; //Blue
			dest.pixels[i + 3] = 255; //Alpha
		}
	}
	dest.updatePixels();
	return dest;
}
GlitchFX.prototype.warp = function(){
	var s_copy = this.src.get();
	var dest = s_copy;
	var d = pixelDensity();
	var maxOffset = floor(random(1,width/2));
	dest.loadPixels();
	for (var x = maxOffset; x < 4*d*(this.w - maxOffset); x+= 4){
		for (var y = 0; y < this.h; y++){
			let i = x + (this.w * y) * d* 4;
			let offset = floor(maxOffset*noise(x/(4*d*this.w*0.1),y/(this.h*0.1)));
			dest.pixels[i] = dest.pixels[i + 4*offset];
			dest.pixels[i + 1] = dest.pixels[i + (4*offset + 1)];
			dest.pixels[i + 2] = dest.pixels[i + (4*offset + 2)];
			dest.pixels[i + 3] = 255;
		}
	}
	dest.updatePixels();
	return dest;
}
GlitchFX.prototype.pixelBurn = function(){
	var s_copy = this.src.get();
	var dest = s_copy;
	var d = pixelDensity();
	var thresholdColor = [random(255),random(255),random(255)];
	dest.loadPixels();
	for (var x = 0; x < 4*d*this.w; x+=4){
		for (var y = 0; y < this.h; y++){
			let i = x + (this.w * y) * d * 4;
			dest.pixels[i] = (dest.pixels[i] > thresholdColor[0]) ? dest.pixels[i] : 255;
			dest.pixels[i + 1] = (dest.pixels[i + 1] > thresholdColor[1]) ? dest.pixels[i + 1] : 255;
			dest.pixels[i + 2] = (dest.pixels[i + 2] > thresholdColor[2]) ? dest.pixels[i + 2] : 255;
			dest.pixels[i + 3] = 255;
		}
	}
	dest.updatePixels();
	return dest;
}

//----Other functions (not single filters)----
GlitchFX.prototype.overwriteSource = function(newSrc_){
	this.src = newSrc_;
}

GlitchFX.prototype.mosh = function(){
	//reset image with original
	this.overwriteSource(this.src_original);
	//add the effects above at random
	let N = round(random(2,7)); //how many effects to add?
	for (var i = 0; i < N; i++){
		//and which one?
		let fx = floor(random(0,7));
		switch(fx){
			case 0:
				this.overwriteSource(this.scramble());
				break;
			case 1:
				this.overwriteSource(this.scanlines());
				break;
			case 2:
				this.overwriteSource(this.warp());
				break;
			case 3:
				this.overwriteSource(this.pixelBurn());
				break;
			case 4:
				this.overwriteSource(this.noise());
				break;
			case 5:
				this.overwriteSource(this.scanner());
				break;
			case 6:
				this.overwriteSource(this.jpgDegrade());
				break;
		}
		//end of effects loop
	}
	//next effect
}
GlitchFX.prototype.getOutputImage = function(){
	return this.src;
}
