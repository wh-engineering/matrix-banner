(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 821,
	height: 402,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/GamesReelFull.jpg", id:"GamesReelFull"},
		{src:"images/CGIB_3611_Games_Signup_821x402_atlas_P_.png", id:"CGIB_3611_Games_Signup_821x402_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CGIB_3611_Games_Signup_821x402_atlas_P_", frames: [[401,101,93,90],[401,0,106,99],[386,193,22,13],[410,193,22,13],[305,169,79,83],[305,0,94,167],[0,0,303,234]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.CHARBird = function() {
	this.spriteSheet = ss["CGIB_3611_Games_Signup_821x402_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CHARCasper = function() {
	this.spriteSheet = ss["CGIB_3611_Games_Signup_821x402_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CHARJackLefthand = function() {
	this.spriteSheet = ss["CGIB_3611_Games_Signup_821x402_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CHARJackRighthand = function() {
	this.spriteSheet = ss["CGIB_3611_Games_Signup_821x402_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CHARJack = function() {
	this.spriteSheet = ss["CGIB_3611_Games_Signup_821x402_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CHARSpring = function() {
	this.spriteSheet = ss["CGIB_3611_Games_Signup_821x402_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.GamesReelFull = function() {
	this.initialize(img.GamesReelFull);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,765);


(lib.TV = function() {
	this.spriteSheet = ss["CGIB_3611_Games_Signup_821x402_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#264C7C").s().p("ArXEKIBggNQB1gRBtgWQFahHB0hXQCAhcAshjQAfhGgJhQQgHg6hrguQhigqg4AJQg9AJhIAqQhTAvgDAtQgEAzBrAOQBsANA+gsQgGAhghAdQhEA7iKgVQhogQgRheQgQhWA7hTQAXggA1gaQAkgRAmgKQB4geCBASQBXAMCBAqQBLAYB1BMQB2BMBZBRIAALjg");
	this.shape.setTransform(0,52.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,0,145.8,105.9);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TV();
	this.instance.parent = this;
	this.instance.setTransform(-151.5,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-117,303,234);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A6335").s().p("AEgH5Qh3gYgNgeIgSAXQgSAEgZgCQgygEgfgjQgLAPgSAOQgpAbgxgEQgygEgdgHIgUgEQgQAIgZAHQgyAOgsgHQgygGgkgqQgigmAAgnQAAhoAciVQAojYBIgDIANAFQARAJAOAOQAuAtAJBNIAagzQAjg2AvAAQAvgBAoA5QAUAcAJAcQAGiOAXiSQAtkhBRgBQA9ABAxEtQAZCWAMCVIAPgMQAUgNAZAAQARAAAYAsQAaAwAPBBQAnCxhTCGQg5gFg7gMg");
	this.shape.setTransform(0.6,-21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A6335").s().p("AgjCEIAAkHIBIAAIAAEHg");
	this.shape_1.setTransform(-10.1,33.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A6335").s().p("AgcBnIAAjNIA5AAIAADNg");
	this.shape_2.setTransform(14.9,30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A6335").s().p("AgdBnIAAjNIA7AAIAADNg");
	this.shape_3.setTransform(-28.5,30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A6335").s().p("AiMCCQg7g2AAhMQAAhLA7g2QA7g3BRAAQBTAAA6A3QA7A2AABLQAABMg7A2Qg6A3hTAAQhRAAg7g3g");
	this.shape_4.setTransform(34.5,44.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A6335").s().p("AiMCCQg7g2AAhMQAAhMA7g2QA6g2BSAAQBTAAA6A2QA7A2AABMQAABMg7A2Qg7A2hSAAQhSAAg6g2g");
	this.shape_5.setTransform(39.5,54.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A6335").s().p("AieCNQhDg7AAhSQAAhSBDg6QBCg7BcAAQBeAABCA7QBCA6AABSQAABShCA7QhCA7heAAQhcAAhCg7g");
	this.shape_6.setTransform(11.9,54);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A6335").s().p("AiDBoQg3grABg9QgBg8A3grQA3grBMAAQBNAAA3ArQA2ArAAA8QAAA9g2ArQg3ArhNAAQhMAAg3grg");
	this.shape_7.setTransform(-21.5,52);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1A6335").s().p("AhhBVQgpgkgBgxQABgxApgiQAogkA5ABQA5gBAqAkQApAigBAxQABAxgpAkQgqAig5AAQg5AAgogig");
	this.shape_8.setTransform(-45.5,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-74,119,148.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CHARBird();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-45,93,90);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CHARBird();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-45,93,90);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CHARJack();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-41.5,79,83);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CHARSpring();
	this.instance.parent = this;
	this.instance.setTransform(-47,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-83.5,94,167);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CHARSpring();
	this.instance.parent = this;
	this.instance.setTransform(-47,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-83.5,94,167);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CHARCasper();
	this.instance.parent = this;
	this.instance.setTransform(-53,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-49.5,106,99);


(lib.TextWageringai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwmAEIAAgGMAhNAAAIAAAGg");
	this.shape.setTransform(106.3,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAJIAAgSIAKAAIAAASg");
	this.shape_1.setTransform(210.5,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA8IATgsIgehLIALAAIAYA7IAAAAIAYg7IANAAIgyB3g");
	this.shape_2.setTransform(205.4,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEA7IAAh1IAJAAIAAB1g");
	this.shape_3.setTransform(199.6,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA9IAAh3IALAAIAAAOIAAAAQAKgQATAAQARAAAMAMQAMAMAAARQABASgMAKQgNAMgRAAQgSAAgLgPIAAAAIAAA3gAgUgoQgKAJABANQgBANAKAHQAJAJALAAQAMAAAKgJQAIgHABgNQgBgOgIgJQgKgJgMAAQgLAAgJAKg");
	this.shape_4.setTransform(192.9,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoA9IgBh3IAMAAIAAAOIAAAAQAKgQATAAQARAAAMAMQANAMAAARQAAASgNAKQgMAMgRAAQgTAAgKgPIAAAAIAAA3gAgVgoQgJAJAAANQAAANAJAHQAJAJAMAAQANAAAJgJQAIgHAAgNQAAgOgJgJQgJgJgMAAQgMAAgJAKg");
	this.shape_5.setTransform(182.6,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAdQgMgMgBgRQAAgQANgNQANgLAPAAQAUAAAKAQIAAgOIAMAAIAABNIgMAAIAAgOQgKAQgUAAQgQAAgMgMgAgVgVQgIAJgBAMQABANAIAJQAJAJAMAAQAMAAAKgKQAJgJAAgMQAAgLgJgKQgJgJgNAAQgLAAgKAJg");
	this.shape_6.setTransform(171.8,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAiQgIgHAAgMIALAAQAAAQAQAAQARAAAAgNQAAgKgRgFQgNgDgFgDQgHgFAAgKQAAgJAIgHQAHgGAKAAQALAAAHAGQAHAGAAAJIgLAAQAAgMgOAAQgFABgEADQgEADAAAFQAAAIAOAFQAQAFAGAEQAFAEAAAKQAAALgIAGQgIAHgMAAQgLAAgIgHg");
	this.shape_7.setTransform(158.6,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAXIgCgtIALAAIgBAtg");
	this.shape_8.setTransform(153.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmArQgTgSAAgZQAAgYASgSQASgSAYAAQARAAAPAJQAQAJAHAOIgOAAQgGgKgMgGQgLgFgMAAQgSAAgPAPQgPAPAAATQAAAUAPAPQAPAPASAAQAYAAASgWIANAAQgJAPgOAJQgPAJgRAAQgXAAgSgSg");
	this.shape_9.setTransform(144.9,6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXAnQgTAWgUAAQgPAAgLgKQgLgKAAgPQAAgOAJgJQAGgEANgHQgOgNAAgNQAAgKAJgJQAIgHAMAAQAKAAAIAIQAIAIAAALQAAAKgHAHQgFAGgJAFIAbAaQAKgRAHgVIAMAAQgIAbgNATIAYAXIgIAJgAgiAJQgHAHAAALQAAAKAGAGQAHAGALABQARAAAPgTIgggfQgMADgFAGgAgWgsQgFAEAAAGQAAAJAOAMQARgIAAgMQAAgGgEgFQgEgFgHABQgGgBgFAFg");
	this.shape_10.setTransform(132.2,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFA7IAAhqIgbAAIAAgLIBBAAIAAALIgcAAIAABqg");
	this.shape_11.setTransform(122.7,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAwQgMgMAAgSQAAgRAMgLQANgLAPAAQAVAAAJAQIABAAIAAg2IAKAAIAAB1IgKAAIAAgOIgBAAQgKAQgUAAQgPAAgNgMgAgUgCQgJAHAAAOQAAANAJAJQAIAJAMAAQANAAAJgKQAJgJAAgMQAAgNgJgIQgJgJgNAAQgLAAgJAJg");
	this.shape_12.setTransform(109.3,6.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAoIAAgqQAAgMgHgIQgGgHgKAAQgJAAgGAIQgHAHAAALIAAArIgLAAIAAhNIALAAIAAAKQAIgMAPAAQAPAAAJAKQAJAJAAASIAAAqg");
	this.shape_13.setTransform(99.9,8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAdQgNgMAAgRQAAgQANgNQAMgLAQAAQAVAAAJAQIAAAAIAAgOIAMAAIAABNIgMAAIAAgOIAAAAQgKAQgUAAQgQAAgMgMgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQANAAAJgKQAJgJAAgMQAAgLgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_14.setTransform(89.9,8.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglAeIAMAAQAIAVATAAQANAAAHgIQAIgIAAgMIAAgSIgBAAQgJAQgUAAQgQAAgMgMQgMgKAAgRQAAgRAMgNQAMgMAQAAQAUAAAJAQIABAAIAAgOIALAAIAABPQAAAUgNALQgKAJgQAAQgeAAgJgfgAgTgoQgJAJAAANQAAAMAIAIQAJAJALAAQANAAAJgJQAIgIAAgMQAAgNgIgJQgJgKgNAAQgLAAgIAKg");
	this.shape_15.setTransform(74.9,10.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWAoIAAgqQAAgMgGgIQgGgHgKAAQgIAAgHAIQgGAHAAALIAAArIgMAAIAAhNIAMAAIAAAKQAHgMAPAAQAPAAAJAKQAJAJAAASIAAAqg");
	this.shape_16.setTransform(65.5,8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEA5IAAhNIAJAAIAABNgAgEgmIAAgSIAJAAIAAASg");
	this.shape_17.setTransform(59.2,6.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAoIAAhNIALAAIAAALQAEgNAQAAIAAALQgUAAAAAXIAAAtg");
	this.shape_18.setTransform(55.2,8.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAdQgMgNAAgQQAAgQAMgMQANgMAPAAQARAAAMANQAMAMAAAPIAAAEIhFAAQAAALAKAIQAIAIAKAAQAJAAAHgFQAHgFADgIIANAAQgGANgKAHQgKAIgNAAQgPAAgNgMgAgSgXQgIAHgCAMIA6AAQgDgMgIgHQgJgHgKgBQgJAAgJAIg");
	this.shape_19.setTransform(47.5,8.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglAeIAMAAQAIAVATAAQANAAAHgIQAHgIAAgMIAAgSQgJAQgUAAQgQAAgMgMQgMgKAAgRQAAgRAMgNQAMgMAQAAQATAAAKAQIAAgOIAMAAIAABPQAAAUgNALQgKAJgQAAQgfAAgIgfgAgUgoQgJAJAAANQAAAMAJAIQAJAJALAAQAMAAAJgJQAJgIAAgMQAAgNgJgJQgJgKgMAAQgLAAgJAKg");
	this.shape_20.setTransform(37.3,10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcAdQgNgMAAgRQAAgQANgNQAMgLAQAAQAUAAAKAQIAAAAIAAgOIAMAAIAABNIgMAAIAAgOIAAAAQgKAQgUAAQgQAAgMgMgAgUgVQgJAJAAAMQAAANAJAJQAJAJALAAQANAAAJgKQAJgJAAgMQAAgLgJgKQgJgJgNAAQgLAAgJAJg");
	this.shape_21.setTransform(27,8.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAaA7IgahgIAAAAIgZBgIgPAAIgih1IAMAAIAdBlIABAAIAchlIAJAAIAdBlIAdhlIAMAAIgiB1g");
	this.shape_22.setTransform(14.9,6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAIIgJAPIgIgFIALgPIgSgEIADgJIASAGIAAgSIAHAAIAAATIARgGIAEAIIgSAEIALAPIgIAFg");
	this.shape_23.setTransform(3.4,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.7,16.3);


(lib.TextJoinai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBEQgOgOAAgZIAAg5QAAgZAOgPQAOgPAWAAQAXAAAOAQQAOAOAAAZIAAA5QAAAYgOAPQgOAQgXAAQgWAAgOgQgAgNguQgFAHAAANIAAA0QAAAbASAAQATAAAAgbIAAg0QAAgMgFgIQgFgHgJAAQgHAAgGAHg");
	this.shape.setTransform(306.1,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkBEQgOgOAAgZIAAg5QAAgZAOgPQAOgPAWAAQAXAAAOAQQAOAOAAAZIAAA5QAAAYgOAPQgOAQgXAAQgWAAgOgQgAgNguQgFAHAAANIAAA0QAAAbASAAQAIAAAGgHQAFgHAAgNIAAg0QAAgMgFgIQgGgHgIAAQgHAAgGAHg");
	this.shape_1.setTransform(293.4,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBSIAAgeQAagZASgUQATgVAAgPQAAgJgFgFQgEgFgGAAQgQAAAAAWIghAAQAAgaANgOQANgPAXAAQAVAAAPAPQAOAOAAAXQAAAWgOAPIgnAsIA1AAIAAAeg");
	this.shape_2.setTransform(280.6,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0AeIAiAAQAAANAEAGQAGAGAIAAQATAAAAgTQAAgJgIgGQgGgDgNgGQgWgHgJgIQgLgLAAgSQAAgYAOgNQAOgOAWAAQAxAAACAxIggAAQgBgVgSAAQgGAAgFAFQgEAFAAAIQAAAIAHAFQAFAEANAFQAUAGAJAJQAPAMAAAXQgBAXgPANQgOANgYAAQg0AAAAg2g");
	this.shape_3.setTransform(268,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBRIAAihIBNAAIAAAfIgsAAIAAAfIAsAAIAAAdIgsAAIAAAnIAsAAIAAAfg");
	this.shape_4.setTransform(256.3,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApBRIAAh9IgdB9IgXAAIgdh8IAAB8IgeAAIAAihIAxAAIAVBnIAWhnIAxAAIAAChg");
	this.shape_5.setTransform(241.9,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBRIgIgfIgkAAIgHAfIgiAAIAsihIAdAAIAuChgAgJATIASAAIgJgzg");
	this.shape_6.setTransform(226.7,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2AYIAAguQAAg9A3AAQA2AAAAA9IghAAQAAgQgFgHQgFgHgLABQgLAAgFAGQgGAIAAARIAAApQAAARAGAIQAFAGALAAQALABAFgHQAFgHAAgQIAAAAIgbAAIAAgcIA8AAIAAAfQAAA6g2AAQg3AAAAg8g");
	this.shape_7.setTransform(214,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAzQgMgNAAgaIAAgYQAAgYAMgOQALgOAUAAQAVAAAMAPQALANAAAZIAAATIg6AAIAAADQAAAcAOAAQAOgBAAgSIAeAAQAAAUgMAMQgLANgVAAQgUAAgLgOgAgOgNIAdAAQAAgYgPgBQgNABgBAYg");
	this.shape_8.setTransform(195.1,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBFQgJgNAAgXIAAggQAAgVAJgNQAJgNASAAQANgBAIALIAAgtIAeAAIAACgIgbAAIAAgKQgIANgQAAQgSAAgJgNgAgNAGIAAAWQAAAbANgBQAOAAAAgVIAAggQAAgTgOAAQgNgBAAAZg");
	this.shape_9.setTransform(183.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAzQgMgNAAgaIAAgYQAAgYAMgOQALgOAUAAQAVAAAMAOQALANAAAZIAAAYQAAAagMANQgLAOgVAAQgUAAgLgOgAgNgKIAAAVQAAAaANAAQAOAAAAgaIAAgVQAAgagOAAQgNAAAAAag");
	this.shape_10.setTransform(172.1,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAzQgLgNABgaIAAgYQgBgYALgOQAMgOATAAQAUAAALAOQALANAAAWIgdAAQAAgVgNAAQgMAAAAAaIAAAVQAAAaAMAAQANAAAAgWIAAgDIAdAAIAAADQAAAWgLAOQgLAOgUAAQgTAAgMgOg");
	this.shape_11.setTransform(160.8,10.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAzQgMgNAAgaIAAgYQAAgYAMgOQALgOAUAAQAVAAALAOQAMAOAAAYIAAAYQAAAagMANQgLAOgVAAQgUAAgLgOgAgNgKIAAAVQAAAaANAAQAOAAAAgaIAAgVQAAgagOAAQgNAAAAAag");
	this.shape_12.setTransform(143.5,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqA/IAAhOQAAgRgOgBQgOAAAAARIAABPIgbAAIAAhOQAAgRgOgBQgOAAAAARIAABPIgdAAIAAh7IAcAAIAAAPQAFgRAUAAQARgBAFARQAJgRAUABQARgBALAMQAJALAAAQIAABXg");
	this.shape_13.setTransform(129.3,10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAzQgMgNAAgaIAAgYQAAgYAMgOQALgOAUAAQAVAAALAOQAMAOAAAYIAAAYQAAAagMANQgLAOgVAAQgUAAgLgOgAgNgKIAAAVQAAAaANAAQAOAAAAgaIAAgVQAAgagOAAQgNAAAAAag");
	this.shape_14.setTransform(115,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcA/IAAh7IAbAAIAAAUQAEgXAaABIAAAhIgJgBQgUAAAAAdIAABAg");
	this.shape_15.setTransform(106.2,10.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrBWIAAioIAbAAIAAALQAJgNAPAAQARAAAKANQAJANAAAXIAAAgQAAAVgJANQgKANgRAAQgNAAgIgLIAAA1gAgNgjIAAAgQAAATANAAQAOABAAgZIAAgWQAAgbgOABQgNAAAAAVg");
	this.shape_16.setTransform(96.1,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAMBRIAAhRQAAgPgMAAQgLAAAAANIAABTIgeAAIAAihIAeAAIAAAuQAIgLAMAAQAQAAAJAKQAIAKAAAQIAABag");
	this.shape_17.setTransform(78.7,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNBNIAAhfIgOAAIAAgcIAOAAIAAgeIAbAAIAAAeIAOAAIAAAcIgOAAIAABfg");
	this.shape_18.setTransform(69.7,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBRIAAh7IAbAAIAAB7gAgNg4IAAgYIAbAAIAAAYg");
	this.shape_19.setTransform(63.5,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQA+IgQhOIgOBOIgcAAIgeh7IAfAAIANBNIAShNIAWAAIASBNIAMhNIAfAAIgdB7g");
	this.shape_20.setTransform(53,10.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMA/IAAhQQAAgPgMgBQgLABAAANIAABSIgeAAIAAh7IAaAAIAAAMQAJgPAPABQAQgBAJALQAIAJAAARIAABZg");
	this.shape_21.setTransform(33.9,10.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOBRIAAh7IAdAAIAAB7gAgOg4IAAgYIAdAAIAAAYg");
	this.shape_22.setTransform(25.3,8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfAzQgMgNAAgaIAAgYQAAgYAMgOQALgOAUAAQAVAAALAOQAMAOAAAYIAAAYQAAAagMANQgLAOgVAAQgUAAgLgOgAgNgKIAAAVQAAAaANAAQAOAAAAgaIAAgVQAAgagOAAQgNAAAAAag");
	this.shape_23.setTransform(16.7,10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiBHQgMgNAAgbIAiAAQAAALACAFQAEAFAGAAQAHAAADgFQADgDAAgLIAAhyIAhAAIAAB1QAAAXgMAMQgMALgWAAQgXAAgLgLg");
	this.shape_24.setTransform(4.7,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311.3,21.1);


(lib.TextGet200ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBOIAOg/IgvAsIgYgpIA8gSIg8gRIAWgoIAxArIgOg/IArAAIgNA/IAwgrIAWAoIg8ARIA8ASIgXApIgwgsIAOA/g");
	this.shape.setTransform(492.2,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFCBQgZgdAAgtIAAhtQAAguAZgcQAagcArAAQAsAAAaAdQAZAbAAAuIAABtQAAAtgZAcQgaAdgsAAQgrAAgagcgAgZhXQgLANAAAZIAABjQAAAYAKANQAKANAQAAQARAAAKgNQAKgNAAgYIAAhjQAAgYgKgNQgKgNgRAAQgPAAgKAMg");
	this.shape_1.setTransform(473.3,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFCBQgZgcAAguIAAhtQAAguAZgcQAagcArAAQAsAAAaAdQAZAbAAAuIAABtQAAAtgZAcQgaAdgsAAQgrAAgagcgAgYhXQgLANAAAZIAABjQAAAYAKANQAJANAQAAQARAAAKgNQAKgNAAgYIAAhjQAAgYgKgNQgKgNgRAAQgPAAgJAMg");
	this.shape_2.setTransform(452,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaCbIAAg5QAxgxAggjQAVgXAJgQQAIgPAAgQQAAgQgKgKQgIgJgLAAQgfAAAAApIg/AAQAAgwAZgcQAagcArAAQApAAAaAcQAaAcAAArQAAApgYAeIhMBRIBlAAIAAA6g");
	this.shape_3.setTransform(430.6,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhhCbIAAg9IAmAAQAGgKAAgXQAAgSgLgTIgqAAIAAg1IASAAQgGgSgBgUQAAgoAagYQAagXArAAQAnAAAaAZQAaAaAAArIg/AAQgBgOgKgJQgKgIgKAAQgOAAgJAJQgIAIAAAOQAAANAKASIA+AAIAAA1IgoAAQAKAPAAAWQAAASgHAPIAIAAQAkAAgBgfIAAgQIA+AAIABAZQAAAmgYAXQgWAWgjAAg");
	this.shape_4.setTransform(409.2,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhoAtIAAhZQAAhxBoAAQBpAAgBBxIAABZQABBxhpAAQhoAAAAhxgAgfhUQgKANAAAgIAABPQAAAgAKANQAKAOAVAAQAWAAAKgOQAKgNgBggIAAhPQABgggKgNQgKgOgWAAQgVAAgKAOg");
	this.shape_5.setTransform(377.8,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeCYIAAj1IgzAAIAAg6ICjAAIAAA6IgzAAIAAD1g");
	this.shape_6.setTransform(358.5,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcCYIAAkvIBZAAQAqAAAbAaQAbAbAAAuQAAAwgdAZQgbAZgsAAIgWAAIAABqgAgdgKIAWAAQARAAAJgJQAKgKAAgXQAAgVgIgKQgJgKgSAAIgXAAg");
	this.shape_7.setTransform(331.5,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKCAQgZgbAAgzIAAjMIA/AAIAADIQAAAaAIAMQAJAMATAAQAUAAAJgMQAIgMAAgaIAAjIIA/AAIAADMQAAAzgZAbQgaAbgxAAQgwAAgagbg");
	this.shape_8.setTransform(308.5,16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhjA4IA+AAQACAZAIALQAJALATAAQAQAAAKgKQAJgKAAgQQAAgRgQgKQgKgHgcgKQgmgNgSgRQgUgVAAgiQAAgsAagaQAagZAqAAQBcAAAEBcIg9AAQAAgUgKgKQgKgKgPAAQgMAAgKAJQgIAKAAAPQAAAPAMAJQALAIAaAJQAkAMASARQAbAXAAArQAAArgcAZQgcAZgsAAQhjAAAAhmg");
	this.shape_9.setTransform(277.3,15.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhKCAQgZgbAAgzIAAjMIA/AAIAADIQAAAaAIAMQAJAMATAAQAUAAAJgMQAIgMAAgaIAAjIIA/AAIAADMQAAAzgZAbQgaAbgxAAQgwAAgagbg");
	this.shape_10.setTransform(254.8,16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAqCYIhUjBIAADBIg3AAIAAkvIA/AAIBNCxIAAixIA3AAIAAEvg");
	this.shape_11.setTransform(231.3,15.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhnAtIAAhZQAAhxBnAAQBoAAAABxIAABZQAABxhoAAQhnAAAAhxgAgfhUQgKANAAAgIAABPQAAAgAKANQAKAOAVAAQAWAAAKgOQAJgNAAggIAAhPQAAgggJgNQgKgOgWAAQgVAAgKAOg");
	this.shape_12.setTransform(207.3,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhdCYIAAkvIBdAAQAmAAAWAUQAWAUAAAlQAAA2gzAHQAhAHAPARQAPASAAAiQAAAogYAZQgYAYgmAAgAgeBhIATAAQATAAAKgIQALgJAAgVQAAgTgKgKQgKgJgQAAIgXAAgAgeggIAMAAQAjAAAAghQAAgRgJgHQgIgHgTAAIgLAAg");
	this.shape_13.setTransform(185,15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnCIQgUgVAAgkQAAgkAVgVQATgUAhAAQAhAAAUAVQAUAVAAAjQAAAkgUAVQgUAVghAAQghAAgUgVgABHA0QgJAKAAARQAAASAJAKQAIAKANAAQANAAAIgKQAJgKAAgSQAAgRgJgKQgIgKgNAAQgNAAgIAKgAhhCdICWk5IAvAAIiWE5gAiQgWQgUgVAAgkQAAgkAVgVQATgUAhAAQAhAAATAVQAUAVAAAjQAAAkgUAVQgTAVghAAQghAAgUgVgAhwhqQgJAKAAARQAAASAJAKQAIAKANAAQANAAAIgKQAIgKAAgSQAAgRgIgKQgJgKgNAAQgMAAgIAKg");
	this.shape_14.setTransform(147.4,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhFCBQgZgdAAgtIAAhtQAAguAZgcQAagcArAAQAsAAAaAdQAZAbAAAuIAABtQAAAtgZAcQgaAdgsAAQgrAAgagcgAgZhXQgLANAAAZIAABjQAAAYAKANQAKANAQAAQARAAAKgNQAKgNAAgYIAAhjQAAgYgKgNQgKgNgRAAQgPAAgKAMg");
	this.shape_15.setTransform(119.3,15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhFCBQgZgcAAguIAAhtQAAguAZgcQAagcArAAQAsAAAaAdQAZAbAAAuIAABtQAAAtgZAcQgaAdgsAAQgrAAgagcgAgZhXQgLANAAAZIAABjQAAAYAKANQAKANAQAAQARAAAKgNQAKgNAAgYIAAhjQAAgYgKgNQgKgNgRAAQgPAAgKAMg");
	this.shape_16.setTransform(98,15.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhaCbIAAg5QAxgxAggjQAVgXAJgQQAIgPAAgQQAAgQgJgKQgJgJgLAAQgfAAAAApIg/AAQAAgwAagcQAYgcAsAAQApAAAaAcQAbAcgBArQAAApgZAeIhLBRIBlAAIAAA6g");
	this.shape_17.setTransform(76.6,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeCYIAAj1IgzAAIAAg6ICjAAIAAA6IgzAAIAAD1g");
	this.shape_18.setTransform(49,15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhJCYIAAkvICTAAIAAA6IhUAAIAAA6IBUAAIAAA4IhUAAIAABJIBUAAIAAA6g");
	this.shape_19.setTransform(31.9,15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhnAtIAAhZQAAhxBoAAQBnAAAABxIg+AAQgBgdgIgNQgKgMgWAAQgVAAgKAOQgLANAAAgIAABPQAAAgALANQAKAOAVAAQAWAAAKgNQAIgMABgeIAAAAIg0AAIAAg4IByAAIAAA9QAABthnAAQhoAAAAhxg");
	this.shape_20.setTransform(10.5,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500.2,31.7);


(lib.TEXTDiscoverGamesai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD32F").s().p("AgtBlIAAjFIArAAIAAAfQAIgjAoAAIAAA1QgHgBgGAAQghAAAAAtIAABog");
	this.shape.setTransform(186.3,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD32F").s().p("AgyBSQgTgXAAgnIAAgoQAAgmASgWQASgXAhAAQAhABATAWQASAXAAAoIAAAeIhdAAIAAAEQgBAXAHALQAGAKALAAQAXAAAAgeIAvAAQAAAhgSATQgTAVghgBQggABgSgWgAgXgWIAvAAQAAgUgGgJQgGgKgMABQgVgBgCAng");
	this.shape_1.setTransform(171,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD32F").s().p("AgRBjIg6jFIAwAAIAcB+IAbh+IAwAAIg0DFg");
	this.shape_2.setTransform(155,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD32F").s().p("AgzBSQgSgXAAgnIAAgoQAAgmASgWQASgXAhAAQAhAAATAXQASAWAAAmIAAAoQAAAogSAWQgTAWghgBQggABgTgWgAgWgQIAAAhQAAAqAWAAQALAAAHgKQAFgJAAgXIAAghQAAgWgFgLQgHgJgLAAQgWAAAAAqg");
	this.shape_3.setTransform(139,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD32F").s().p("AgxBSQgSgWAAgoIAAgoQAAgmASgWQASgXAfAAQAgAAATAXQARAUAAAkIgvAAQAAgigVAAQgJAAgGAJQgFALAAAWIAAAhQAAAXAFAJQAGAKAJAAQAVAAAAgjIAAgEIAvAAIAAAEQAAAkgSAWQgSAWgggBQggABgRgWg");
	this.shape_4.setTransform(121.7,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD32F").s().p("AgwBVQgTgSgDgfIAvAAQABALAHAHQAHAGAKABQAUAAgBgVQAAgKgOgHIgdgJQgsgOgBgsQABgbASgQQARgPAfgBQA+AAAEBAIguAAQgCgXgSABQgQgBAAAPQAAALANAFQAHAEAXAGQAsAPAAAsQAAAcgUASQgTAUgfgBQgeAAgTgSg");
	this.shape_5.setTransform(104.9,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD32F").s().p("AgWCBIAAjFIAtAAIAADFgAgWhZIAAgnIAtAAIAAAng");
	this.shape_6.setTransform(92.6,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD32F").s().p("AhVCBIAAkBIBUAAQBXAAAABgIAABBQAABghXAAgAggBQIAfAAQARAAAJgLQAIgLAAgcIAAg7QAAgbgIgMQgJgLgRAAIgfAAg");
	this.shape_7.setTransform(77.7,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCCVQghgOgngdQgYgRAHgcQAFgSANgNQARgRBAAqQA+AqAXgTQANgLgLgIQgGgGgagLQhDgagNgaQgQghAHghQAHggAbgbQAmgkA6AGQA1AGAiAdQAhAegIAZQgHAUgaAFQgJACgkgaQghgZgWAMQgRAJALALQAHAHAeAPQBNAlARAbQAfA2gmAuQgkAthFACIgIABQgwAAgqgSg");
	this.shape_8.setTransform(183.9,49.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhoCPQg3gjgIg5QgIg3AphBQAohABKgWQBHgXA4AgQAvAZAEAkQADAggcAhQgbAdgqASQgrATgigFQAJBhCFhqQAOgLAQAOQAPANgIAQQggA9hVAcQgmANggAAQgtAAgmgXgAgGhIQgiAcAKANQAKALAogTQAqgTgSgUQgIgKgLAAQgOAAgRAQg");
	this.shape_9.setTransform(156.7,49.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiEqQh7gJhEhPQhOhcAkiVQAliWB0hFQBhg6B4ANQBcAKA1A5QA0A3ghAsQgUAdgnAKQglAKgTgLQgLgHAFgfQAEgcgTgFQhagchMA8QhNA6gEBdQgCAzAYAnQAXAmAoAQQBZAkBUhfQgVgJgtAAQgjABgDgMQgEgSATghQATghARgEQAmgOBEAMQBKALgEAnQgFArgZA0QghBFg1AoQgiAagyAMQgoAKgnAAIgUAAg");
	this.shape_10.setTransform(27.9,36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA3B8QgEgPABgRIACgPIAJghQAKglAGgLQAHgRgRgBQgSgBgOAXQgTAggDA9QgDAzgOALQgRAMgfgHQgggHgMgTQgNgVgCg0QgBguAGgUQACgJgHACQgHABgJAKQgZAbADA0IAEA0QgBAcgSACQgXAEgQgDQgTgEgQgNQgQgNgGgMQgFgKgFgYQgEgTAGgiIALgzQAEgUgFgEQgEgDgNAIQgKAGgIgEQgGgCgHgKQgGgJAAgOQgBgQAJgNQAIgMAfgVQAbgSAVgKQATgIAVAHQAWAJAOAYIAQgNQAagNArgCQAuAAAYAOQATAKAGATIAmgaQAvgXArAOQArAPAGAxQADAZgGAVIgNAqQgMAtAFACQAIAFA4gtQAVgPAIAFIAOAKQAJAHAAAHIAAAOQgBAHgIAKQguA4gEAEQg0AwhBADIgIAAQg6AAgOgqg");
	this.shape_11.setTransform(116.5,49.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjBB5QgSgfAAgtQAAgpANgbQAihNBIgkQA9gfBKAGQAxADAdASQAcARgKATQgnBEgDAHQgRAsAfAbQASAEAdgWIAsghQAQAJgKApQgJArgXAXQg4A3hBgCQg3gBgJggQhCAkgtAAQgwAAgZgqgAgbg7QgRANgPAYQgaAnASAMQAJAGAMgFQAOgGAOgWQAPgWADgVQAEgVgGgFQgCgCgEAAQgHAAgMAKg");
	this.shape_12.setTransform(70.5,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.8,66.6);


(lib.TEXTatWHai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWB7IAAiZIgVAAIAAgsIAVAAIAAgwIAtAAIAAAwIAVAAIAAAsIgVAAIAACZg");
	this.shape.setTransform(117.7,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BSQgOgVAAglIAAgvQAAgmAOgUQAPgVAcAAQAaAAANAVIAAgRIArAAIAADFIgrAAIAAgRQgNAVgaAAQgcAAgPgVgAgQgxQgGAKAAAXIAAAhQAAAWAGAKQAFAKALAAQAXAAAAgjIAAgvQAAgjgXAAQgLAAgFAJg");
	this.shape_1.setTransform(103.8,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsCgIAAk/IBZAAIAAE/g");
	this.shape_2.setTransform(170.6,44.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMCgIAAk/IBcAAIAADcIA9AAIAABjg");
	this.shape_3.setTransform(187,44.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVCgIAAh/IgogBIAACAIheAAIAAk/IBeAAIAABxIAoAAIAAhxIBdAAIAAE/g");
	this.shape_4.setTransform(150.6,44.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNCgIAAk/IBcAAIAADcIA/AAIAABjg");
	this.shape_5.setTransform(204.1,44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD32F").s().p("AgRAVQgEgDgBgEIgBgIIABgFQAEgKAMgHQAGgFADgBQAMgEAFAIIADAEQACAHgEAHQgCAGgHAGIgGAFQgJAHgHAAQgFgBgCgCg");
	this.shape_6.setTransform(62.7,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD32F").s().p("At2DXIgPgEQgOgEgNgGQgNgGgOgLQgKgIgLgMQgHgHgFgJQgRgagIgnQgQgIgLgOQgGgIgDgGQgKgVABgaQABgYAKgZQAJgYASgZIAKgNQAMgOALgJIATgPQAJgHANgIIAcgOQAJgFAUgIIAfgKQAMgEAXgFQAjgGAjAAIAaABIAZABIAdAFQAeAGAcALIAZAMQANAGAKAHIAWAQIgDADQgXgRgigNIgngOQgjgJgugBQgpAAgpAJQgkAIgiAMIgaALQgZAMgWARQgVAPgZAYIgMANQgKAMgIAPQgJAPgEAPQgDAKgBAIQgDAWAJAXQAFAMAFAFIAEAFIAJAHQgCgZAGgZQADgQAIgQIAKgVIALgUIAWgaQAMgLALgJQAegWAYgFIARgCIAMACQAMgHAIgDIASgHQAsgOAnAIQAKACAIAEIALAEQAIAEAJAGIAIgGQAOgIAIgCIAMgBIAGADQAFAHgJAHQgFAFgJADIgKADIgUACIgKAMIhaCjIgPAbQgNAUgMAOQgGAIgVATIAGAAQAKgBAEgCQAVgJASgSIAXgdIATgcIAWgkIA2hZQALgQAOgOQAVgWAYgRQAJgFAHgCIADgBQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgFAGIgLATIhICpIgSAfIgrAzIgRAOQAOAFAXgQQADgBAGgGIAPgPQAOgQALgPIAagkIAxhEIAhgtIAdgjIAbgbIASgPIAQgLQAwggAtAAQASAAAVAHIANAFQATALANALIAHAIQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgIgGIgYgNIgSgHQgKgDgIAAIgZgBIgJABQgJABgIADIgOAFQgQAFgOAJIgJAFIgRANIgMALIgQARIgfAlIgoAzIg6BKQgXAegHAIIgVAXIgKALQgLAKgIAEQgRALgTgCIgHgBQgDgCgEABIgJAEQgIAEgJgBIgEgBIgFgCQgHgDABgGIADgEIAGgDIAGgBQAIgCAQADQAMgMAIgOIAMgVIBFicIAHgMIgFAEIgJAJIhiCYIgOARIgJAKIgPAOQgSANgOADQgMAEgMgCIgTAJIgNAAQgFAAgHgDQgDgCgBgEQAAgEADgDIAFgDIAGgCQAJgCARADIAFgEQAFgFAIgMIAFgJIBTimQANgTALgNQATgVAFgEIAOgKQgQgKgfAAQgMAAgMADIgTAEQgVAFgRAJQAGADAEAFQAIALABANIABANQAAAOgDANIgEASQgFASgJARIgIAPQgJAPgLANIgLAMQgHAGgGADIgNAHIgIADIgPACIgKgBIgLgEIgJgFQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIgDACQgWALgagFIADAKQADANAFAJIAIAQIALAQQAGAJAJAHQAOANAMAGQANAIAUAFQANADATABIeBABIAAAKI+AABIgZgCgAtvh0QgFAAgJAEQgNAGgOAJQgUAPgLANIgKAMQgJANgIAQQgOAagFAYIgDASIAAAYIABAMQAOAHAWgHIALgFIgEgIIgCgEQgDgJgCgJIgCgJQgBgJACgKIABgIQACgLADgHQADgIADgGIANgVIAogrIAQgNIASgNIgDAAIgLABgAtkgdIAAAGIgCAHIgKAXIgTAhQgGAKgJAIIgRAQQAIAFAOgBQAUgDARgPIAHgIIANgQQAPgVAKgdQAPgqgIgiIgFgKQgEgFgGgBQgKAEgNAHQgMAIgQANIgfAfIgNAQQgHALgGAMQgMAdAGAXQACAKAGAIIAJgFIAKgKQAUgUAOgYQANgVAFgRIABAAIABACg");
	this.shape_7.setTransform(106,45.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD32F").s().p("AlgCiQgMgEgFgGQgEgHAAgIIACgPIgIAKQgeAigdgFQgKgCgGgIIgFgIIgBgIQgCgWAVgeIBch9IAsABIh3CUQgMAPgDALQgDALAGAFQAJAEAMgGQAFgCAJgIIAQgPIDFkAIAvAAIjHD3IgIAQQgEANACAFIAFAEQAHACAMgGIAMgIQAHgGAHgJIAUgWICzjtIAxAAIjJD2QgJAMgDAOIABAGIACADIADACQAIAEAJgEQANgHAKgLIASgTIB1iZIAqAAIh3CVQgMAPgEAMQgCAHACAEIADACIAHACIAFAAQAHgBAFgEIAKgGQAKgHAHgKIAJgLIALgRIAJgSIAIgPIAhgtQATgSAUgOQAQgNAUgHIAMgEQAHgCAOgCIAEABQAHAAAGAFQAHAHgDAJIAPgTIAqgBIh8CdIgEAHQgDAFgBAGQgBAIADAEIAFADQAFABAHgEIAHgFIAJgJICDieQAHgHAKgGQAYgLANANQAFAFABAHQACANgFAOIAKgJQAPgRARgKQAUgKAJABIAIACIAGAEIACAEQACAEAAAIIAAAGIgCAPIALgLQAMgMAIgEIAHgFIAMgGQALgEAKADQAIADACAEQAJAOgGAUIgHAOQgRAhgTAZIgiAvQgFAGAAAEQgEAOAJAFIAFACIAJAAQAKgBAIgFQAOgHALgNIARgWIAQgYIANgbIAKgXQAIgYAEgRIADgRQABgLAAgVIAAgMQgBgNgEgLQgDgLgIgOIgGgHIgFgFQgMgKgTgFQgegGgeAPIgKAGIgIAIQgMAPADARQABAHAFAFIADADQAFADAGAAIALgBIAJgDQAKgEAJgJQAIgKAEgJIACABIgFAQQgDAGgHAHQgFAGgGAEQgEAEgEAAQgHAEgLgBIgOgDIgGgDIgGgGIgFgIQgGgTANgXQAGgJAKgGIAIgFIANgGQAUgIAWAAQAaABAUAOIAPAOIAJANIAEAJQAGAOADASQACASgDAWIgIAnQgLApgaArQgIAOgIAKIgLAOQgPASgOAJQgKAHgJADIgFACIgJABIgJgBQgPgCgIgJQgCgCgCgEQgFgNAFgUIAHgQIAHgMIAGgLIA2hFIAJgNIACgFIABgHQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAQgBgCgFgBQgFgBgMAHIgNAKIgTATIh2CbIgrgBIB5iZIAMgPQAGgLgBgHQAAgDgCgDQgBgCgGgBQgEAAgEACQgLAHgRAQQgVATgJAMIhpCLIgtAAIB2iTIAKgNQAGgHACgGQACgNgEgFQgGgFgJAEQgFACgIAHIgKALIh8CVIgIAHQgHAHgGAEQgNAIgJgBQgLAAgGgGQgGgHAAgKQAAgDACgNIgPAPQgIAIgHAEQgSAMgNAAQgIAAgGgDQgDgBgDgEQgIgOADgTIgPAQIgKAIQgUAPgMACQgOACgKgHIgFgFQgEgIAAgIIADgQIgWAYQgNALgMAEQgLAFgNgEQgHgBgEgGQgEgFgBgDIgBgGIgBgGIACgNQgTAVgNAJQgQANgQAAIgHgBgAAyggIgJADIgIAFQgJAGgIAHIgxA2IgTAZIgaAqIgIATIgBAGIgBAFIABAEQAAADACACQAHACAIgEIAOgHQAJgFARgRIAIgJIAug+QAMgOAKgRIAGgJQAJgNACgIIACgIQAAgEgCgEQgDgDgDAAIgHABg");
	this.shape_8.setTransform(89.8,44.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD32F").s().p("AgRAVQgEgDgBgEIgBgIIACgFQADgJAMgIQAGgFADgBQAMgEAGAIIACAEQACAGgEAIQgDAHgGAFIgGAFQgJAHgHAAQgFgBgCgCg");
	this.shape_9.setTransform(87.6,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,66.9);


(lib.Sky2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2BA2BD").s().p("EhAIAfaMAAAg4lQXtlAXOhOIcdAAQQAA3PBCwQLmCIKRDHMAAAA19g");
	this.shape.setTransform(0,201);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.5,0,821,402);


(lib.Sky1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38A8C2").s().p("EhAIAK8IAAyeUAoXgHTAmNACJQa2BgW2F4IAASgg");
	this.shape.setTransform(0,84.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.5,0,821,168.9);


(lib.MOVPig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2nd ears
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662C2D").s().p("AhyCtQhNgJgwAHQgVADghgGQgmgHgUgDQgFg0AfgjQANgQAzgjQBcg8BWAnQAUAGA/AmQA5AjAtASIAdgXQgHgVghgQQgggPgEgSQgOg7AZgsQAZgrA8gTQAugOAvABQBCAAAaAnQAZAmgXA/QgDAIALgEQAKgEgFAKIlBC8IgVAJQgZAEghAAQgeAAgjgDg");
	this.shape.setTransform(161.3,-244.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(2));

	// Original ears
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#662C2D").s().p("AlODaQglgHgUgDQgFg0AfgjQANgQAzgjQBvhJBTADQBTAFCCBZIAdgXIgUg6QgLgfgFgWQgOg9AZgsQAZgrA7gTQAugOAvAAQBCABAaAnQAaAmgYA/IgLAZIgPAcIlBC8IgVAJIiRAbQhWAPg9AJIgQABQgRAAgWgEg");
	this.shape_1.setTransform(160.8,-245.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},3).wait(1));

	// 2nd flap
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#662E2D").s().p("AiSCYQhVgFgwgzQgsgwgWhAQgSg3gFhQIAvAwQBmBwCggpIBPgWQBLgDAzAHQBDAKAyAdQASALAXAUIAmAlIAJAJIAAAIIASAjIgPgOQgMgMgMgIQh6hOh+BOQg9AogsARQg2AUg1AAIgQAAg");
	this.shape_2.setTransform(12.9,-219);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#893B3D").s().p("AAID6IgigQIiHiLIhLiAIgTgzIgSgjIgBgIIgJgJIgmglQgWgWgSgLQgzgdhDgKQgzgHhLADQA4gGBvgOQBjgLBFgBQBsgCBkBqQAeAhAuAtIBQBNIBQBDQAwApAiAbQAZATAoAaIBCAqIAdAIIAKABIASAAICiAKIgoAfQiaAgiLAAQiLAAh+ggg");
	this.shape_3.setTransform(75.6,-199.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#582D2D").s().p("AifA8QgohDAgh5IAUAcQBFBlB6gIQAcgBAqgGIBFgJQg8B3iNAhQhlAAgohFg");
	this.shape_4.setTransform(-11.6,-179.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C191A").s().p("ABBB/IgegJIhFgxQgpgdgbgXQgkgcgygwIhVhQQAmANBOAVQBEAUArAWQBCAjBfA4ICfBjIAAAKQgEAAgEADg");
	this.shape_5.setTransform(109.6,-190.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B191A").s().p("Ak7DIQgigGgQgBQCOgiA8h4IA4hPQAhgxAUghQAWgjAfgQQAbgPAqgCIBugFIBvgFIBNCRQj7AIjYCjQg6ArhsAmQgLAEgQAAIgVgBg");
	this.shape_6.setTransform(23.2,-186.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

	// Pig
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8B095").s().p("AAKgDIAAAHIgTABg");
	this.shape_7.setTransform(145.1,-166.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8A3B3C").s().p("AjsFSQiCjRg6j1Qg0jiAHkJIDDhLQAfFaDWE3QDEEdEvDWQhHA+huA4IjHBbQjJiRh9jIg");
	this.shape_8.setTransform(195.2,-82);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED8179").s().p("AgGgBIAMgGIgLAPg");
	this.shape_9.setTransform(33.8,-84.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#673184").s().p("AgVBXQgPgLgKgeQgOguANgnQANgnAjgRQAoAWAKAjQAKAkgQBAIgJALQgDAEABAFIgJALQgLADgJAAQgOAAgMgJg");
	this.shape_10.setTransform(284.6,-178.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED827A").s().p("AgEgDQAEgBAEABIAAAHg");
	this.shape_11.setTransform(250.7,-128.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E96B6C").s().p("AgDgBIAHgDIAAAJg");
	this.shape_12.setTransform(179.6,-161.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA6C6D").s().p("AgEAJIABgJIAIgJIAAAJIgIAKg");
	this.shape_13.setTransform(180.6,-162);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB7070").s().p("AgEAAIAHgGIABgCIABAAIgCACIgHAPg");
	this.shape_14.setTransform(181.6,-163.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F29485").s().p("AgGAAIAKgHIADAFIgNALg");
	this.shape_15.setTransform(159.9,-169.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F49F8B").s().p("AgGAAIAAgHIANAKIgEAFg");
	this.shape_16.setTransform(251.9,-128.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE8079").s().p("AgJABIAAgKIATATg");
	this.shape_17.setTransform(249.1,-130);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE8179").s().p("AgOAAIAdgJIgBAJIgSAJg");
	this.shape_18.setTransform(157.6,-169.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC7975").s().p("AgOAAIAKgJIASAJIAAAKg");
	this.shape_19.setTransform(246.6,-130.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA9B87").s().p("AgYAEIAngRIAKAKIgxAQg");
	this.shape_20.setTransform(148.7,-167.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6F3634").s().p("Ag0AhIgIAAIgDhDIBFAAIA6ATIh1Ayg");
	this.shape_21.setTransform(149.5,-169.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E96B6C").s().p("AlBCFQhOgOgtgjQg6gsAIgpQAHgqBHgfQB7AaCRgLQBvgJCYgkQAFgBAGgEIAKgHIAAACIAUgBIAzgSIAxgLIAKAJQhcA3hxAbQheAXh7AFQglAChDgBQhJgBggABQgPABgYAFIg0AMIAYAlQAMARAJAEQA7AZASAGQArAQAjADQGTAjFUjSIAJAJIhcBOIgNgBQgIgBgFACQiRAzg3AWQgJADgLANIgTAUIgdgEQgRgDgLACQiCAUhGAFQghACgfAAQhLAAhAgMg");
	this.shape_22.setTransform(130.4,-154.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A58E85").s().p("AhPADIAygPIBrAQIACAJg");
	this.shape_23.setTransform(203.2,-10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7E7E7E").s().p("AGVB9I19AAIAAlTIV6AAIAAmJIAMgHIJLIwIpUKdg");
	this.shape_24.setTransform(116.7,107.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#807F7E").s().p("AAAgFIAIAEIgPAHg");
	this.shape_25.setTransform(179.2,-11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F19082").s().p("AgIgWIAIgCIAJAwIgRABg");
	this.shape_26.setTransform(176.2,-21.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9B9290").s().p("AgnAJIACgJIARgIIA8ARg");
	this.shape_27.setTransform(182.2,-11);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EC7672").s().p("AgOAJIAcgcIABALIgSAcg");
	this.shape_28.setTransform(31.6,-83);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F6A08C").s().p("AgEAAIAJgIIgJARg");
	this.shape_29.setTransform(366.6,-134);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ED7E77").s().p("AgJAAIAPgJIAFAGIgVANg");
	this.shape_30.setTransform(346.2,-174.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ED7B76").s().p("AgRgWIAjAhIgBAMg");
	this.shape_31.setTransform(225.3,-128.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E47F78").s().p("AhIAFIgCgHIAVgLIBNAKIAzAIIg7AJg");
	this.shape_32.setTransform(218.6,-9.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E06D6C").s().p("AiQA0IEhh0IAAAKIjSB3g");
	this.shape_33.setTransform(217.6,-16.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7B095").s().p("AhfCAIgzgKIhPgKIC+hsIEFiNQgNC3iKBkg");
	this.shape_34.setTransform(235.8,-21.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#662D2D").s().p("AAgLAQjhioiFj3Qh4jhgwknQgMhKgGhtQgHh7gEg9IATgUQAKgNAKgDQA2gWCRgzQAFgCAJABIANABQATEECVEBQDZF5GNEJIh3BoQgJAIgRALIgbARIjwBkIgyASgAnlpdQgIEJA1DiQA5D1CDDRQB8DIDJCQIDHhbQBug3BHg/QkvjVjDkdQjXk3gflag");
	this.shape_35.setTransform(196.9,-82.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ED7D79").s().p("AgCAAIAFgBIAAADg");
	this.shape_36.setTransform(376.8,-170.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2A89D").s().p("AgIAdIAAg7IARAeIgJAfg");
	this.shape_37.setTransform(347.2,-147);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EB7573").s().p("AgPAeQgBgfABgRQACgdAdgMIgOB3g");
	this.shape_38.setTransform(347.8,-153.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA7070").s().p("AgHA3IgOhnIArgHIgWBvg");
	this.shape_39.setTransform(361.1,-158.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B37265").s().p("AgJAEIABgHIASAAIAAAHg");
	this.shape_40.setTransform(150.1,-192.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A7695D").s().p("AgSAEIAAgHIAlAAIAAAHg");
	this.shape_41.setTransform(153.1,-192.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B45856").s().p("AgXgFIAvAEIgBAHg");
	this.shape_42.setTransform(146.7,-192.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9F6157").s().p("AgxgDIBjAHIhjAAg");
	this.shape_43.setTransform(160.2,-192.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8B095").s().p("AJZOqQh2gFg4hJQhNhkgmhaQgthsAChvQABhBgXg+IAAFEIljgtIiNgwIhhg2ICuiwIgJgKQhuBag4AsQjVClj0APQhbAGhUgsQhagugUhJQgShDAVg6QAWg9A+gmQBdg5BdgYQCIghBchtIAhguIgOAHIgfAbIg6AnQgiAWgaANQgZANgVgLQgUgLgDgcQgWimAMh8QAOibBDh+QA/h0BthWQBdhJCJg5QAigOA1gOIBYgZQDIgmDCAJQCYAHApAXIA8ADIAXBMIAIAAIgLAHQgGAEgEABQiaAkhwAJQiQALh5gaQhHAfgIAqQgIArA7AsQArAjBNAOQBbARBwgHQBHgFCDgUQALgCASADIAcAEQAFA9AGB7QAHBtAMBKQAvEnB5DhQCFD3DjCoIgyAQIhaABIg9gTIgJgEIggh1IgHACIAAAxQgHBxg9BhQg1BThzAAIgNAAg");
	this.shape_44.setTransform(90.2,-83.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#565656").s().p("AlUgXIKogKIABAKIheAWQg4ALgmADQg7AFhXADIiRAFIi8AIg");
	this.shape_45.setTransform(-65.9,143.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#565656").s().p("AlmgDIIBgnIDMgLIAAATIjmAiQiGAVhdANQgzAHhNAFIiBAIg");
	this.shape_46.setTransform(-68.8,111.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7E7E7E").s().p("AlphKICAgIQBNgFAzgHQBdgNCHgVIDlgkIAKE/IqoAKg");
	this.shape_47.setTransform(-68.2,124.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7E7E7E").s().p("AlxhXIHdgoIBZgFQA2gDAigFQASgCAZgKIAqgRIgTEhIjLALIoCAng");
	this.shape_48.setTransform(-68.1,94);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C2A9B1").s().p("AgCADIAFgFIgEAFg");
	this.shape_49.setTransform(287.4,-169.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BEA8AA").s().p("AgEAFQgBgFADgCIAHgCIgIAJg");
	this.shape_50.setTransform(288.6,-170.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AD83AE").s().p("AABgEQADgBADADIgGAGIgHABg");
	this.shape_51.setTransform(289,-171.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D99082").s().p("AgPAAIAAgHIAgAPg");
	this.shape_52.setTransform(223.8,-140.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E96B6C").s().p("AriLjQhMg5gKhVQgJhWA9hJQAqg0BAgnQAyggBLgeQAPgGAjgMIgPhdQgIg3gDgmQgPiuAkiKQAoieBsh4QBPhZBvg/QBhg2B/goIBIgVQDqgwDxALQB4AFBKAPQAEgCAEgBIALAoIgBADIg8gDQgKgHgmgHQhLgOiKAAQhwABh3ANIhhANIhYAZQg1AOgiAOQiHA5hdBJQhtBWg/B0QhDB+gOCbQgMB6AWCoQADAcAUALQAVALAZgNQAagNAigWIA6gnIAMAMQhcBtiIAhQhdAYhdA5Qg+AmgWA9QgVA6ASBDQAUBJBaAuQBUAsBbgGQD0gPDVilQA2gsBuhaIAJAKIisCwIBfA2IgUAJIhggmQhyBBhcAhQhzAphtACIgJAAQiSAAhnhNg");
	this.shape_53.setTransform(58.5,-98.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7A6664").s().p("Ag1gBIBrgDIhrAJg");
	this.shape_54.setTransform(194.6,-191.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A6847B").s().p("AgrgnIAJAKIACAuIBMAEIhYAUg");
	this.shape_55.setTransform(306.7,-174);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D19A87").s().p("AgsgjIABgDIBYACIAAAJIhFAAIADBCg");
	this.shape_56.setTransform(145.6,-170.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DCA08B").s().p("AgxgEIABgIIBiAAIgqAZg");
	this.shape_57.setTransform(155.1,-172.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E8A68F").s().p("AgngDIAggMIAvAeg");
	this.shape_58.setTransform(268.1,-213.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#673185").s().p("AgrAbQgFghACgXQABgMARgQIAcgbQAIAJAUARQARAQABAMQADAXgEAhIgHA6IhIABIgJg6g");
	this.shape_59.setTransform(311.3,-185.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E96B6C").s().p("AA3ACQgdgCi0AAQgYAAgigHIg6gNIACgaIErgCICXAoIBZAvIgKAKQhXgmh3gJg");
	this.shape_60.setTransform(218.9,-136);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E96B6C").s().p("AjaAbQBMguBBgWQBNgbBNAEQBlAGApBSImvAqg");
	this.shape_61.setTransform(310,-210.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4D9D9").s().p("Ag6CRIgLg9QgHgkgOgRQgdgggxgtQg5gygcgaIA1geIAHAoIGvgqQAwCahdBzQgVAbgkAHQgRAEgyABIAIg7QAEgjgDgWQgCgMgQgQQgVgQgIgJIgdAZQgPAQgBANQgDAWAFAjIAJA7IguAAg");
	this.shape_62.setTransform(308.2,-192.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E96B6C").s().p("AkYAAQAThfBrguQDShbDkByIn2EsQhQhWAShgg");
	this.shape_63.setTransform(240.8,-193.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F5D9D9").s().p("AlEB2QgLgJgNgPIgXgaIH1ksQAhAVBEAmQA8AjAkAdQAsAjABA5QABA1glA+QgDgDgEACQAQhDgJghQgKgkgogWQgmASgNAnQgNAlAPAvQAJAeAQAMQARANAdgHQgsAyhBAZQg3AWhKAGQgcACgaAAQjDAAiRhzg");
	this.shape_64.setTransform(256.1,-181.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8A3B3C").s().p("ApXD/QBblhFFh0QDZhODOBJQCpA8C/CwIhfAmQiigZixAsQipArhICKg");
	this.shape_65.setTransform(208.6,-220.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F8B095").s().p("Al4ApQiUj+gTkFIBchQIAKgKIAJgSIgTARIgKACQlUDUmVgjQgigDgsgPQgRgHg7gZQgKgDgLgSIgZgmIA0gNQAZgFAOAAQAggCBJACQBEAAAlgCQB6gEBhgYQBwgbBdg3IAUgJIAPgMIgDgGIgMAHIgeALIgxALIgLgKIA6gWIAqgbIFvAAQAfDaDdBnIABAIIktADIgDAaIA6AMQAjAHAXABQC3ABAdACQB1AKBXAlIAyAVIAKAJIALAIIAEgGIgPgLQgFgBgFABIgUgVIhtg6QAzAABnADQBbACA9gJQCIgTBehcQBchYAWiAIBagTICBgPIDSgHIAAAKQiPBRg6CqQgaBNAFBGQAGBJApAvQA1AIBBgXQAmgNBKggQAfgNAvgUIBNgjIAAAKIhtCFQhABPgwAyQgmAmg9A0QhFA4ggAdQj6gTjUhIQjghLi9iKIhehKIgjgjIAiAvQBwCACYBWQCKBQCwAzQBBATBjASICnAdQggAegVAQQlSDwjkCfQgMAJgUAIIgjAPQmLkIjcl8g");
	this.shape_66.setTransform(225.4,-105.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8B8A8A").s().p("AgUgIIAnAAIADAIIgXAJg");
	this.shape_67.setTransform(325.3,9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5D5D5D").s().p("AgngIIBiAAIhNARIgoAAg");
	this.shape_68.setTransform(-79.8,163);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6E6E6E").s().p("AgnAKIAHgKQAEgHADAAIAfgCIAhABIgTASg");
	this.shape_69.setTransform(-87.8,163);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#565656").s().p("ADjAdIjPgNIjNgOIhPgCIBPgSIGGgKQAMAAARAEIAcAGIADAaIgTAOQgLAHgHAAIgBAAg");
	this.shape_70.setTransform(-55.3,164);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AAAAAA").s().p("AmADTQAIhTBdiKQBdiNBihNIHKBRIATATQhAAVgtA8QgXAfgsBVQgPAegRAuIgfBUg");
	this.shape_71.setTransform(286.5,22.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AAAAAA").s().p("AjcAQQhWiGg8iZIIbAAQAmCgAfBWQAyCHBLBmImIA8Qhwh8hTiEg");
	this.shape_72.setTransform(279.7,208.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#555655").s().p("AAHLeIgUgfQgNgSgGgOQhQjCgQkGQgLiiABhGQAFk6BBjyQAQg5ALgbQAUgtAbgcIAXgEIAcA2QAQAgAEAXQAeC0AVDCQANB1gDBlIgMFOQgLDAglCMQgGAWgQAeQgTAhgJARg");
	this.shape_73.setTransform(325.1,108);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#AAAAAA").s().p("AjoESQhZkMAKkYIJMATIAkIRg");
	this.shape_74.setTransform(263.5,145.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#AAAAAA").s().p("AlOE0IB4pnIIlAiIhJJFg");
	this.shape_75.setTransform(265,80.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AAAAAA").s().p("ACyTzQkvgJkAgoQkmguj9haQh+gshbgtQhxg4hVhFQgmgegKgkQgShCgXhfIgmiiIggj4IgKk/IAVlyIA0l3IBrgzQBAggArgTQGYi0GhhNQBUgPB9gQIDPgaQAzBIATAYQAwA9BHAcQA+AXBUABQA7AAAwghQAngcAlg2QAPgVARgiIAfg6ICpAAICiAKIFxAoIDKAiQiZCehRCuQiDEbgbEtQgLCCgEBJQgGBvACBbQAKEMBGDdQBODzCaDEQAUAaAiAlIA7BBQhHANgjADIjwAXQiOANhjAFIl1APQh8AEhrAAQhMAAhEgCgAv6AgIV+AAIAAHqIJUqeIpLowIgMAIIAAGJI17AAg");
	this.shape_76.setTransform(118.4,116.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7C6B4").s().p("AgDgDIAHgBIgGAJg");
	this.shape_77.setTransform(384.6,-149.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F09189").s().p("AgDgEIADABIAEAIg");
	this.shape_78.setTransform(379.7,-167.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EC7D7B").s().p("AgDgJIAHAAIABAJIgJAKg");
	this.shape_79.setTransform(383.7,-149);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F7C6B4").s().p("AgDAJIACgSIAEATg");
	this.shape_80.setTransform(384.5,-158);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#ED8580").s().p("AgDAAIAAgDQABgDgCgDIAIAKIABAJg");
	this.shape_81.setTransform(377.6,-170.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EF9992").s().p("AgJAAIATgIIgTARg");
	this.shape_82.setTransform(382.2,-147);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F0908A").s().p("AADAJIgKgJIAAgIIAPARg");
	this.shape_83.setTransform(379,-169);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EF938C").s().p("AAAgPIABARIgBAOg");
	this.shape_84.setTransform(384.1,-159.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EF918B").s().p("AgHAjIAHhEIAAAAIAAgBIAAABIAIABIAABCIgIABg");
	this.shape_85.setTransform(384.1,-153.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E3716F").s().p("AgmgFIA4gTIAVAcIgeAVg");
	this.shape_86.setTransform(271.2,-214.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EB7A76").s().p("AhPgSIAUgJICLAuIgUAJg");
	this.shape_87.setTransform(71.2,-25.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#816A67").s().p("Aj5APIAogPIAJgOQACADABAFIAxALIGOACIAAAIg");
	this.shape_88.setTransform(164.1,-192.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E96C6C").s().p("AD+E+QhVgBg9gXQhIgbgug9QgTgZgzhIIguhfIgFAOIl5g5IAUgJIFlArIAAlCQAXA+gBBBQgCBvAtBqQAmBaBLBkQA4BJB2AFQB9AFA4hYQA9hhAHhxIATgBIAUBDIgIANIgCAKIgeA5QgSAigPAWQgkA2goAcQgvAgg6AAIgBAAg");
	this.shape_89.setTransform(128.2,-19.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#565656").s().p("AlyAUIAEgKIBIgOQAsgIAdgDIJQg2IgCA7IgrAPQgZALgRACQgjAFg2ADIhYAEIndApg");
	this.shape_90.setTransform(-67.9,78);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7E7E7E").s().p("AkhByIgcg6IgehvIC8gIICTgEQBVgDA7gFQAmgEA4gNIBegVIAcDQIgcgGQgRgEgMAAImGAKIhkAAIghgBIghABQgDABgEAHIgHALg");
	this.shape_91.setTransform(-63.8,152.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E96B6C").s().p("AsjM4IA7gJICtAOQCJhjANi5IkHCNIAAgKIAbgRQARgKAJgIIB3hpIAjgOQAUgJANgIQDkigFPjwQAWgPAfgeIimgeQhhgShCgRQiwgziJhPQiZhZhwiAIACgMIBeBKQC9CKDfBNQDUBID4ARQAggaBFg5QA+g0AlgoQAwgyBBhPIBsiFIAKgTIgKAJIhNAjQgvAUgfANQhJAggnANQhBAXg1gHQgpgwgGhJQgFhGAahNQA6iqCPhRIAWgOIgEgGIgRAKIjSAHIBvgaICEgCQBPgBA2ADQAaABAkAKIA+ASIgUADQgMABgHgCQhfgThaAfQhRAbhBBAQg9A8geBLQgeBLALBDQADAUALAfIAXA7IBOgYQApgNAbgMIC3haIC3hcIAAAJQgeAXgZAkQgRAYgYAvQgtBUhJBQQg9BChYBHQieB+jlCzImOE5QgYCphbCDIhAA7g");
	this.shape_92.setTransform(300.7,-90.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F7C6B4").s().p("AkQC9QgMgfgDgUQgLhDAehJQAehLA9g8QBBhABRgbQBYgfBfATQAHACAMgBIAUgDIAdATQACADgBADIgHABIAHAEIAoApIAVAoIAHALIACAmIgKBHIgBASIgUAKIi3BcIi1BaQgaAMgqANIhOAYIgWg7gAhXg+QgBARABAhIAAA6IAIACIALggIAOh3QgfAMgCAdgAAmiRIAOBpIAHABIAYhxg");
	this.shape_93.setTransform(355,-148.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#662C2D").s().p("AoUEVIhtgEQgBgGgCgCQAxioCEipIAegiQArgpBEgpQBEgpBEgZQAigNAVgEQC/giCfA0QDdBIDAC7QAHAHAGAWIhaAfIgxgKIBfgmQi/iwiqg8QjNhJjZBOQlFB0hbFhIIMAAIgIAdIldAAg");
	this.shape_94.setTransform(208.5,-220.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7E7E7E").s().p("Aw2EYIEog8QCtgjBvgYQBJgQASgWQATgWAFhJIAIgtQKhlnMbhYIAfA7IjSAbQh9APhUAQQmgBNmWC0QgsATg/AfIhrAyIg0F2IpSA3QgdACgsAJIhIAPg");
	this.shape_95.setTransform(7.7,32.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6F6162").s().p("ABeHRQhlgEgzAAIh2ggIgigQQjdhngfjaIotgDIgLgoIABgKIgLh1IH1AAIBugLIAIgdQBIiKCrgrQCxgsCgAZICCAfIAegWQBig5A7gcQBZgqBQgRQBfgUBIAPQBTARA/BAQBbBegJCAQgJBzhOBQIghAeIhvAbIiBAOIhPgEIgCgwIB4gBQAygBARgDQAkgIAVgaQBdh0gwiaQgphUhmgGQhNgEhPAbQhBAWhMAwIg1AdQAcAbA5AxQAxAtAdAiQAOARAHAkIALA7IAABSQgWCAhcBYQheBbiIAUQgyAHhGAAIggAAgAiyjyQhrAugTBhQgSBgBQBUIAXAaQAOAPALAJQCkCCDlgRQBLgGA3gWQBBgZAsgzIAVgUIAGgJQAmg+gBg1QgCg5grgjQglgdg7gjQhEgmghgVQh/g/h6AAQhfAAheAog");
	this.shape_96.setTransform(243.2,-183.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7E7E7E").s().p("AlLT2QljgnkvheQikgyh3g4QiShEhvhaQgggagOgpQgPgugThDIgih0IofAAIg9iCIBuAAIBPADIDPAOIDPANQAIAAALgHIATgOIAmCiQAXBfASBCQAKAkAlAeQBWBFBxA4QBbAtB9AsQD+BaEmAuQEAAoEvAJQCiAFDUgHIF2gPQBjgFCNgNIDwgXQAjgDBIgNIg8hBQghglgUgaQiajEhOjzQhHjdgJkMQgDhbAHhvQAEhJALiCQAbktCCkbQBSiuCZieIjKgiIBAg7QJgBsCxAiQATAEAUAPQAUAQAGARQAmBqAOAqQAbBUANBDQBuIxgnJKQgKCXgUByQgYCNgsB1QgSAxgtBWQgrBQhQApQg9AfhpAQQmTA/lAAfQmEAnlUABIgrABQlZAAkYgfgATmOKQBTCEBxB8IGKg8QhLhmgyiJQgfhWgnihIodAAQA9CaBVCIgAeRtKQgdAcgUAtQgLAbgQA5QhBDygFE7QgBBHALChQAQEFBQDCQAGAOANASIAWAfIAVABQAJgRATghQAQgeAGgVQAliMALjBIAMlNQADhmgNh1QgVjCgei0QgEgXgQggIgcg2gAQ5IbIIjAAIgkoUIpOgQQgKEXBZENgAPihLIJVAAIBJpGIongigATsvOQheCNgIBTIIUASIAfhUQASgvAOgdQAshYAXgeQAtg8BBgVIAYgLIgCgIIgqAAInLhRQhiBMhdCNg");
	this.shape_97.setTransform(132,119.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(4));

	// Original flame
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F9CB77").s().p("AAAAEIgCAAIAAgHIAGAHg");
	this.shape_98.setTransform(-131.2,77.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FCDEA3").s().p("AgEgCIAIABIgEAEg");
	this.shape_99.setTransform(-130.4,79.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFF9EF").s().p("AgIgEIAJAAIAEAAIAEAAIAAAJg");
	this.shape_100.setTransform(-131.8,78.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FEEFD3").s().p("AgIADIAAgGIARAAIAAAHg");
	this.shape_101.setTransform(-186.9,100.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F8B265").s().p("AgKAAIAVgDIAAAHg");
	this.shape_102.setTransform(-216.9,105.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FCE7BE").s().p("AgJAEIAAgHIASAAIAAAHg");
	this.shape_103.setTransform(-184.9,100.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FCDFA4").s().p("AgOgDIAdAAIAAAHIgdAAIAAgHg");
	this.shape_104.setTransform(-182.4,100.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F8B265").s().p("AgDAGIABgMIAGAFIAAAHg");
	this.shape_105.setTransform(-147.3,71.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F7A260").s().p("AgTAEIAAgHIAnAAIAAAHg");
	this.shape_106.setTransform(-242.8,97.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F8AD64").s().p("AgXgDIAvAAIAAAHg");
	this.shape_107.setTransform(-247.3,97.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F8B667").s().p("AgJAAIATgDIAAAHg");
	this.shape_108.setTransform(-195.9,116.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F69B5E").s().p("AgIAFIARgJIAAAJg");
	this.shape_109.setTransform(-147.8,145.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F8AA63").s().p("AgUACIAfgLIAJAJIgkAKg");
	this.shape_110.setTransform(-165.9,131.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F38457").s().p("AgEgEIAJAHIgIACg");
	this.shape_111.setTransform(-146.4,145.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F8AB62").s().p("AgGgBIAKgBIADAFg");
	this.shape_112.setTransform(-126.2,85.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F8B666").s().p("AgJAEQABgEgBgDIASAAQABADgBAEg");
	this.shape_113.setTransform(-164.9,99.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F8A661").s().p("AgJAEQABgEgBgDIASAAQABADgBAEg");
	this.shape_114.setTransform(-162.9,99.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F48F5B").s().p("AgEAAIABgJIAIAJIgCAKg");
	this.shape_115.setTransform(-146.4,72.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F69A5E").s().p("AgIAEIAAgHIASAAQgBADABAEg");
	this.shape_116.setTransform(-193.8,116.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F6995D").s().p("AgJgDIATADIgTAEg");
	this.shape_117.setTransform(-137.8,109.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F5965C").s().p("AgIAEIAAgHIARAAIAAAHg");
	this.shape_118.setTransform(-214.8,105.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FBD68B").s().p("AgIADIAAgHIASAIIgRABg");
	this.shape_119.setTransform(-179.9,100.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F7A260").s().p("AgIABIAMgMIAFAWIgJABg");
	this.shape_120.setTransform(-139.8,55.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F5925B").s().p("AgKgDIAVACIAAADIgVACQABgEgBgDg");
	this.shape_121.setTransform(-160.8,99.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FCE2AF").s().p("AgOADQABgDgBgCIAdAGg");
	this.shape_122.setTransform(-152.5,110.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F8BA67").s().p("AgKAAIAKgJIALASIgLABg");
	this.shape_123.setTransform(-126.9,84);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F8B365").s().p("AgNAEIAAgHIAbAAIAAAHg");
	this.shape_124.setTransform(-140.4,109.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FEF3E0").s().p("AgSgDIAlAAQABADgBACIglACg");
	this.shape_125.setTransform(-155.9,110.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F5965C").s().p("AghAEIAAgHIBDAAIAAAHg");
	this.shape_126.setTransform(-237.3,97.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F8BD68").s().p("AgJgHIAmgBIAAAIIg5AJg");
	this.shape_127.setTransform(-144.9,110);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F38858").s().p("AgrAAIAvgIIAoAIIhOAJg");
	this.shape_128.setTransform(-160.3,130.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F9CA7D").s().p("AgDADIAAgGIAIAAIgBAHIgHgBg");
	this.shape_129.setTransform(-256.3,96.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgFAEIAAAAIAHgHIAEAAIgBAHg");
	this.shape_130.setTransform(-132.2,77.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FCE0A8").s().p("AgIgDIASAAIAAAHIgTABg");
	this.shape_131.setTransform(-279.9,97.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FBDB9A").s().p("AgJAEIAAgHIATAAIAAAHg");
	this.shape_132.setTransform(-277.8,97.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FEF6E8").s().p("AgIAEIAAgGIASAAIAAAGg");
	this.shape_133.setTransform(-188.9,100.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FBD68B").s().p("AgIAEIAAgHIASABIAAAGg");
	this.shape_134.setTransform(-275.8,97.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FBD88F").s().p("AgCgGIAGAGIAAAJgAgEgIIABAAIABACg");
	this.shape_135.setTransform(-150.3,44);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FCE6BA").s().p("AABAIIgKgPIATAPg");
	this.shape_136.setTransform(-151,66.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FCE6BA").s().p("AAIgKIAAAKIgQALg");
	this.shape_137.setTransform(-155.7,154.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDgBIAHgFIgBANg");
	this.shape_138.setTransform(-109.4,155.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F9CD6D").s().p("AgEAAQAAgCADgFIAGAIIgIAHQABgFgCgDg");
	this.shape_139.setTransform(-113.4,173.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FEEED1").s().p("AgLABIAXgDIAAAFg");
	this.shape_140.setTransform(-254.1,105.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FCE2AF").s().p("AgDAEIAGgKQACADgBADIgEAHg");
	this.shape_141.setTransform(-114.3,174.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FEF3E0").s().p("AgHAAIAQgFQgBAEABACIgOAFg");
	this.shape_142.setTransform(-189.7,134.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAD486").s().p("AgNAEIAAgHIAcABIAAAGg");
	this.shape_143.setTransform(-248.3,105.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCE0A7").s().p("AgNADIAAgFIAbgBIAAAHg");
	this.shape_144.setTransform(-251.3,105.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FDE7BE").s().p("AgNgDIAbAAIAAAIg");
	this.shape_145.setTransform(-282.3,97.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F9CD6E").s().p("AAAgHIATAAIgKAPIgbAAg");
	this.shape_146.setTransform(-221.8,117);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FEF1DC").s().p("AgRAJIgCgHIAngKIgKARg");
	this.shape_147.setTransform(-287.9,98);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F9CA7D").s().p("AgmAEIAAgHIBNAHg");
	this.shape_148.setTransform(-254.9,98.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FBD488").s().p("AgoADIBRgGIAAAHg");
	this.shape_149.setTransform(-261,96.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FDEAC7").s().p("AgbAJIgBgJIA5gIIgcARg");
	this.shape_150.setTransform(-228.8,117);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F9CD6E").s().p("AgagIIAzAAIACAHIgYAKg");
	this.shape_151.setTransform(-148.3,123);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FBD488").s().p("AgtgCIBbgBIAAAHIhXAAg");
	this.shape_152.setTransform(-263.5,98.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FBDC9B").s().p("AgEgIIAmABIgTAPIgwABg");
	this.shape_153.setTransform(-225.3,117);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFAF2").s().p("AgwAHIBNgOIAUAAIAAAHIgmAJg");
	this.shape_154.setTransform(-162.9,111.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FBD78D").s().p("AgrAAIAwgHIAoAHIhYAIQgBgEABgEg");
	this.shape_155.setTransform(-184.3,134);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F9CD6E").s().p("AhCAEIBHgJIA+ACIhPAJg");
	this.shape_156.setTransform(-168.4,112.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FAD17B").s().p("AhPAEIAAgGICfgBIgBAHg");
	this.shape_157.setTransform(-266.8,97.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FEEED2").s().p("AhUgIIAUAAIAeAIIB+ABIADAHIi9ABg");
	this.shape_158.setTransform(-277.3,98);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F9CD70").s().p("AgtgdIAJAAIBSA4IgPADIgcgMIgIgJIgIgEIgDAZg");
	this.shape_159.setTransform(-146.2,70.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F9C96D").s().p("AAnAGIg6AAIgegEIhFgPIDtAKIgTAQIgfABg");
	this.shape_160.setTransform(-157.9,109.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F9CA6E").s().p("AhQg0IAQgDQAFABACADIAKAIIBEAmIAAABIATAJIAAgBIABABIgBAAIAFAGIAFgGIABgKIAdAyIgLALg");
	this.shape_161.setTransform(-134.9,78.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F7B967").s().p("AifAIIhPgIIgBAAIABgIIAUgBIAJABIA9AAIAyAIIBsAAIC3ABQAKAAAOADIAXAGg");
	this.shape_162.setTransform(-234.9,98);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FACE75").s().p("AhkA3IA7hOIABALIAUAAIAKgCIBvgxIjJB/g");
	this.shape_163.setTransform(-144.7,147.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F9C96C").s().p("ABLAAIkrgJIHAAAQABAFgBAEIiBAJg");
	this.shape_164.setTransform(-188.4,100);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F9CC6F").s().p("AATCuIAAgLIgHgJIgEAAIixk+IgBgJIFUEWIjliWIgFgXIgOANIAIALIBjDOIgBAMIgJAAgAASCuIABAAIAAAAgAATCug");
	this.shape_165.setTransform(-132.8,61.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F9CB6E").s().p("AgIC9IAsiqIABgPIgJAFIiKBlIAUk0IAICSIAABkICLhYIAMAMIggCXIBLgiIhxBug");
	this.shape_166.setTransform(-112.7,154);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F9CD70").s().p("Ah0AVIkugPIAAgGII4grIBaAAIABADIjaAcIhvALIgTAAIgYADIAYAEIATAAIG2AVIBFARIoXgXg");
	this.shape_167.setTransform(-204.9,105.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F9CC6D").s().p("ApTB9IAAgJIR6hCIgJgqIgIgMQgDgDABgDIgIgOQgDgDABgEIgIgMQgCgEAAgEIgHgMQgDgEAAgEIgHgNQgDgDAAgFIgHgMQgDgDABgGIAAgLIAJAAIAKAMIBeDHIgPAEIgMADIuwAfg");
	this.shape_168.setTransform(-196.2,84.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F9CC6E").s().p("AEUCaIBciGImPAYIgogJIFkhaIAYgLIgCgIIg1AAIq3gqIAJgQIBDgDIA+gIIBFgCIC/gSIBvgBIjlAeIgUAAIgWAGIAWADIAUAAIIlAwIAAAKIjdBAIgyAIIghANIAEAIIAmgMIBRgKIDrgPIiSClIAAAAIgTALg");
	this.shape_169.setTransform(-176.5,129.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F38457").s().p("AJOGKIAOglIgaAZIiNBaIAAhmIgIiSIh/BFIhxAxIgKgJICSimIjrAQIgpgJIDehAIAAgKIomgvQgBgFABgFIE2goIAlgHIAogCIA9AAIA8gJIAdAAIAWgGIgWgEIkzgJIm4gWIAAgIIBxgLIDagcICUgMIA9gCIAAgGIgWgCInoAAIgXgFQgOgEgKAAIi3gBIAAgJIOwgfIALgDIAQgEIhfjJIACgNIAcAMICWBuIALAKIAOAGIgCgHIgphIIhljQIALgBIDnCYIBrBPIACE3IAEA5IArDwIAsCsIg5AwIhLAig");
	this.shape_170.setTransform(-164.8,111.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F38457").s().p("AJOGKIAOglIgaAZIiNBaIAAhmIgIiSIh/BFIhxAxIgKgJICSimIjrAQIgpgJIDehAIAAgKIomgvQgBgFABgFIE2goIAlgHIAogCIA9AAIA8gJIAdAAIAWgGIgWgEIkzgJIm4gWIAAgIIBxgLIDagcIDRgOIAAgGIgWgCInoAAIgXgFQgOgEgKAAIi3gBIAAgJIOwgfIALgDIAQgEIhfjJIACgNIAcAMICWBuIALAKIAOAGIgCgHIgphIIhljQIALgBIDnCYIBrBPIACE3IAEA5IArDwIAsCsIg5AwIhLAig");
	this.shape_171.setTransform(-150.8,115.7,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_170},{t:this.shape_169,p:{skewX:0,x:-176.5,y:129.6,scaleX:1,scaleY:1}},{t:this.shape_168,p:{skewX:0,x:-196.2,y:84.5,scaleX:1,scaleY:1}},{t:this.shape_167,p:{skewX:0,x:-204.9,y:105.3,scaleX:1,scaleY:1}},{t:this.shape_166,p:{skewX:0,x:-112.7,y:154,scaleX:1,scaleY:1}},{t:this.shape_165,p:{skewX:0,x:-132.8,y:61.5,scaleX:1,scaleY:1}},{t:this.shape_164,p:{skewX:0,x:-188.4,y:100,scaleX:1,scaleY:1}},{t:this.shape_163,p:{skewX:0,x:-144.7,y:147.4,scaleX:1,scaleY:1}},{t:this.shape_162,p:{skewX:0,x:-234.9,y:98,scaleX:1,scaleY:1}},{t:this.shape_161,p:{skewX:0,x:-134.9,y:78.5,scaleX:1,scaleY:1}},{t:this.shape_160,p:{skewX:0,x:-157.9,y:109.5,scaleX:1,scaleY:1}},{t:this.shape_159,p:{skewX:0,x:-146.2,y:70.1,scaleX:1,scaleY:1}},{t:this.shape_158,p:{skewX:0,x:-277.3,y:98,scaleX:1,scaleY:1}},{t:this.shape_157,p:{skewX:0,x:-266.8,y:97.5,scaleX:1,scaleY:1}},{t:this.shape_156,p:{skewX:0,x:-168.4,y:112.4,scaleX:1,scaleY:1}},{t:this.shape_155,p:{skewX:0,x:-184.3,y:134,scaleX:1,scaleY:1}},{t:this.shape_154,p:{skewX:0,x:-162.9,y:111.1,scaleX:1,scaleY:1}},{t:this.shape_153,p:{skewX:0,x:-225.3,y:117,scaleX:1,scaleY:1}},{t:this.shape_152,p:{skewX:0,x:-263.5,y:98.4,scaleX:1,scaleY:1}},{t:this.shape_151,p:{skewX:0,x:-148.3,y:123,scaleX:1,scaleY:1}},{t:this.shape_150,p:{skewX:0,x:-228.8,y:117,scaleX:1,scaleY:1}},{t:this.shape_149,p:{skewX:0,x:-261,y:96.5,scaleX:1,scaleY:1}},{t:this.shape_148,p:{skewX:0,x:-254.9,y:98.4,scaleX:1,scaleY:1}},{t:this.shape_147,p:{skewX:0,x:-287.9,y:98,scaleX:1,scaleY:1}},{t:this.shape_146,p:{skewX:0,x:-221.8,y:117,scaleX:1,scaleY:1}},{t:this.shape_145,p:{skewX:0,x:-282.3,y:97.5,scaleX:1,scaleY:1}},{t:this.shape_144,p:{skewX:0,x:-251.3,y:105.5,scaleX:1,scaleY:1}},{t:this.shape_143,p:{skewX:0,x:-248.3,y:105.5,scaleX:1,scaleY:1}},{t:this.shape_142,p:{skewX:0,x:-189.7,y:134.7,scaleX:1,scaleY:1}},{t:this.shape_141,p:{skewX:0,x:-114.3,y:174.7,scaleX:1,scaleY:1}},{t:this.shape_140,p:{skewX:0,x:-254.1,y:105.5,scaleX:1,scaleY:1}},{t:this.shape_139,p:{skewX:0,x:-113.4,y:173.9,scaleX:1,scaleY:1}},{t:this.shape_138,p:{skewX:0,x:-109.4,y:155.2,scaleX:1,scaleY:1}},{t:this.shape_137,p:{skewX:0,x:-155.7,y:154.1,scaleX:1,scaleY:1}},{t:this.shape_136,p:{skewX:0,x:-151,y:66.1,scaleX:1,scaleY:1}},{t:this.shape_135,p:{skewX:0,x:-150.3,y:44,scaleX:1,scaleY:1}},{t:this.shape_134,p:{skewX:0,x:-275.8,y:97.5,scaleX:1,scaleY:1}},{t:this.shape_133,p:{skewX:0,x:-188.9,y:100.5,scaleX:1,scaleY:1}},{t:this.shape_132,p:{skewX:0,x:-277.8,y:97.5,scaleX:1,scaleY:1}},{t:this.shape_131,p:{skewX:0,x:-279.9,y:97.5,scaleX:1,scaleY:1}},{t:this.shape_130,p:{skewX:0,x:-132.2,y:77.4,scaleX:1,scaleY:1}},{t:this.shape_129,p:{skewX:0,x:-256.3,y:96.6,scaleX:1,scaleY:1}},{t:this.shape_128,p:{skewX:0,x:-160.3,y:130.1,scaleX:1,scaleY:1}},{t:this.shape_127,p:{skewX:0,x:-144.9,y:110,scaleX:1,scaleY:1}},{t:this.shape_126,p:{skewX:0,x:-237.3,y:97.5,scaleX:1,scaleY:1}},{t:this.shape_125,p:{skewX:0,x:-155.9,y:110.6,scaleX:1,scaleY:1}},{t:this.shape_124,p:{skewX:0,x:-140.4,y:109.5,scaleX:1,scaleY:1}},{t:this.shape_123,p:{skewX:0,x:-126.9,y:84,scaleX:1,scaleY:1}},{t:this.shape_122,p:{skewX:0,x:-152.5,y:110.6,scaleX:1,scaleY:1}},{t:this.shape_121,p:{skewX:0,x:-160.8,y:99.5,scaleX:1,scaleY:1}},{t:this.shape_120,p:{skewX:0,x:-139.8,y:55.8,scaleX:1,scaleY:1}},{t:this.shape_119,p:{skewX:0,x:-179.9,y:100.6,scaleX:1,scaleY:1}},{t:this.shape_118,p:{skewX:0,x:-214.8,y:105.5,scaleX:1,scaleY:1}},{t:this.shape_117,p:{skewX:0,x:-137.8,y:109.5,scaleX:1,scaleY:1}},{t:this.shape_116,p:{skewX:0,x:-193.8,y:116.5,scaleX:1,scaleY:1}},{t:this.shape_115,p:{skewX:0,x:-146.4,y:72.1,scaleX:1,scaleY:1}},{t:this.shape_114,p:{skewX:0,x:-162.9,y:99.5,scaleX:1,scaleY:1}},{t:this.shape_113,p:{skewX:0,x:-164.9,y:99.5,scaleX:1,scaleY:1}},{t:this.shape_112,p:{skewX:0,x:-126.2,y:85.3,scaleX:1,scaleY:1}},{t:this.shape_111,p:{skewX:0,x:-146.4,y:145.5,scaleX:1,scaleY:1}},{t:this.shape_110,p:{skewX:0,x:-165.9,y:131.1,scaleX:1,scaleY:1}},{t:this.shape_109,p:{skewX:0,x:-147.8,y:145.5,scaleX:1,scaleY:1}},{t:this.shape_108,p:{skewX:0,x:-195.9,y:116.5,scaleX:1,scaleY:1}},{t:this.shape_107,p:{skewX:0,x:-247.3,y:97.5,scaleX:1,scaleY:1}},{t:this.shape_106,p:{skewX:0,x:-242.8,y:97.5,scaleX:1,scaleY:1}},{t:this.shape_105,p:{skewX:0,x:-147.3,y:71.3,scaleX:1,scaleY:1}},{t:this.shape_104,p:{skewX:0,x:-182.4,y:100.5,scaleX:1,scaleY:1}},{t:this.shape_103,p:{skewX:0,x:-184.9,y:100.5,scaleX:1,scaleY:1}},{t:this.shape_102,p:{skewX:0,x:-216.9,y:105.5,scaleX:1,scaleY:1}},{t:this.shape_101,p:{skewX:0,x:-186.9,y:100.5,scaleX:1,scaleY:1}},{t:this.shape_100,p:{skewX:0,x:-131.8,y:78.4,scaleX:1,scaleY:1}},{t:this.shape_99,p:{skewX:0,x:-130.4,y:79.3,scaleX:1,scaleY:1}},{t:this.shape_98,p:{skewX:0,x:-131.2,y:77.4,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_171,p:{scaleX:1,scaleY:1,skewX:180,x:-150.8,y:115.7}},{t:this.shape_169,p:{skewX:180,x:-162.6,y:97.8,scaleX:1,scaleY:1}},{t:this.shape_168,p:{skewX:180,x:-182.3,y:142.8,scaleX:1,scaleY:1}},{t:this.shape_167,p:{skewX:180,x:-190.9,y:122,scaleX:1,scaleY:1}},{t:this.shape_166,p:{skewX:180,x:-98.7,y:73.3,scaleX:1,scaleY:1}},{t:this.shape_165,p:{skewX:180,x:-118.8,y:165.8,scaleX:1,scaleY:1}},{t:this.shape_164,p:{skewX:180,x:-174.4,y:127.3,scaleX:1,scaleY:1}},{t:this.shape_163,p:{skewX:180,x:-130.7,y:79.9,scaleX:1,scaleY:1}},{t:this.shape_162,p:{skewX:180,x:-220.9,y:129.3,scaleX:1,scaleY:1}},{t:this.shape_161,p:{skewX:180,x:-121,y:148.9,scaleX:1,scaleY:1}},{t:this.shape_160,p:{skewX:180,x:-143.9,y:117.8,scaleX:1,scaleY:1}},{t:this.shape_159,p:{skewX:180,x:-132.2,y:157.3,scaleX:1,scaleY:1}},{t:this.shape_158,p:{skewX:180,x:-263.3,y:129.3,scaleX:1,scaleY:1}},{t:this.shape_157,p:{skewX:180,x:-252.9,y:129.8,scaleX:1,scaleY:1}},{t:this.shape_156,p:{skewX:180,x:-154.4,y:114.9,scaleX:1,scaleY:1}},{t:this.shape_155,p:{skewX:180,x:-170.3,y:93.3,scaleX:1,scaleY:1}},{t:this.shape_154,p:{skewX:180,x:-148.9,y:116.3,scaleX:1,scaleY:1}},{t:this.shape_153,p:{skewX:180,x:-211.3,y:110.3,scaleX:1,scaleY:1}},{t:this.shape_152,p:{skewX:180,x:-249.5,y:128.9,scaleX:1,scaleY:1}},{t:this.shape_151,p:{skewX:180,x:-134.4,y:104.3,scaleX:1,scaleY:1}},{t:this.shape_150,p:{skewX:180,x:-214.9,y:110.3,scaleX:1,scaleY:1}},{t:this.shape_149,p:{skewX:180,x:-247,y:130.8,scaleX:1,scaleY:1}},{t:this.shape_148,p:{skewX:180,x:-240.9,y:128.9,scaleX:1,scaleY:1}},{t:this.shape_147,p:{skewX:180,x:-273.9,y:129.3,scaleX:1,scaleY:1}},{t:this.shape_146,p:{skewX:180,x:-207.9,y:110.3,scaleX:1,scaleY:1}},{t:this.shape_145,p:{skewX:180,x:-268.4,y:129.8,scaleX:1,scaleY:1}},{t:this.shape_144,p:{skewX:180,x:-237.4,y:121.8,scaleX:1,scaleY:1}},{t:this.shape_143,p:{skewX:180,x:-234.4,y:121.8,scaleX:1,scaleY:1}},{t:this.shape_142,p:{skewX:180,x:-175.7,y:92.6,scaleX:1,scaleY:1}},{t:this.shape_141,p:{skewX:180,x:-100.3,y:52.7,scaleX:1,scaleY:1}},{t:this.shape_140,p:{skewX:180,x:-240.1,y:121.8,scaleX:1,scaleY:1}},{t:this.shape_139,p:{skewX:180,x:-99.5,y:53.5,scaleX:1,scaleY:1}},{t:this.shape_138,p:{skewX:180,x:-95.4,y:72.1,scaleX:1,scaleY:1}},{t:this.shape_137,p:{skewX:180,x:-141.8,y:73.3,scaleX:1,scaleY:1}},{t:this.shape_136,p:{skewX:180,x:-137,y:161.2,scaleX:1,scaleY:1}},{t:this.shape_135,p:{skewX:180,x:-136.4,y:183.3,scaleX:1,scaleY:1}},{t:this.shape_134,p:{skewX:180,x:-261.9,y:129.8,scaleX:1,scaleY:1}},{t:this.shape_133,p:{skewX:180,x:-174.9,y:126.9,scaleX:1,scaleY:1}},{t:this.shape_132,p:{skewX:180,x:-263.9,y:129.8,scaleX:1,scaleY:1}},{t:this.shape_131,p:{skewX:180,x:-265.9,y:129.8,scaleX:1,scaleY:1}},{t:this.shape_130,p:{skewX:180,x:-118.2,y:149.9,scaleX:1,scaleY:1}},{t:this.shape_129,p:{skewX:180,x:-242.4,y:130.8,scaleX:1,scaleY:1}},{t:this.shape_128,p:{skewX:180,x:-146.3,y:97.3,scaleX:1,scaleY:1}},{t:this.shape_127,p:{skewX:180,x:-130.9,y:117.4,scaleX:1,scaleY:1}},{t:this.shape_126,p:{skewX:180,x:-223.4,y:129.8,scaleX:1,scaleY:1}},{t:this.shape_125,p:{skewX:180,x:-142,y:116.7,scaleX:1,scaleY:1}},{t:this.shape_124,p:{skewX:180,x:-126.4,y:117.8,scaleX:1,scaleY:1}},{t:this.shape_123,p:{skewX:180,x:-112.9,y:143.3,scaleX:1,scaleY:1}},{t:this.shape_122,p:{skewX:180,x:-138.5,y:116.8,scaleX:1,scaleY:1}},{t:this.shape_121,p:{skewX:180,x:-146.8,y:127.8,scaleX:1,scaleY:1}},{t:this.shape_120,p:{skewX:180,x:-125.8,y:171.6,scaleX:1,scaleY:1}},{t:this.shape_119,p:{skewX:180,x:-165.9,y:126.7,scaleX:1,scaleY:1}},{t:this.shape_118,p:{skewX:180,x:-200.9,y:121.8,scaleX:1,scaleY:1}},{t:this.shape_117,p:{skewX:180,x:-123.9,y:117.8,scaleX:1,scaleY:1}},{t:this.shape_116,p:{skewX:180,x:-179.9,y:110.8,scaleX:1,scaleY:1}},{t:this.shape_115,p:{skewX:180,x:-132.4,y:155.2,scaleX:1,scaleY:1}},{t:this.shape_114,p:{skewX:180,x:-148.9,y:127.8,scaleX:1,scaleY:1}},{t:this.shape_113,p:{skewX:180,x:-150.9,y:127.8,scaleX:1,scaleY:1}},{t:this.shape_112,p:{skewX:180,x:-112.3,y:142,scaleX:1,scaleY:1}},{t:this.shape_111,p:{skewX:180,x:-132.4,y:81.8,scaleX:1,scaleY:1}},{t:this.shape_110,p:{skewX:180,x:-152,y:96.2,scaleX:1,scaleY:1}},{t:this.shape_109,p:{skewX:180,x:-133.9,y:81.8,scaleX:1,scaleY:1}},{t:this.shape_108,p:{skewX:180,x:-182,y:110.8,scaleX:1,scaleY:1}},{t:this.shape_107,p:{skewX:180,x:-233.4,y:129.8,scaleX:1,scaleY:1}},{t:this.shape_106,p:{skewX:180,x:-228.9,y:129.8,scaleX:1,scaleY:1}},{t:this.shape_105,p:{skewX:180,x:-133.4,y:156,scaleX:1,scaleY:1}},{t:this.shape_104,p:{skewX:180,x:-168.4,y:126.8,scaleX:1,scaleY:1}},{t:this.shape_103,p:{skewX:180,x:-170.9,y:126.8,scaleX:1,scaleY:1}},{t:this.shape_102,p:{skewX:180,x:-203,y:121.8,scaleX:1,scaleY:1}},{t:this.shape_101,p:{skewX:180,x:-172.9,y:126.8,scaleX:1,scaleY:1}},{t:this.shape_100,p:{skewX:180,x:-117.9,y:148.9,scaleX:1,scaleY:1}},{t:this.shape_99,p:{skewX:180,x:-116.4,y:148,scaleX:1,scaleY:1}},{t:this.shape_98,p:{skewX:180,x:-117.3,y:149.9,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_171,p:{scaleX:0.836,scaleY:0.836,skewX:0,x:-150.6,y:116.6}},{t:this.shape_169,p:{skewX:0,x:-160.4,y:131.6,scaleX:0.836,scaleY:0.836}},{t:this.shape_168,p:{skewX:0,x:-176.8,y:94,scaleX:0.836,scaleY:0.836}},{t:this.shape_167,p:{skewX:0,x:-184.1,y:111.3,scaleX:0.836,scaleY:0.836}},{t:this.shape_166,p:{skewX:0,x:-107,y:152.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_165,p:{skewX:0,x:-123.8,y:74.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_164,p:{skewX:0,x:-170.3,y:106.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_163,p:{skewX:0,x:-133.8,y:146.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_162,p:{skewX:0,x:-209.1,y:105.2,scaleX:0.836,scaleY:0.836}},{t:this.shape_161,p:{skewX:0,x:-125.6,y:88.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_160,p:{skewX:0,x:-144.8,y:114.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_159,p:{skewX:0,x:-135,y:81.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_158,p:{skewX:0,x:-244.6,y:105.2,scaleX:0.836,scaleY:0.836}},{t:this.shape_157,p:{skewX:0,x:-235.8,y:104.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_156,p:{skewX:0,x:-153.6,y:117.3,scaleX:0.836,scaleY:0.836}},{t:this.shape_155,p:{skewX:0,x:-166.9,y:135.3,scaleX:0.836,scaleY:0.836}},{t:this.shape_154,p:{skewX:0,x:-149,y:116.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_153,p:{skewX:0,x:-201.1,y:121.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_152,p:{skewX:0,x:-233,y:105.6,scaleX:0.836,scaleY:0.836}},{t:this.shape_151,p:{skewX:0,x:-136.8,y:126.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_150,p:{skewX:0,x:-204.1,y:121.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_149,p:{skewX:0,x:-231,y:104,scaleX:0.836,scaleY:0.836}},{t:this.shape_148,p:{skewX:0,x:-225.8,y:105.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_147,p:{skewX:0,x:-253.4,y:105.2,scaleX:0.836,scaleY:0.836}},{t:this.shape_146,p:{skewX:0,x:-198.2,y:121.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_145,p:{skewX:0,x:-248.8,y:104.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_144,p:{skewX:0,x:-222.9,y:111.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_143,p:{skewX:0,x:-220.4,y:111.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_142,p:{skewX:0,x:-171.4,y:135.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_141,p:{skewX:0,x:-108.3,y:169.3,scaleX:0.836,scaleY:0.836}},{t:this.shape_140,p:{skewX:0,x:-225.2,y:111.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_139,p:{skewX:0,x:-107.6,y:168.6,scaleX:0.836,scaleY:0.836}},{t:this.shape_138,p:{skewX:0,x:-104.3,y:153.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_137,p:{skewX:0,x:-143,y:152.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_136,p:{skewX:0,x:-139,y:78.6,scaleX:0.836,scaleY:0.836}},{t:this.shape_135,p:{skewX:0,x:-138.5,y:60.1,scaleX:0.836,scaleY:0.836}},{t:this.shape_134,p:{skewX:0,x:-243.4,y:104.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_133,p:{skewX:0,x:-170.7,y:107.3,scaleX:0.836,scaleY:0.836}},{t:this.shape_132,p:{skewX:0,x:-245,y:104.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_131,p:{skewX:0,x:-246.7,y:104.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_130,p:{skewX:0,x:-123.3,y:88,scaleX:0.836,scaleY:0.836}},{t:this.shape_129,p:{skewX:0,x:-227.1,y:104,scaleX:0.836,scaleY:0.836}},{t:this.shape_128,p:{skewX:0,x:-146.8,y:132,scaleX:0.836,scaleY:0.836}},{t:this.shape_127,p:{skewX:0,x:-133.9,y:115.2,scaleX:0.836,scaleY:0.836}},{t:this.shape_126,p:{skewX:0,x:-211.2,y:104.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_125,p:{skewX:0,x:-143.1,y:115.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_124,p:{skewX:0,x:-130.2,y:114.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_123,p:{skewX:0,x:-118.9,y:93.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_122,p:{skewX:0,x:-140.3,y:115.7,scaleX:0.836,scaleY:0.836}},{t:this.shape_121,p:{skewX:0,x:-147.2,y:106.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_120,p:{skewX:0,x:-129.6,y:69.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_119,p:{skewX:0,x:-163.2,y:107.4,scaleX:0.836,scaleY:0.836}},{t:this.shape_118,p:{skewX:0,x:-192.4,y:111.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_117,p:{skewX:0,x:-128,y:114.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_116,p:{skewX:0,x:-174.8,y:120.7,scaleX:0.836,scaleY:0.836}},{t:this.shape_115,p:{skewX:0,x:-135.2,y:83.6,scaleX:0.836,scaleY:0.836}},{t:this.shape_114,p:{skewX:0,x:-149,y:106.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_113,p:{skewX:0,x:-150.6,y:106.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_112,p:{skewX:0,x:-118.3,y:94.6,scaleX:0.836,scaleY:0.836}},{t:this.shape_111,p:{skewX:0,x:-135.2,y:145,scaleX:0.836,scaleY:0.836}},{t:this.shape_110,p:{skewX:0,x:-151.5,y:132.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_109,p:{skewX:0,x:-136.4,y:145,scaleX:0.836,scaleY:0.836}},{t:this.shape_108,p:{skewX:0,x:-176.6,y:120.7,scaleX:0.836,scaleY:0.836}},{t:this.shape_107,p:{skewX:0,x:-219.5,y:104.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_106,p:{skewX:0,x:-215.8,y:104.8,scaleX:0.836,scaleY:0.836}},{t:this.shape_105,p:{skewX:0,x:-136,y:82.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_104,p:{skewX:0,x:-165.3,y:107.3,scaleX:0.836,scaleY:0.836}},{t:this.shape_103,p:{skewX:0,x:-167.3,y:107.3,scaleX:0.836,scaleY:0.836}},{t:this.shape_102,p:{skewX:0,x:-194.1,y:111.5,scaleX:0.836,scaleY:0.836}},{t:this.shape_101,p:{skewX:0,x:-169,y:107.3,scaleX:0.836,scaleY:0.836}},{t:this.shape_100,p:{skewX:0,x:-123,y:88.9,scaleX:0.836,scaleY:0.836}},{t:this.shape_99,p:{skewX:0,x:-121.8,y:89.6,scaleX:0.836,scaleY:0.836}},{t:this.shape_98,p:{skewX:0,x:-122.5,y:88,scaleX:0.836,scaleY:0.836}}]},1).to({state:[{t:this.shape_171,p:{scaleX:0.804,scaleY:1,skewX:0,x:-141.3,y:118.5}},{t:this.shape_169,p:{skewX:0,x:-150.8,y:136.4,scaleX:0.804,scaleY:1}},{t:this.shape_168,p:{skewX:0,x:-166.6,y:91.4,scaleX:0.804,scaleY:1}},{t:this.shape_167,p:{skewX:0,x:-173.6,y:112.2,scaleX:0.804,scaleY:1}},{t:this.shape_166,p:{skewX:0,x:-99.4,y:160.9,scaleX:0.804,scaleY:1}},{t:this.shape_165,p:{skewX:0,x:-115.6,y:68.4,scaleX:0.804,scaleY:1}},{t:this.shape_164,p:{skewX:0,x:-160.3,y:106.9,scaleX:0.804,scaleY:1}},{t:this.shape_163,p:{skewX:0,x:-125.1,y:154.3,scaleX:0.804,scaleY:1}},{t:this.shape_162,p:{skewX:0,x:-197.7,y:104.9,scaleX:0.804,scaleY:1}},{t:this.shape_161,p:{skewX:0,x:-117.3,y:85.3,scaleX:0.804,scaleY:1}},{t:this.shape_160,p:{skewX:0,x:-135.8,y:116.4,scaleX:0.804,scaleY:1}},{t:this.shape_159,p:{skewX:0,x:-126.3,y:76.9,scaleX:0.804,scaleY:1}},{t:this.shape_158,p:{skewX:0,x:-231.8,y:104.9,scaleX:0.804,scaleY:1}},{t:this.shape_157,p:{skewX:0,x:-223.4,y:104.4,scaleX:0.804,scaleY:1}},{t:this.shape_156,p:{skewX:0,x:-144.2,y:119.3,scaleX:0.804,scaleY:1}},{t:this.shape_155,p:{skewX:0,x:-157,y:140.9,scaleX:0.804,scaleY:1}},{t:this.shape_154,p:{skewX:0,x:-139.8,y:117.9,scaleX:0.804,scaleY:1}},{t:this.shape_153,p:{skewX:0,x:-190,y:123.9,scaleX:0.804,scaleY:1}},{t:this.shape_152,p:{skewX:0,x:-220.7,y:105.3,scaleX:0.804,scaleY:1}},{t:this.shape_151,p:{skewX:0,x:-128.1,y:129.9,scaleX:0.804,scaleY:1}},{t:this.shape_150,p:{skewX:0,x:-192.8,y:123.9,scaleX:0.804,scaleY:1}},{t:this.shape_149,p:{skewX:0,x:-218.7,y:103.4,scaleX:0.804,scaleY:1}},{t:this.shape_148,p:{skewX:0,x:-213.7,y:105.3,scaleX:0.804,scaleY:1}},{t:this.shape_147,p:{skewX:0,x:-240.3,y:104.9,scaleX:0.804,scaleY:1}},{t:this.shape_146,p:{skewX:0,x:-187.2,y:123.9,scaleX:0.804,scaleY:1}},{t:this.shape_145,p:{skewX:0,x:-235.8,y:104.4,scaleX:0.804,scaleY:1}},{t:this.shape_144,p:{skewX:0,x:-210.9,y:112.4,scaleX:0.804,scaleY:1}},{t:this.shape_143,p:{skewX:0,x:-208.5,y:112.4,scaleX:0.804,scaleY:1}},{t:this.shape_142,p:{skewX:0,x:-161.3,y:141.6,scaleX:0.804,scaleY:1}},{t:this.shape_141,p:{skewX:0,x:-100.7,y:181.5,scaleX:0.804,scaleY:1}},{t:this.shape_140,p:{skewX:0,x:-213.1,y:112.4,scaleX:0.804,scaleY:1}},{t:this.shape_139,p:{skewX:0,x:-100,y:180.7,scaleX:0.804,scaleY:1}},{t:this.shape_138,p:{skewX:0,x:-96.8,y:162.1,scaleX:0.804,scaleY:1}},{t:this.shape_137,p:{skewX:0,x:-134,y:160.9,scaleX:0.804,scaleY:1}},{t:this.shape_136,p:{skewX:0,x:-130.2,y:73,scaleX:0.804,scaleY:1}},{t:this.shape_135,p:{skewX:0,x:-129.7,y:50.9,scaleX:0.804,scaleY:1}},{t:this.shape_134,p:{skewX:0,x:-230.6,y:104.4,scaleX:0.804,scaleY:1}},{t:this.shape_133,p:{skewX:0,x:-160.7,y:107.3,scaleX:0.804,scaleY:1}},{t:this.shape_132,p:{skewX:0,x:-232.2,y:104.4,scaleX:0.804,scaleY:1}},{t:this.shape_131,p:{skewX:0,x:-233.8,y:104.4,scaleX:0.804,scaleY:1}},{t:this.shape_130,p:{skewX:0,x:-115.1,y:84.3,scaleX:0.804,scaleY:1}},{t:this.shape_129,p:{skewX:0,x:-214.9,y:103.4,scaleX:0.804,scaleY:1}},{t:this.shape_128,p:{skewX:0,x:-137.7,y:136.9,scaleX:0.804,scaleY:1}},{t:this.shape_127,p:{skewX:0,x:-125.3,y:116.8,scaleX:0.804,scaleY:1}},{t:this.shape_126,p:{skewX:0,x:-199.7,y:104.4,scaleX:0.804,scaleY:1}},{t:this.shape_125,p:{skewX:0,x:-134.2,y:117.5,scaleX:0.804,scaleY:1}},{t:this.shape_124,p:{skewX:0,x:-121.7,y:116.4,scaleX:0.804,scaleY:1}},{t:this.shape_123,p:{skewX:0,x:-110.8,y:90.9,scaleX:0.804,scaleY:1}},{t:this.shape_122,p:{skewX:0,x:-131.4,y:117.4,scaleX:0.804,scaleY:1}},{t:this.shape_121,p:{skewX:0,x:-138.1,y:106.4,scaleX:0.804,scaleY:1}},{t:this.shape_120,p:{skewX:0,x:-121.2,y:62.6,scaleX:0.804,scaleY:1}},{t:this.shape_119,p:{skewX:0,x:-153.5,y:107.5,scaleX:0.804,scaleY:1}},{t:this.shape_118,p:{skewX:0,x:-181.5,y:112.4,scaleX:0.804,scaleY:1}},{t:this.shape_117,p:{skewX:0,x:-119.6,y:116.4,scaleX:0.804,scaleY:1}},{t:this.shape_116,p:{skewX:0,x:-164.7,y:123.4,scaleX:0.804,scaleY:1}},{t:this.shape_115,p:{skewX:0,x:-126.5,y:79,scaleX:0.804,scaleY:1}},{t:this.shape_114,p:{skewX:0,x:-139.8,y:106.4,scaleX:0.804,scaleY:1}},{t:this.shape_113,p:{skewX:0,x:-141.4,y:106.4,scaleX:0.804,scaleY:1}},{t:this.shape_112,p:{skewX:0,x:-110.3,y:92.2,scaleX:0.804,scaleY:1}},{t:this.shape_111,p:{skewX:0,x:-126.5,y:152.4,scaleX:0.804,scaleY:1}},{t:this.shape_110,p:{skewX:0,x:-142.2,y:138,scaleX:0.804,scaleY:1}},{t:this.shape_109,p:{skewX:0,x:-127.7,y:152.4,scaleX:0.804,scaleY:1}},{t:this.shape_108,p:{skewX:0,x:-166.3,y:123.4,scaleX:0.804,scaleY:1}},{t:this.shape_107,p:{skewX:0,x:-207.7,y:104.4,scaleX:0.804,scaleY:1}},{t:this.shape_106,p:{skewX:0,x:-204.1,y:104.4,scaleX:0.804,scaleY:1}},{t:this.shape_105,p:{skewX:0,x:-127.3,y:78.2,scaleX:0.804,scaleY:1}},{t:this.shape_104,p:{skewX:0,x:-155.5,y:107.4,scaleX:0.804,scaleY:1}},{t:this.shape_103,p:{skewX:0,x:-157.5,y:107.4,scaleX:0.804,scaleY:1}},{t:this.shape_102,p:{skewX:0,x:-183.2,y:112.4,scaleX:0.804,scaleY:1}},{t:this.shape_101,p:{skewX:0,x:-159.1,y:107.4,scaleX:0.804,scaleY:1}},{t:this.shape_100,p:{skewX:0,x:-114.8,y:85.3,scaleX:0.804,scaleY:1}},{t:this.shape_99,p:{skewX:0,x:-113.6,y:86.2,scaleX:0.804,scaleY:1}},{t:this.shape_98,p:{skewX:0,x:-114.3,y:84.3,scaleX:0.804,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.9,-267.8,674.9,517.1);


(lib.JoinNow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArBsIgriYIAAAAIgqCYIgyAAIhFjXIA2AAIAqCWIAAAAIAsiWIArAAIAsCWIAriWIA1AAIhFDXg");
	this.shape.setTransform(248,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRBSQghgiAAgwQAAgvAhghQAigiAvAAQAwAAAiAiQAhAhAAAvQAAAwghAiQgjAggvABQgvgBgigggAgsguQgSAUgBAaQABAbASAUQASAUAaAAQAbAAATgUQASgUAAgbQAAgagSgTQgUgVgaAAQgZABgTATg");
	this.shape_1.setTransform(215.6,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABQCiIibjvIgBAAIABDvIg4AAIAAlCIA5AAICXDpIABAAIgCjpIA4AAIAAFCg");
	this.shape_2.setTransform(184,46.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAtBwIAAh4QAAgagMgOQgLgOgVAAQgUAAgNAOQgMAPAAAZIAAB4Ig0AAIAAjYIAwAAIAAAZIABAAQAUggAoAAQAoAAAWAZQAWAZAAAqIAACDg");
	this.shape_3.setTransform(138.3,51.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYCdIAAjXIAxAAIAADXgAgYhiIAAg6IAxAAIAAA6g");
	this.shape_4.setTransform(118.6,46.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRBSQgigiAAgwQABgvAhghQAigiAvAAQAwAAAhAiQAjAhgBAvQABAwgjAiQghAggwABQgvgBgigggAgtguQgSAUAAAaQAAAbASAUQAUAUAZAAQAbAAASgUQATgUgBgbQAAgagSgTQgTgVgaAAQgaABgTATg");
	this.shape_5.setTransform(98.3,51.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFCLQgbgbgBgsIA5AAQACAWAMAMQAKALARABQAUAAAJgNQAKgOAAggIAAjaIA6AAIAADhQAAAxgcAbQgbAbgrAAQgpAAgcgag");
	this.shape_6.setTransform(70,46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C4421").s().p("A4cAqQgXAAgRgRQgQgRgBgVIAAgcQABAWAQAQQARAPAXAAMAw5AAAQAXAAARgPQAQgQAAgWIAAAcQAAAVgQARQgRARgXAAg");
	this.shape_7.setTransform(162.2,88.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#98C852").s().p("AZFAEQgRgPgXAAMgw5AAAQgXAAgRAPQgQAQgBAWIAAgcQABgVAQgRQARgRAXAAMAw5AAAQAXAAARARQAQARAAAVIAAAcQAAgWgQgQg");
	this.shape_8.setTransform(162.2,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1CB926").s().p("A4cHRQgXAAgRgRQgQgQgBgYIAAswQABgXAQgRQARgQAXAAMAw5AAAQAXAAARAQQAQARAAAXIAAMwQAAAYgQAQQgRARgXAAg");
	this.shape_9.setTransform(162.2,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324.4,93.2);


(lib.Hill3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A6335").s().p("AmCJQIvJ0LQFYg5NogCQJ8gCNbAbIAAXVg");
	this.shape.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,0,271.4,152);


(lib.Hill2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#348109").s().p("EgiOAMeIAA15IEIgrQFGgzE5gjQPshwH4BRQFUA3JTCoIIBCUQE8BcDNA3IAAQTg");
	this.shape.setTransform(0,79.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.1,0,438.2,159.7);


(lib.Hill1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59AF4D").s().p("AARApIgqgOQgUgMgRgOQgjgcALgOQALgOA5APQAaAIAaAKQAUAHAWAWQAYAcgSAJQgHAEgNAAQgSAAgbgHg");
	this.shape.setTransform(187.1,98);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#59AF4D").s().p("AgNAhQgigDgIgXQgIgWAigLQASgGAQgBIAbACQAbAFgBAWQgCAUgTAKIgTAGQgLACgJAAIgLgBg");
	this.shape_1.setTransform(153.5,99);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#59AF4D").s().p("AgkAdQgmgKACgUQABgWAlgHQATgEAQAAIAnAHQAmAKgFARQgEASgjAKIghAHQgSgBgTgFg");
	this.shape_2.setTransform(136,84.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#59AF4D").s().p("AgjAUQgggSAAgQQAAgPAjgEQARgCAQACQAlgDASANQAMAJAAAOQAAAKgSALQgRALgUACIgEABQgRAAgbgPg");
	this.shape_3.setTransform(110.7,90.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#59AF4D").s().p("Ag+ATQgYgLAAgOQAAgNAvgGQAYgDAWAAQAhgDAaAMQAZALgEAKQgEAMgYAIQgaAIgiAAIgDAAQgjAAgXgLg");
	this.shape_4.setTransform(62.6,83.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#59AF4D").s().p("AgqAZQgwgIABgRQACgSAvgHQAXgDAWABIArADQArAHgCARQgBARgqAHIgpAEQgXAAgYgDg");
	this.shape_5.setTransform(41.9,95.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#59AF4D").s().p("AhNAaQg+gPAAgRQAAgSA+gIQAegEAfAAIBPABQBRAHgFAcQgEAdhNAHIhKABQgfgDgegIg");
	this.shape_6.setTransform(21.9,83);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#59AF4D").s().p("AAyA+IgxgLQgrgNglgSQhKgkAkgeQAkgfBGAXQAiAMAcARIAwAaQAtAfgVATQgOAOggAAQgMAAgPgDg");
	this.shape_7.setTransform(25.7,53.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#59AF4D").s().p("AgmAmQgugOACgZQABgaAtgMQAXgHAUAAIApAFQAoAMgFAdQgEAfglALIgjAFQgWgCgXgHg");
	this.shape_8.setTransform(-22.8,84);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#59AF4D").s().p("AgpAoQgxgOAAgcQAAgdAxgLQAYgGAXAAIAsAFQAsALgDAgQgDAggqAMIgoAFQgXgBgYgIg");
	this.shape_9.setTransform(-22,53.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#59AF4D").s().p("AgvAvQhAgJAAglQAAgkBAgKQAfgFAfACIAwAJQAxAOAAAaQAAAcgxAMIgwAHIgaACQgSAAgSgDg");
	this.shape_10.setTransform(-47.9,32.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#59AF4D").s().p("AgpArQg5gLAFghQAEgiA2gJQAagEAYADIAoAJQAoAOAAAWQAAAXgoAOIgoAKIgMAAQgWAAgWgEg");
	this.shape_11.setTransform(-83.7,41);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#59AF4D").s().p("Ag+AsQhKgKABghQACgfBDgMQAhgGAhABIBEAKQBFAPgBAXQgCAZg+AOIg9AIIgOAAQgeAAgdgEg");
	this.shape_12.setTransform(-153.3,32.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#59AF4D").s().p("Ag6AmQhKgMAAgZQAAgXBCgOQAhgHAhgCIBFAFQBFALgFAdQgEAeg7ALIg5AFQgjgBgkgHg");
	this.shape_13.setTransform(-183,48.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#59AF4D").s().p("AhGAzQiIgDAAgqQAAgoBrgMQA2gGA0ADQAvABA/ALQBXAPADAWQADAXhJANIhJAKQg4AFg2AAIgYAAg");
	this.shape_14.setTransform(-211.1,31.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#59AF4D").s().p("Ah4AJQABg5BCgOQAhgHAeAFQB6ANgLA0QgGAageAZQg0ANgyABIgJABQhgAAACg6g");
	this.shape_15.setTransform(-275,32.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C9E21").s().p("EhAIANIIAA3tQO7i2OyAXQRNAbQIDRQICBpEoBjIEaBpQFoCCGGB6QTiGFQ6CoIAAFCg");
	this.shape_16.setTransform(0,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.5,0,821,168);


(lib.Gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,182,0,0)","#000000"],[0.4,1],0,-91.5,0,91.5).s().p("EhAIAOTIAA8lMCAQAAAIAAclg");
	this.shape.setTransform(410.5,91.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,821,183.1);


(lib.GamesReel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReelFull();
	this.instance.parent = this;
	this.instance.setTransform(-145.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,0,291,765);


(lib.Castle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#264C7C").s().p("A6QWtMAAAgm4IElAAIAAmhIHPAAIAAGhIHHAAIAAhDIg1hJIAAhrQAVghAiAJQARAFANALIAAiiIERAAIAACdQAigXAVAJQALAFAEAJIAAB9IglBGIAALOQD8CAEZEbQBwBxBLBkQBJBgAFAmQALBRA7BxQBBB7BYBbQBNBQFtBoQC2A0CnAkIAAGNg");
	this.shape.setTransform(0,145.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.1,0,336.4,290.8);


(lib.Wagering = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TextWageringai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(127.4,9.8,1.197,1.197,0,0,0,106.4,8.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("A0DBnIAAjOMAoGAAAIAADOg");
	this.shape.setTransform(128.4,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.7,19.5);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-306.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-306.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,152.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-153.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-153.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-306.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-306.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GamesReel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,0,1,1,0,0,0,0,382.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAALSIAA2j");
	this.shape.setTransform(147.3,-306.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-382.5,295.5,765);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,0,119,148.1);


(lib.MOVSpring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,83.5);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,78.5,1,1,2,0,0,-0.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:-0.1,rotation:2,x:-3,y:78.5},6).to({_off:false,regX:0,rotation:0,x:0,y:83.5},8).to({_off:true,regX:-0.1,regY:0.1,rotation:-2,x:1,y:78.6},8).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},6).to({_off:true,regX:0,rotation:0,x:0,y:83.5},8).to({_off:false,regX:-0.1,regY:0.1,rotation:-2,x:1,y:78.6},8).to({rotation:-0.1,x:0.1,y:82.9},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,0,94,167);


(lib.MOVBackNew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Trees
	this.instance = new lib.Trees("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(167.9,224.3,0.173,0.23,0,0,0,0,74);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({regY:74.1,scaleX:1,scaleY:1.89,y:150.3},4).to({regY:74,scaleY:1,y:193.3},5).wait(45));

	// Hill 1
	this.instance_1 = new lib.Hill1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,471,1,1,0,0,0,0,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:84.2,scaleX:1.53,scaleY:1.79,y:318.4},4).to({regY:84,scaleX:1,scaleY:1,y:318},5).wait(61));

	// Hill 2
	this.instance_2 = new lib.Hill2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(191.4,420.2,1,1,0,0,0,0,79.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({regY:79.9,scaleX:1.79,scaleY:1.13,y:284.4},4).to({regY:79.8,scaleX:1,scaleY:1,y:322.2},5).wait(59));

	// Hill 3
	this.instance_3 = new lib.Hill3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(274.8,409.4,1,1,0,0,0,0,76);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({regX:0.1,regY:76.1,scaleX:2.25,scaleY:1.3,x:275.1,y:332.7},4).to({regX:0,regY:76,scaleX:1,scaleY:1,x:274.8,y:322.5},5).wait(57));

	// Wave
	this.instance_4 = new lib.Wave("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(337.6,304,1.878,1,0,0,0,0,52.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({regX:0.1,regY:53,scaleX:1.11,scaleY:2.19,x:337.7,y:221.3},4).to({regX:0,regY:52.9,scaleX:1,scaleY:1,x:337.6,y:221.1},5).wait(53));

	// Castle
	this.instance_5 = new lib.Castle("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-372.2,224.4,0.228,0.228,0,0,0,0,145.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1,x:-242.3,y:145.3},9).wait(50));

	// Sky 1
	this.instance_6 = new lib.Sky1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,352.1,2.444,1.658,0,0,0,0,84.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({regY:84.4,scaleX:1,scaleY:1,y:196.7},6).wait(61));

	// Sky 2
	this.instance_7 = new lib.Sky2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,461,2.727,1.421,0,0,0,0,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,y:201},6).wait(64));

	// Sky Back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2291B0").s().p("EhAIAfaMAAAg+zMCAQAAAMAAAA+zg");
	this.shape.setTransform(0,201);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1119.4,0,2238.9,746.7);


(lib.JoinNow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JoinNow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.495,0.495,0,0,0,162.2,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,-23,160.7,46.2);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.movieClip_1 = new lib.JoinNow_1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(80.4,23.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.7,46.2);


(lib.CHARTV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,0,303,234);


(lib.CHARCasper_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CHAR Casper
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:46.5},8).to({y:49.5},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,99);


(lib.MOVTV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_89 = new cjs.Graphics().p("A2tL8IAA34MAtbAAAIAAX4g");
	var mask_graphics_95 = new cjs.Graphics().p("A2tL8IAA34MAtbAAAIAAX4g");
	var mask_graphics_344 = new cjs.Graphics().p("A2tL8IAA34MAtbAAAIAAX4g");
	var mask_graphics_349 = new cjs.Graphics().p("A2tL8IAA34MAtbAAAIAAX4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_graphics_89,x:-0.5,y:-32.6}).wait(6).to({graphics:mask_graphics_95,x:-0.5,y:-32.6}).wait(249).to({graphics:mask_graphics_344,x:-0.5,y:-32.6}).wait(5).to({graphics:mask_graphics_349,x:-0.5,y:-32.6}).wait(1));

	// Games Reel
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,273.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween25("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,273.5);

	this.instance_2 = new lib.Tween16("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.3,273.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween17("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.3,107);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween18("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.3,120.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween19("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.3,-41.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween20("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.3,-32.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween21("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.3,-194.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1.3,-185.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween23("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(1.3,-347.5);
	this.instance_9._off = true;

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},89).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},42).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},42).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},41).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},48).to({state:[{t:this.instance_9}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({_off:true,alpha:1},6).wait(255));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(138).to({_off:false},0).to({_off:true,y:107},6).wait(206));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(138).to({_off:false},6).to({y:120.5},2).to({_off:true},42).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(188).to({_off:false},0).to({_off:true,y:-41.5},6).wait(156));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188).to({_off:false},6).to({y:-32.5},2).to({_off:true},42).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(238).to({_off:false},0).to({_off:true,y:-194.5},6).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(238).to({_off:false},6).to({y:-185.5},2).to({_off:true},41).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(287).to({_off:false},0).to({_off:true,y:-347.5},7).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(287).to({_off:false},7).to({y:-338.5},2).wait(48).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// Discover Games
	this.instance_10 = new lib.TEXTDiscoverGamesai("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-27,1,1,0,0,0,99.8,33.2);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},4).to({_off:true},36).wait(310));

	// at WH
	this.instance_11 = new lib.TEXTatWHai("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0.1,-26.9,1.156,1.156,0,0,0,106,33.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({alpha:1},4).to({_off:true},46).wait(260));

	// TV
	this.instance_12 = new lib.CHARTV("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,0,1,1,0,0,0,0,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(350));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.5,-117,303,234);


// stage content:
(lib.CGIB_3611_Games_Signup_821x402 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.Wagering.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://games.williamhill.com/#!/lobby/promotion-overlay/games-welcome-bonus?expand=on", "_blank");
		}
		
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.JoinNow.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://games.williamhill.com/#!/action/register", "_self");
		}
	}
	this.frame_523 = function() {
		this.gotoAndPlay(70);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(499).call(this.frame_523).wait(1));

	// CHAR Pig
	this.instance = new lib.MOVPig();
	this.instance.parent = this;
	this.instance.setTransform(-344.5,218.1,1,1,0,0,0,47.5,-9.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({x:1166.4},15).wait(485));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("EhTIAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_25 = new cjs.Graphics().p("EhNlAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_26 = new cjs.Graphics().p("EhICAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_27 = new cjs.Graphics().p("EhCgAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_28 = new cjs.Graphics().p("EhAIAfaMAAAg+zMCARAAAMAAAA+zg");
	var mask_graphics_29 = new cjs.Graphics().p("EhAHAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_30 = new cjs.Graphics().p("EhAIAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_31 = new cjs.Graphics().p("EhAIAfaMAAAg+zMCARAAAMAAAA+zg");
	var mask_graphics_32 = new cjs.Graphics().p("EhAHAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_33 = new cjs.Graphics().p("EhAIAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_34 = new cjs.Graphics().p("EhAIAfaMAAAg+zMCARAAAMAAAA+zg");
	var mask_graphics_35 = new cjs.Graphics().p("EhAHAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_36 = new cjs.Graphics().p("EhAIAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_37 = new cjs.Graphics().p("EhAIAfaMAAAg+zMCARAAAMAAAA+zg");
	var mask_graphics_38 = new cjs.Graphics().p("EhAHAfaMAAAg+zMCAQAAAMAAAA+zg");
	var mask_graphics_39 = new cjs.Graphics().p("EhAIAfaMAAAg+zMCAQAAAMAAAA+zg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:-532.1,y:201}).wait(1).to({graphics:mask_graphics_25,x:-496.6,y:201}).wait(1).to({graphics:mask_graphics_26,x:-461.2,y:201}).wait(1).to({graphics:mask_graphics_27,x:-425.7,y:201}).wait(1).to({graphics:mask_graphics_28,x:-369.9,y:201}).wait(1).to({graphics:mask_graphics_29,x:-299,y:201}).wait(1).to({graphics:mask_graphics_30,x:-228,y:201}).wait(1).to({graphics:mask_graphics_31,x:-157.1,y:201}).wait(1).to({graphics:mask_graphics_32,x:-86.1,y:201}).wait(1).to({graphics:mask_graphics_33,x:-15.2,y:201}).wait(1).to({graphics:mask_graphics_34,x:55.8,y:201}).wait(1).to({graphics:mask_graphics_35,x:126.7,y:201}).wait(1).to({graphics:mask_graphics_36,x:197.7,y:201}).wait(1).to({graphics:mask_graphics_37,x:268.6,y:201}).wait(1).to({graphics:mask_graphics_38,x:339.6,y:201}).wait(1).to({graphics:mask_graphics_39,x:410.5,y:201}).wait(485));

	// CTA
	this.JoinNow = new lib.CTA();
	this.JoinNow.parent = this;
	this.JoinNow.setTransform(721.1,332,1,1,0,0,0,80.4,23.1);
	this.JoinNow._off = true;
	new cjs.ButtonHelper(this.JoinNow, 0, 1, 1);

	this.JoinNow.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.JoinNow).wait(24).to({_off:false},0).wait(500));

	// Text Wagering.ai
	this.Wagering = new lib.Wagering();
	this.Wagering.parent = this;
	this.Wagering.setTransform(674.1,375.5,1,1,0,0,0,127.3,9.7);
	this.Wagering._off = true;
	new cjs.ButtonHelper(this.Wagering, 0, 1, 2, false, new lib.Wagering(), 3);

	this.Wagering.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.Wagering).wait(24).to({_off:false},0).wait(500));

	// Text Join.ai
	this.instance_1 = new lib.TextJoinai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(231.3,372.8,1.355,1.355,0,0,0,155.7,10.6);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(500));

	// Text Get 200.ai
	this.instance_2 = new lib.TextGet200ai("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(320.4,327.4,1.2,1.2,0,0,0,250.1,15.8);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(500));

	// CHAR Spring
	this.instance_3 = new lib.MOVSpring();
	this.instance_3.parent = this;
	this.instance_3.setTransform(400,-89.5,1,1,0,0,0,0,83.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61).to({_off:false},0).to({y:69.5},7).wait(456));

	// CHAR Casper
	this.instance_4 = new lib.CHARCasper_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23.3,80.6,0.232,0.232,0,0,0,53.1,49.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({regX:53,scaleX:1,scaleY:1,x:100,y:55.5,alpha:0.789},11).wait(473));

	// CHAR Bird
	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(324.5,-53);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween9("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(324.5,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},52).to({state:[{t:this.instance_6,p:{y:47}}]},4).to({state:[{t:this.instance_6,p:{y:55}}]},2).to({state:[{t:this.instance_6,p:{y:47}}]},2).wait(464));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({_off:false},0).to({_off:true,y:47},4).wait(468));

	// CHAR Jack Right
	this.instance_7 = new lib.CHARJackRighthand();
	this.instance_7.parent = this;
	this.instance_7.setTransform(231,80);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).wait(479));

	// CHAR Jack Left
	this.instance_8 = new lib.CHARJackLefthand();
	this.instance_8.parent = this;
	this.instance_8.setTransform(178,80);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48).to({_off:false},0).wait(476));

	// TV MOV
	this.instance_9 = new lib.MOVTV();
	this.instance_9.parent = this;
	this.instance_9.setTransform(230.5,203);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(41).to({_off:false},0).wait(483));

	// TV
	this.instance_10 = new lib.CHARTV("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(230.5,301,0.112,0.136,0,0,0,0,117);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({scaleX:0.92,scaleY:1.26,y:172},3).to({scaleX:1,scaleY:1,y:203},3).to({_off:true},1).wait(483));

	// CHAR Pig3
	this.instance_11 = new lib.MOVPig();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-51.1,163.9,0.131,0.131,0,0,0,47.2,-9.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(231).to({_off:false},0).to({x:873.2},31).wait(262));

	// CHAR Pig2
	this.instance_12 = new lib.MOVPig();
	this.instance_12.parent = this;
	this.instance_12.setTransform(967.1,170.1,0.409,0.409,0,0,180,47.3,-9.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120).to({_off:false},0).to({x:-144.8},18).wait(386));

	// CHAR Jack
	this.instance_13 = new lib.Tween7("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(216.5,130.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({_off:false},0).to({y:51.5},9).wait(464));

	// Gradient
	this.instance_14 = new lib.Gradient("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(410.5,225.6,1,1.928,0,0,0,410.5,91.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(524));

	// Treess for pig to go behind
	this.instance_15 = new lib.Trees("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(578.4,193.3,1,1,0,0,0,0,74);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(353).to({_off:false},0).to({_off:true},57).wait(114));

	// CHAR Pig4
	this.instance_16 = new lib.MOVPig();
	this.instance_16.parent = this;
	this.instance_16.setTransform(854.9,208.9,0.077,0.077,0,0,180,47.4,-8.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(353).to({_off:false},0).to({x:-32.8},57).wait(114));

	// Background 2
	this.instance_17 = new lib.MOVBackNew();
	this.instance_17.parent = this;
	this.instance_17.setTransform(410.5,201,1,1,0,0,0,0,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(524));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298.5,201,2238.9,746.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;