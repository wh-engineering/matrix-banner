(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"CGIB_3611 Vegas 1Mil 824x402_atlas_P_", frames: [[0,0,394,330],[0,573,394,165],[396,573,394,165],[338,332,336,239],[396,0,336,239],[0,332,336,239]]}
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
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
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



(lib.BackgroundNew = function() {
	this.initialize(img.BackgroundNew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Chooper2Shade = function() {
	this.spriteSheet = ss["CGIB_3611 Vegas 1Mil 824x402_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Chooper2Wings1 = function() {
	this.spriteSheet = ss["CGIB_3611 Vegas 1Mil 824x402_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Chooper2Wings2 = function() {
	this.spriteSheet = ss["CGIB_3611 Vegas 1Mil 824x402_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.COPTER1Wings1 = function() {
	this.spriteSheet = ss["CGIB_3611 Vegas 1Mil 824x402_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.COPTER1Wings2 = function() {
	this.spriteSheet = ss["CGIB_3611 Vegas 1Mil 824x402_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.COPTER1 = function() {
	this.spriteSheet = ss["CGIB_3611 Vegas 1Mil 824x402_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.YellowMillion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1DC31").s().p("AkHKdIAA06IEgAAQB6ABA6A6QA7A6AAB5IAANgQAAB4g7A6Qg6A6h6AAgAgZHaIAZAAQAZAAAAgcIAAt8QAAgbgZAAIgZAAg");
	this.shape.setTransform(656.7,68.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1DC31").s().p("AAlKdIhmpYIAKJYIjGAAIAA06IDkAAIBbIlIgKolIDFAAIAAU6g");
	this.shape_1.setTransform(600.5,68.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1DC31").s().p("Ag2KiQjQAAAAjSIAAxxIDtAAIAARtQAAARATAAIANAAQATAAAAgRIAAxtIDtAAIAARxQAABpgzA0Qg0A1hrAAg");
	this.shape_2.setTransform(541.5,68.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1DC31").s().p("Ag5KnQhpAAg0g1Qgzg0AAhpIAAupQAAjSDQAAIBxAAQDSAAAADSIAAOpQAADSjSAAgAgbnQIAAOhQgBARAUAAIASAAQARAAAAgRIAAuhQAAgRgRAAIgSAAQgUAAABARg");
	this.shape_3.setTransform(483.1,67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1DC31").s().p("AkFKeIAA07IE5AAQBrAAAzA0QA0A0AABrIAAHXQAABrg0A0QgzA0hrAAIhMAAIAAG+gAgYAdIAgAAQATAAAAgTIAAnQQAAgTgTAAIggAAg");
	this.shape_4.setTransform(426.4,68.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1DC31").s().p("AAlKdIhmpZIAKJZIjFAAIAA06IDjAAIBbIlIgKolIDFAAIAAU6g");
	this.shape_5.setTransform(355.2,68);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1DC31").s().p("Ag4KnQjRAAAAjSIAAupQAAjSDRAAIBwAAQDSAAAADSIAAOpQAADSjSAAgAgcnQIAAOhQAAARATAAIATAAQARAAAAgRIAAuhQAAgRgRAAIgTAAQgTAAAAARg");
	this.shape_6.setTransform(299,67.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1DC31").s().p("Ah2KdIAA06IDtAAIAAU6g");
	this.shape_7.setTransform(257.3,68);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1DC31").s().p("AjIKdIAA06IDsAAIAARwIClAAIAADKg");
	this.shape_8.setTransform(223,68);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1DC31").s().p("AjIKdIAA06IDsAAIAARwIClAAIAADKg");
	this.shape_9.setTransform(179.6,68);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1DC31").s().p("Ah3KdIAA06IDvAAIAAU6g");
	this.shape_10.setTransform(143.4,68);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1DC31").s().p("ACHKdIAEt6IhBN6IjGAAIg9uNIAAONIi4AAIAA06IFLAAIAgK4IAqq4IFOAAIAAU6g");
	this.shape_11.setTransform(90.1,68);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1DC31").s().p("AhHKfIAAxDIhcAAIAAifQAugEAagPQAbgPAagiIARgYIC4AAIAAU+g");
	this.shape_12.setTransform(16.4,67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683.1,135.9);


(lib.YellowFoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1DC31").s().p("Eg0UACyIAAljMBopAAAIAAFjg");
	this.shape.setTransform(334.9,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,669.8,35.6);


(lib.YellowBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1DC31").s().p("AlEO2IAA9rIKJAAIAAdrg");
	this.shape.setTransform(32.5,95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,190);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BackgroundNew();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1334.8,750.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BackgroundNew();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.704,0.704);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1351.1,760);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,-16.5,0,54.4).s().p("EhAIAJJIAAyRMCARAAAIAASRg");
	this.shape.setTransform(410.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,821,117);


(lib.PurpleBlock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC33CC").s().p("AmoLPIAA2dINRAAIAAWdg");
	this.shape.setTransform(42.5,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,143.8);


(lib.Giveaway = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282C55").s().p("AAqBeIgJgbIhBAAIgJAbIg0AAIBLi7IAlAAIBLC7gAAUAdIgThAIgBAAIgSBAIAmAAg");
	this.shape.setTransform(207.6,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282C55").s().p("AAqBeIgJgbIhBAAIgKAbIgzAAIBLi7IAlAAIBLC7gAAUAdIgThAIgBAAIgSBAIAmAAg");
	this.shape_1.setTransform(306.4,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#282C55").s().p("AhHBFQgdgcAAgpQABgqAdgbQAdgcApAAQAgAAAbATQAbASAJAeIg2AAQgOgZgbAAQgWAAgPARQgOAPAAAXQAAAXAOAQQAOARAXAAQAPAAAMgIQANgIAEgPIg2AAIAAglIBuAAIAAAKQAAAqgcAdQgdAdgrAAQgqAAgdgdg");
	this.shape_2.setTransform(10.1,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282C55").s().p("AgXBeIAAi7IAvAAIAAC7g");
	this.shape_3.setTransform(59.5,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#282C55").s().p("AgYBeIg/i7IAyAAIAlCDIAAAAIAmiDIAyAAIg/C7g");
	this.shape_4.setTransform(108.8,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282C55").s().p("AgzBeIAAi7IBnAAIAAAqIg5AAIAAAdIA4AAIAAApIg4AAIAAAhIA5AAIAAAqg");
	this.shape_5.setTransform(158.2,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#282C55").s().p("AAdBeIgdh5IAAAAIgcB5IgrAAIgxi7IAxAAIAZB5IABAAIAch5IAkAAIAbB6IAAAAIAah6IAxAAIgyC7g");
	this.shape_6.setTransform(257,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282C55").s().p("AgXBeIAAhEIg4h3IA0AAIAbBLIAchLIA0AAIg4B3IAABEg");
	this.shape_7.setTransform(355.8,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363.9,19.6);


(lib.ClaimFreeai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69C5E4").s().p("AgBBDIhUB3Ig8grIBYh1IiLgrIAXhHICLAwIgCiSIBKAAIgDCTICLgvIAXBHIiMAqIBWB1Ig7Asg");
	this.shape.setTransform(2105.6,262.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69C5E4").s().p("AhQMpIAAkUIChAAIAAEUgAhQGDIAAyrIChAAIAASrg");
	this.shape_1.setTransform(2027.8,329.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#69C5E4").s().p("AHiMpIu+2PIgFAAIAAWPIiiAAIAA5RIDbAAIOFU9IAFAAIAA09ICiAAIAAZRg");
	this.shape_2.setTransform(1895.8,329.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#69C5E4").s().p("AhQMpIAA5RIChAAIAAZRg");
	this.shape_3.setTransform(1771.5,329.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#69C5E4").s().p("AFlMpIlk0uIgEAAIliUuIjQAAInM5RIClAAIGMWBIAFAAIGA2BICWAAIGDV/IAFAAIGM1/ICkAAInQZRg");
	this.shape_4.setTransform(1622.1,329.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#69C5E4").s().p("AlAMGQiZg+h4hxQh7hyhDiVQhIicAAirQAAirBDidQBAiYB2h1QB3h2CZhAQCfhCCvAAQCsAACfBBQCaBAB3B0QB3B0BBCXQBECbAACpQAACphECbQhCCVh2B1Qh4B0iZBBQifBDisAAQikAAichAgAkQp6Qh7A2hgBjQhfBig1B9Qg2CBAACKQAACGA4B/QA1B5BgBgQBhBfB8A2QCBA3CKAAQEfAADMjNQBhhgA0h8QA2h+AAiKQAAiJg2iAQg1h8hghgQjMjPkiAAQiMAAiBA4g");
	this.shape_5.setTransform(1328.7,329.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#69C5E4").s().p("AhQMpIAA2/Il0AAIAAiSIOIAAIAACSIlzAAIAAW/g");
	this.shape_6.setTransform(1169.9,329.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#69C5E4").s().p("Am6MpIAA5RIN1AAIAACSIrTAAIAAJGIK7AAIAACRIq7AAIAAJVILTAAIAACTg");
	this.shape_7.setTransform(973,329.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#69C5E4").s().p("AkUMEQiYg/h1hyQh2hzhAiWQhEidAAisQAAiuBDicQA/iXB1hzQB1hyCYg+QCchACrAAQDlAADNB4QDUB7BfDGIi1AAQhdiKiZhPQiWhOimAAQiEAAh+A4Qh5A1hfBhQhgBig2B7Qg3CBAACIQAACFA3B/QA2B7BgBgQBgBhB5A2QB/A5CEAAQCkAACThQQCQhPBviUIC2AAQh2DUjHB5QjHB4jmAAQipAAidhAg");
	this.shape_8.setTransform(804.8,329.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#69C5E4").s().p("AHiMpIu/2PIgEAAIAAWPIiiAAIAA5RIDbAAIOFU9IAFAAIAA09ICiAAIAAZRg");
	this.shape_9.setTransform(616.2,329.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#69C5E4").s().p("AJfMpIjqohIrvAAIjsIhIipAAIKz5RIC1AAIK3ZRgAk9B2IJ1AAIk3rgIgDAAg");
	this.shape_10.setTransform(435.8,329.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#69C5E4").s().p("AGjMpIAAr3ItFAAIAAL3IihAAIAA5RIChAAIAALIINFAAIAArIICiAAIAAZRg");
	this.shape_11.setTransform(261.6,329.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#69C5E4").s().p("AkTMEQiYg/h2hyQh2hzhAiWQhEidAAisQAAiuBDicQBAiXB1hzQB0hyCYg+QCchACrAAQDlAADOB4QDTB7BfDGIi1AAQhdiKiZhPQiWhOimAAQiEAAh9A4Qh6A1hfBhQhgBig1B7Qg4CBAACIQAACGA4B+QA1B7BgBgQBgBhB6A2QB+A5CEAAQClAACShQQCQhPBviUIC2AAQh2DUjHB5QjHB4jmAAQipAAichAg");
	this.shape_12.setTransform(79.6,329.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#69C5E4").s().p("AnAMpIAA5RIOBAAIAAFrIn2AAIAAD7IHnAAIAAFqInnAAIAAEWIH2AAIAAFrg");
	this.shape_13.setTransform(2074.6,83.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#69C5E4").s().p("AnAMpIAA5RIOBAAIAAFrIn1AAIAAD7IHmAAIAAFqInmAAIAAEWIH1AAIAAFrg");
	this.shape_14.setTransform(1940.6,83.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#69C5E4").s().p("ACXMpIl5oSIAAISImMAAIAA5RII9AAQE4AACmCcQCdCSAAD/QAADBhkCGQhrCQjDAmIG3IngAjiAFICZAAQB8gBBFg5QBGg7AAhyQAAhohIg6QhFg5h2AAIidAAg");
	this.shape_15.setTransform(1796.6,83.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#69C5E4").s().p("Am5MpIAA5RINzAAIAAFrInnAAIAAETIHVAAIAAFqInVAAIAAJpg");
	this.shape_16.setTransform(1649.3,83.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#69C5E4").s().p("AFBMpIokrcICeAAQDUAAB7hlQB5hiAAioQAAiQhehjQh5iAj6gBIk0AAIAAW/IiiAAIAA5RIHoAAQEqAACkCfQCTCNAADeQAADEiFCJQiHCPjVAQIHJJbg");
	this.shape_17.setTransform(1430.2,83.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#69C5E4").s().p("AmGKcQiginAAkvIAAv8ICiAAIAAQFQAADpByB8QBnBxCrAAQCsAABnhxQByh8AAjpIAAwFICiAAIAAP8QAAEvigCnQiUCbjzAAQjyAAiUibg");
	this.shape_18.setTransform(1268.7,85.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#69C5E4").s().p("AlAMGQiZg+h4hxQh7hyhEiVQhHicAAirQAAirBDidQBAiYB2h1QB3h1CZhBQCghCCuAAQCsAACfBCQCaA/B3B0QB3B1BBCWQBECbAACpQAACphECbQhBCWh3B0Qh4B1iZBAQifBCisAAQikAAicg/gAkQp5Qh8A2hfBiQhgBig1B9Qg2CBAACKQAACGA4B/QA2B5BgBgQBhBgB8A1QCBA3CKAAQEfAADMjNQBghgA1h7QA2h/AAiKQAAiJg2iAQg1h8hghgQjMjPkiAAQiMAAiBA5g");
	this.shape_19.setTransform(1083.6,83.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#69C5E4").s().p("AhTMpIAAocIoyw1ICzAAIHOOKIHZuKICxAAIo5Q1IAAIcg");
	this.shape_20.setTransform(910,83.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#69C5E4").s().p("AKlMpIAA2gIgFAAIpdWgIiJAAIpZ2gIgFAAIAAWgIiiAAIAA5RID6AAIJKVcIAEAAIJL1cID6AAIAAZRg");
	this.shape_21.setTransform(658.4,83.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#69C5E4").s().p("AhQMpIAA5RIChAAIAAZRg");
	this.shape_22.setTransform(514.6,83.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#69C5E4").s().p("AJeMpIjpohIrvAAIjsIhIipAAIKz5RIC1AAIK3ZRgAk9B2IJ1AAIk3rgIgDAAg");
	this.shape_23.setTransform(390.6,83.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#69C5E4").s().p("AmeMpIAA5RICiAAIAAW/IKcAAIAACSg");
	this.shape_24.setTransform(247.3,83.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#69C5E4").s().p("AkUMEQiYg/h1hyQh2hzhAiWQhEicAAitQAAitBDidQBAiWB1hzQB0hzCYg+QCchACrAAQDlAADNB4QDVB7BfDHIi2AAQhdiKiZhQQiWhOimAAQiEAAh+A4Qh5A2hgBhQhgBhg0B8Qg4CAAACJQAACFA4B/QA1B6BgBhQBgBhB5A2QB/A4CEAAQCkAACThQQCRhPBuiTIC2AAQh2DTjHB5QjHB4jmAAQipAAidhAg");
	this.shape_25.setTransform(81.8,83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2125.3,413.4);


(lib.Chopper2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Wings 2
	this.instance = new lib.Chooper2Wings2();
	this.instance.parent = this;
	this.instance.setTransform(-197,-83);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

	// Wings 1
	this.instance_1 = new lib.Chooper2Wings1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-197,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

	// Layer 2
	this.instance_2 = new lib.Chooper2Shade();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-197,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-165,394,330);


(lib.Chopper1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Wings 2
	this.instance = new lib.COPTER1Wings2();
	this.instance.parent = this;
	this.instance.setTransform(-168,-120);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Wings 1
	this.instance_1 = new lib.COPTER1Wings1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-168,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// Chopper
	this.instance_2 = new lib.COPTER1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-168,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-120,336,239);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClaimFreeai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(271.5,52.9,0.255,0.255,0,0,0,1063.4,207.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,542.6,105.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClaimFreeai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(340,66.1,0.32,0.32,0,0,0,1062.5,206.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,680.1,132.3);


(lib.Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(205,0,1,1,0,0,0,667.4,375.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137).to({_off:false},0).to({x:-220.5},186).wait(1));

	// Background
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,667.4,375.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:375.3,scaleX:0.67,scaleY:0.67},136).to({_off:true},1).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-667.4,-375.4,1334.8,750.8);


(lib._1MillionMovieVector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A35799").s().p("AhogVQBDgEAdgiIBxAAQgVAhgXAWQhCA9hjADg");
	this.shape.setTransform(176.6,-82.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3AAADE").s().p("AAABAQAMgYAEgNQACgGgEgGQgEgGgIAAIiHAAIAAhIIELAAIAAAMQAAA7gZA4g");
	this.shape_1.setTransform(176.9,-96.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3AAADE").s().p("ABqDpIgUg/QgEgMgKAAIkbAAICemGIAiAAIAAB7QgHAEgCAFIgzCpQgBAHAEAGQAEAFAIAAIBmAAQAIAAAEgFQAEgHgCgGIgzioQgBgFgGgFIAAh7IAgAAIC6HRg");
	this.shape_2.setTransform(212.1,-100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A35799").s().p("Ag+AeIAYg7IBlAAIgWA7g");
	this.shape_3.setTransform(194.3,-80.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#633787").s().p("AhIAEQAggEAUgQQAWgTgBgZQABgKgEgIIBKAAIABASQAAA8gyApQgnAhg4AFg");
	this.shape_4.setTransform(258.6,-84.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3AAADE").s().p("ABKBJQgkgYgsgLQhCgQgigYQgkgagOgsIBPAAQAXAZA/APIApANQAsARAPAJQAjAZANApg");
	this.shape_5.setTransform(249.8,-100.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A35799").s().p("ABPBMQgeAAgdgKQgdgKgWgSQgygoAAg9IAAgMIBJAAIAAAMQAAAZAWATQAaAVAnAAIADAAIAABKg");
	this.shape_6.setTransform(242.1,-83.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#633787").s().p("ABXBMIAAgLQAAgZgWgTQgbgVgmAAQgmAAgaAVQgXASAAAaQAAAHACAEIhKAAIAAgLQAAg8AygpQAugnA/AAQBAAAAuAnQAyAoAAA9IAAALg");
	this.shape_7.setTransform(249.9,-117.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#633787").s().p("AgkAfIgVg9IBhAAIASA9g");
	this.shape_8.setTransform(68.8,-120.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3AAADE").s().p("Ah3C5IAAlxIBeAAIAACrQAAAHAEADQAEADAGAAICDAAIAABTIiDAAQgGABgEAEQgEAEAAAGIAABXg");
	this.shape_9.setTransform(122.6,-105.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A35799").s().p("AgBBKQgTgdgcgRQgdgRghgDIAAhRQAlABAmANQAkANAgAXQA2AnAYA6g");
	this.shape_10.setTransform(177.2,-117.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A35799").s().p("Ah6AqIAAhTID1AAIAABTg");
	this.shape_11.setTransform(122.9,-81.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A35799").s().p("AgJDFIiDmJIBgAAIBJEGQABAEAFAEQADADAGAAIABAAQAIAAACgDIBVAAIgoB7g");
	this.shape_12.setTransform(79.6,-96.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A35799").s().p("AhEAoIAAhQICJAAIAABQg");
	this.shape_13.setTransform(128.2,-119.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#633787").s().p("AgxCrQgjgjgSgsQgTgtAAgwQAAgyATgtQATgsAkgiQBEhCBlgCIAABSQg4ACgpAlQgwAtAABLQAABNAwAuQApAlA4ACIAABSQhmgChFhGg");
	this.shape_14.setTransform(152.6,-100.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#633787").s().p("AhgCkIBflHIBiAAIhtFHg");
	this.shape_15.setTransform(95.4,-107.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#70C4D8").s().p("AhNDxIAAnhICbAAIAAHhgAg0DYIBpAAIAAmvIhpAAg");
	this.shape_16.setTransform(-23.3,-101.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#70C4D8").s().p("Ah6DxIAAnhICeAAIAAE7IBXAAIAACmgAhhDYIDDAAIAAh0IhXAAIAAk7IhsAAg");
	this.shape_17.setTransform(0.2,-101.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#70C4D8").s().p("AASDxIAAi1IghAAIAAC1IigAAIAAnhICfAAIAAChIAiAAIgBihICfAAIAAHhgAArAjIAAC1IBsAAIAAmvIhtAAIABChIhUAAIAAihIhtAAIAAGvIBuAAIAAi1g");
	this.shape_18.setTransform(-51.6,-101.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#70C4D8").s().p("Ah7DxIAAnhICdAAIAAE6IBaAAIAACngAhiDYIDFAAIAAh1IhaAAIAAk6IhrAAg");
	this.shape_19.setTransform(24.5,-101.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FED131").s().p("AgQAiQgFAAgFgDQgGgEgBgGIAAgLIABgIQAFgPARgLQAKgHAFgBQARgFAIAKIADAGQADAKgFAMQgEAJgJAIIgIAHQgNAKgLAAIgCgBg");
	this.shape_20.setTransform(-176.7,-117.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FED131").s().p("AzuEyQgMgCgJgDQgVgGgRgIQgUgKgTgOQgSgPgMgOQgIgIgJgOQgXgjgMg5QgYgNgPgUQgHgJgFgLQgOgbABgoQABggAPgmQALgfAbgnQAGgJAHgJQASgUAPgOQANgLAOgKIAggVQAXgNARgIQAZgMAQgGQAYgJAVgGIAxgLQAygJAxAAIBJADQAOABAcAFQArAJAnAQIAkAQIAgAUQAOAJARANIgDAEQgigZgvgSIg4gTQg0gOg/gBQhAABg1AMQg4ANgrAQQgUAHgSAJQggAPgiAZQgnAdgbAbIgRATQgPASgLAUQgMAVgGAWQgEANgCAMQgEAjAMAfQAFALAJANIAGAHQAJAIAEACQgCgjAIgjQAFgZALgXIANgeQAIgPAJgNIAOgTQAHgJAKgKQARgRAQgKQAqgfAigIQAQgDAJABQAIAAAJACQAPgJANgGIAagJQBAgVA1AMIAbAIIAPAGIAYAPIAMgJQATgLANgDQAKgCAGABQAEAAAEAEQAHAKgMAKQgIAHgMAEQgHADgIABIgcADIgOASIiADpQgNAYgIAOQgQAagTAXQgJALgfAbIAJAAIAVgEQAdgNAZgaIAhgoIAcgpIAfgzIBNiAQASgYASgTQAcgfAkgYQAKgHAMgEIAFAAIACACQgBADgFAGQgFAGgEAHIgQAdIhPDBIgQAhIgYAuIg9BHQgOANgMAIQANAEAOgFQALgEAPgLQAGgDAHgIIAVgVQAUgVAQgWICajWQAVgcAUgWQAUgWATgRQANgMANgKIAWgPQBFgtA/AAQAcAAAbAKIATAHQAcAOARARIALAMQABAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQgGgGgGgDIgKgGIgYgNQgQgHgKgCQgKgDgPgCIgRgBIgfACQgLABgNAEIgVAHQgTAHgXANIgOAIIgXASIgRAQIgXAYQgbAegRAWQgVAZglAwIhRBrIgrA3IgdAgIgQAQQgQAOgLAGQgYAPgbgDIgKgBQgEgDgGACIgMAFQgIAEgRAAIgFgBIgHgCQgFgDgCgEQgCgEABgDIAEgFQADgDAGgCIAHgCQAIgBAbADQARgRALgUIAVgnIBejWQAIgLACgGIgHAFQgFAFgHAIIgJAMIgLAQIgUAeIgYAmIggA2IgOAYQgDAGgJAMIgyBAQgMAMgLAJQgXARgVAGQgPAEgUgCIgbAMQgMACgGAAIgSgFQgEgDgBgGQAAgGAFgEIAGgFIAIgDQAPgCAWAEIAIgGQAIgHAKgQIAVgmIAYgzIA8h5QALgYAKgRQASgdAQgRQAagdAIgGIAUgPQgPgJgSgDQgLgBgXAAQgOAAgVADIgaAGQgaAHgcANQAJAEAEAIQAMAPACATIABASQAAASgEAUIgGAaQgIAbgMAYIgLAXQgLAUgRATQgHAJgJAIQgKAIgJAFQgKAGgJAEQgHADgEAAQgKADgLAAQgFABgKgCQgIgBgHgEIgNgHQgCAAgDACIgEACQggAPgkgHIADAPQAEAPAHAQIAMAXIAPAXQALANALAKQATAQATALQAWANAYAFQAUAFAaABMAqvAAAIgBAPMgqtAABQgSAAgSgDgAzjinIgUAHQgSAHgVAPQgbATgRAUIgOARQgNASgLAXQgUAlgHAkIgEAaQgCARABASIACAQQAUALAfgKQAJgDAHgFIgGgLIgDgHQgFgOgCgLIgCgNQgCgMACgPIACgLQADgRAEgKIAJgUIATgfIApguIAmghIAagTIgIAAIgMABgAzTgrIgBAJIgDALQgHAUgHAOIgbAuQgLAQgKAKIgZAXQAKAGAWgBQAbgCAZgXQAFgEAGgIQAJgKAJgMQAWgfAOgqQAVg9gMguQgDgKgEgFQgGgHgIgCQgPAGgSAKQgRALgXASIgXAVQgMANgJAKQgJALgIANQgMAPgHASQgSAqAJAhQADAMAIAOIANgIIAPgNQAcgcATgjQATgfAHgZg");
	this.shape_21.setTransform(-115.1,-100.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FED131").s().p("An2DnIgNgEQgGgEgFgGQgGgKAAgMIADgUIgLANQgrAxgqgIQgOgCgIgLQgFgFgCgHIgCgLQgDgfAegrICDizIA/AAIipDVQgSAXgEAOQgFAPAKAIQAHADAIgCQAFAAAKgEQAHgEAMgKQAJgIANgOQAIgHAFgIIEMlfIBEAAIkcFiIgMAXIgEAMQgBAIACAFQADAEAEACQAKACARgIQAHgDALgJQALgKAJgKIAOgQIEMljIBGAAIkdFgQgPASgCASQAAAFABAEQABADACACIAEACQAKAFAOgFQASgJAQgQIAYgbICnjcIA8AAIipDVQgSAXgFAQQgDAJADAHIAEADQAGADAEAAIAIgBQAIAAAJgGIANgJQAMgIANgQIAMgPQAIgMAVgnIAMgVIAUgfQAMgQAOgQQAdgfAagRQAYgRAegMIARgGQAQgEAOAAIAGAAQALAAAHAHQAJAJgDAOIAVgbIA7gBIiwDhIgFAKIgGAPQgCAMAEAGQAEADAEAAQAHACAKgGQADgBAHgGIAMgMIBehyIBehxQALgLANgHQAhgQATASQAHAIABAKQACASgGAVIAOgOQAWgZAYgNQAZgPAQABQAJACADABQAEACAEAFIADAFQACAEABANIAAAJQgBALgCAKIAQgQQAQgPAMgIIAKgHQAKgGAHgCQARgGANAFQAJADAFAHQANAUgJAeQgDAJgGALQgWArgeAoIgxBCQgFAJgCAFQgGAUAOAIQADABAEAAIAMABQANgBANgHQAVgLAPgRQAFgGAGgIIAOgTQAKgOALgUQAIgNAMgZQAIgRAFgPQAMggAGgcIAEgZQACgbAAgTIgBgRQgCgSgFgQQgFgUgLgPQgDgFgFgFIgHgHQgSgPgZgGQgtgJgqAVQgIAEgFAFQgHAFgFAGQgSAWAFAYQABAIAHAJIAFAEQAEAEALABQAIAAAIgCIAOgEQAOgGAMgNQAKgNAHgOIADABQgDANgFAKQgEAIgJALQgJAJgIAFQgGAFgEABQgLAFgPgBQgMgBgIgDQgEgCgFgDQgDgCgFgGQgEgFgDgHQgIgbASggQAIgMAPgKIALgHIASgIQAbgLAhAAQAkABAdAUIANALIAJAIQAIAJAFAKIAGANQAJATADAbQADAXgEAhIgMA6QgPA4gmA/IglA3QgVAYgVAOQgJAGgSAIIgHACIgNACIgMgBQgWgCgLgNIgGgJQgIgUAIgbQACgHAIgQIATghIAHgKIAGgIIA/hQIANgUIADgHIABgKIgCgHQgCgDgHgBQgJgBgQAKIgRAOIgPAQIgMAOIipDbIg9gBICtjZQAIgLAIgNQAIgNAAgMQgBgGgCgCQgDgEgIAAQgFgBgFADQgTALgWAWQgeAdgMAQIiWDHIhAAAICojSIAPgTQAJgMACgIIACgNQgBgHgEgFQgIgHgNAFQgJAEgKAJIgOAQIilDIIgLANIgLALQgLALgIAEQgQALgRAAQgQAAgIgJQgJgLAAgNQgBgGADgRIgUAUQgMAMgKAHQgYAQgUABQgKAAgKgFQgFgCgEgGQgLgUAEgaQgKAMgLAKIgPANQgcAUgRADQgUADgNgKQgFgDgCgEQgHgLABgMIADgWQgUAXgLALQgQAOgTAHQgRAGgRgEQgJgDgHgHQgFgGgCgGIgCgJIgBgIQAAgLACgIQgXAbgWAQQgWASgWAAIgLgBgABIgvQgIACgFADIgMAHQgKAGgOAMIhIBPIgaAjQgMAQgMAUQgIANgFALIgMAcIgCAOIAAAHQABAEADACQAKADALgFQAGgCAOgIQANgIAXgXIAUgVIA8hRQAQgSAPgaIAIgMQANgUAEgMIACgLQAAgGgDgGQgFgEgEAAIgJABg");
	this.shape_22.setTransform(-138.1,-101.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FED131").s().p("AgQAiQgFAAgEgDQgGgEgCgGIAAgLIABgIQACgGAGgHQAGgIAIgFQAKgHAFgBQARgFAIAKIADAGQAEAKgGAMQgEAIgIAJIgJAHQgNAJgLAAIgCAAg");
	this.shape_23.setTransform(-141.2,-117.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(43));

	// Giveaway
	this.instance = new lib.Giveaway("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.6,113.4,1,1,0,0,0,181.9,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_20 = new cjs.Graphics().p("AeZKnQjQAAAAjSIAAxxIDtAAIAARtQAAARATAAIANAAQAUAAAAgRIAAxtIDtAAIAARxQAABpg0A0Qg0A1hrAAgAVOKnQhqAAg0g1Qgzg0AAhpIAAupQAAjSDRAAIBxAAQDSAAAADSIAAOpQAADSjSAAgAVrnQIAAOhQAAARATAAIATAAQARAAAAgRIAAuhQAAgRgRAAIgTAAQgTAAAAARgAnhKnQjRAAAAjSIAAupQAAjSDRAAIBxAAQDSAAAADSIAAOpQAADSjSAAgAnFnQIAAOhQAAARATAAIAUAAQARAAAAgRIAAuhQAAgRgRAAIgUAAQgTAAAAARgEAtHAKlIAA06IEhAAQB6AAA7A6QA6A6AAB5IAANgQAAB4g6A6Qg7A7h6AAgEAw1AHiIAaAAQAZAAAAgdIAAt8QAAgbgZAAIgaAAgEApCAKiIhnpYIAKJYIjFAAIAA06IDjAAIBcIlIgJolIDFAAIAAU6gAJKKgIAA06IE6AAQBrAAA0A0QAzA0AABqIAAHYQAABqgzA0Qg0A0hrAAIhNAAIAAG+gAM3AfIAhAAQATAAAAgTIAAnQQAAgTgTAAIghAAgACuKeIhnpZIAJJZIjEAAIAA06IDjAAIBcIlIgKolIDFAAIAAU6gAvBKeIAA06IDvAAIAAU6gA1pKeIAA06IDtAAIAARvIClAAIAADLgA8bKeIAA06IDtAAIAARvIClAAIAADLgEgg0AKeIAA06IDvAAIAAU6gEglKAKeIAEt7IhBN7IjHAAIg9uOIAAOOIi4AAIAA06IFLAAIAgK3IArq3IFOAAIAAU6gEgz7AKeIAAxEIhbAAIAAieQAtgFAbgPQAagOAagjIARgXIC6AAIAAU+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_graphics_20,x:0,y:11.4}).wait(23));

	// Purple D
	this.instance_1 = new lib.YellowBlock("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.4,-206.5,0.864,0.756,0,0,0,-0.2,0);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({y:-63.5},10).wait(1));

	// Purple N
	this.instance_2 = new lib.YellowBlock("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(229.8,89.4,0.859,0.756,0,0,0,-0.5,0.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({y:-63.4},10).wait(2));

	// Purple U
	this.instance_3 = new lib.YellowBlock("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(173.7,-206.5,0.864,0.756,0,0,0,-0.2,0);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({y:-63.5},10).wait(3));

	// Purple O
	this.instance_4 = new lib.YellowBlock("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(114.9,89.4,0.859,0.756,0,0,0,-0.5,0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({y:-63.4},10).wait(4));

	// Purple P
	this.instance_5 = new lib.YellowBlock("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(60.7,-206.4,0.769,0.756);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).to({regX:-0.2,scaleX:0.86,x:54.8,y:-63.5},10).wait(5));

	// Purple N
	this.instance_6 = new lib.YellowBlock("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.4,89.4,0.859,0.756,0,0,0,-0.5,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({y:-63.4},10).wait(6));

	// Purple O
	this.instance_7 = new lib.YellowBlock("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-71,-206.4,0.864,0.756,0,0,0,-0.3,0);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).to({y:-63.5},10).wait(7));

	// Purple I
	this.instance_8 = new lib.YellowBlock("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-96.8,89.4,0.366,0.756,0,0,0,-0.4,0.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).to({y:-63.4},10).wait(8));

	// Purple L
	this.instance_9 = new lib.YellowBlock("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-138.6,-206.4,0.615,0.756,0,0,0,-0.2,0);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({y:-63.5},10).wait(9));

	// Purple L
	this.instance_10 = new lib.YellowBlock("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-182,89.4,0.613,0.756,0,0,0,-0.4,0.1);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({_off:false},0).to({y:-63.4},10).wait(10));

	// Purple I
	this.instance_11 = new lib.YellowBlock("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-211.9,-206.4,0.432,0.756,0,0,0,-0.1,0);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({_off:false},0).to({y:-63.5},10).wait(11));

	// Purple M
	this.instance_12 = new lib.YellowBlock("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-295.2,89.5,1.306,0.756,0,0,0,-0.3,0.1);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({_off:false},0).to({y:-63.4},10).wait(12));

	// Purple 1
	this.instance_13 = new lib.YellowBlock("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-353.2,-206.4,0.769,0.756);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20).to({_off:false},0).to({y:-63.5},10).wait(13));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AeZKnQjQAAAAjSIAAxxIDtAAIAARtQAAARATAAIANAAQAUAAAAgRIAAxtIDtAAIAARxQAABpg0A0Qg0A1hrAAgAVOKnQhqAAg0g1Qgzg0AAhpIAAupQAAjSDRAAIBxAAQDSAAAADSIAAOpQAADSjSAAgAVrnQIAAOhQAAARATAAIATAAQARAAAAgRIAAuhQAAgRgRAAIgTAAQgTAAAAARgAnhKnQjRAAAAjSIAAupQAAjSDRAAIBxAAQDSAAAADSIAAOpQAADSjSAAgAnFnQIAAOhQAAARATAAIAUAAQARAAAAgRIAAuhQAAgRgRAAIgUAAQgTAAAAARgEAtHAKlIAA06IEhAAQB6AAA7A6QA6A6AAB5IAANgQAAB4g6A6Qg7A7h6AAgEAw1AHiIAaAAQAZAAAAgdIAAt8QAAgbgZAAIgaAAgEApCAKiIhnpYIAKJYIjFAAIAA06IDjAAIBcIlIgJolIDFAAIAAU6gAJKKgIAA06IE6AAQBrAAA0A0QAzA0AABqIAAHYQAABqgzA0Qg0A0hrAAIhNAAIAAG+gAM3AfIAhAAQATAAAAgTIAAnQQAAgTgTAAIghAAgACuKeIhnpZIAJJZIjEAAIAA06IDjAAIBcIlIgKolIDFAAIAAU6gAvBKeIAA06IDvAAIAAU6gA1pKeIAA06IDtAAIAARvIClAAIAADLgA8bKeIAA06IDtAAIAARvIClAAIAADLgEgg0AKeIAA06IDvAAIAAU6gEglKAKeIAEt7IhBN7IjHAAIg9uOIAAOOIi4AAIAA06IFLAAIAgK3IArq3IFOAAIAAU6gEgz7AKeIAAxEIhbAAIAAieQAtgFAbgPQAagOAagjIARgXIC6AAIAAU+g");
	mask_1.setTransform(0,11.4);

	// Purple D
	this.instance_14 = new lib.PurpleBlock("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(315.2,-134.6,0.661,1,0,0,0,41.9,71.9);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},0).to({y:158.7},19).to({_off:true},1).wait(11));

	// Purple N
	this.instance_15 = new lib.PurpleBlock("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(258.2,89.3,0.66,1,0,0,0,42.6,0);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(11).to({_off:false},0).to({y:-206.9},19).to({_off:true},1).wait(12));

	// Purple U
	this.instance_16 = new lib.PurpleBlock("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(201.6,-134.6,0.661,1,0,0,0,41.9,71.9);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off:false},0).to({y:158.7},19).to({_off:true},1).wait(13));

	// Purple O
	this.instance_17 = new lib.PurpleBlock("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(142.7,161.2,0.661,1,0,0,0,41.9,71.9);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(9).to({_off:false},0).to({y:-135},19).to({_off:true},1).wait(14));

	// Purple P
	this.instance_18 = new lib.PurpleBlock("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(82.6,-134.6,0.661,1,0,0,0,41.9,71.9);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(8).to({_off:false},0).to({y:158.7},19).to({_off:true},1).wait(15));

	// Purple N
	this.instance_19 = new lib.PurpleBlock("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(14.6,161.2,0.66,1,0,0,0,42,71.9);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({_off:false},0).to({y:-135},19).to({_off:true},1).wait(16));

	// Purple O
	this.instance_20 = new lib.PurpleBlock("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-43.1,-134.6,0.661,1,0,0,0,41.9,71.9);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(6).to({_off:false},0).to({y:158.7},19).to({_off:true},1).wait(17));

	// Purple I
	this.instance_21 = new lib.PurpleBlock("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-84.8,161.2,0.28,1,0,0,0,42.2,71.9);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(5).to({_off:false},0).to({y:-135},19).to({_off:true},1).wait(18));

	// Purple L
	this.instance_22 = new lib.PurpleBlock("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-118.7,-134.6,0.471,1,0,0,0,42.2,71.9);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({_off:false},0).to({y:158.7},19).to({_off:true},1).wait(19));

	// Purple L
	this.instance_23 = new lib.PurpleBlock("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-162,161.2,0.471,1,0,0,0,42.2,71.9);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(3).to({_off:false},0).to({y:-135},19).to({_off:true},1).wait(20));

	// Purple I
	this.instance_24 = new lib.PurpleBlock("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-197.6,-134.6,0.324,1,0,0,0,42.4,71.9);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(2).to({_off:false},0).to({x:-196.3,y:158.7},19).to({_off:true},1).wait(21));

	// Purple M
	this.instance_25 = new lib.PurpleBlock("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-252.5,161.2,1,1,0,0,0,42.5,71.9);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).to({y:-135},19).to({_off:true},1).wait(22));

	// Purple 1
	this.instance_26 = new lib.PurpleBlock("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-328.2,-134.6,0.588,1,0,0,0,42.5,71.9);

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({y:158.7},19).to({_off:true},1).wait(23));

	// Yellow Million
	this.instance_27 = new lib.YellowMillion("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(0,11.4,1,1,0,0,0,341.5,67.9);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(42).to({_off:false},0).wait(1));

	// Yellow Foot
	this.instance_28 = new lib.YellowFoot("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(1.1,113.8,0.015,1,0,0,0,335.1,17.8);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(34).to({_off:false},0).to({regX:334.9,scaleX:1},8).wait(1));

	// Grey Million
	this.instance_29 = new lib.YellowMillion("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(0,11.4,1,1,0,0,0,341.5,67.9);
	this.instance_29.filters = [new cjs.ColorFilter(0.26171875, 0.33984375, 1, 1, -18, -3, 20, 0)];
	this.instance_29.cache(-2,-2,687,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(43));

	// Grey Foot
	this.instance_30 = new lib.YellowFoot("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(1.1,113.8,1,1,0,0,0,334.9,17.8);
	this.instance_30.filters = [new cjs.ColorFilter(0.26171875, 0.33984375, 1, 1, -18, -3, 20, 0)];
	this.instance_30.cache(-2,-2,674,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(43));

	// Shadow
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A1812").s().p("Eg0UAAqID6hTMBexAAAIF+BTg");
	this.shape_24.setTransform(1.1,91.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A1812").s().p("Ag9nuIBRghIApQIIh6AXg");
	this.shape_25.setTransform(315.7,13.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A1812").s().p("AgjJ9IAA0BIBHgZIAAU6g");
	this.shape_26.setTransform(285.1,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A1812").s().p("AhPEfIAopaIB3JhIgcAWg");
	this.shape_27.setTransform(257.5,47.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A1812").s().p("Ahdk2IBygUIBJJDIgyBSg");
	this.shape_28.setTransform(261.1,-21.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A1812").s().p("AhWJvIBWz4IBXgUIAAU6g");
	this.shape_29.setTransform(224.9,11.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A1812").s().p("Ag5JLIAAx2IBZgfIAaSVg");
	this.shape_30.setTransform(199.4,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A1812").s().p("AicJiIgNghIAAyfICQhDIAPAAIBgBXIA2IPIAeLdg");
	this.shape_31.setTransform(174.8,11.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A1812").s().p("Ag8H5IAAvxIBkAAIAWPxg");
	this.shape_32.setTransform(141.7,11.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A1812").s().p("AhCEQIAAofIBgAAIAlIfg");
	this.shape_33.setTransform(85.4,-9.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2A1812").s().p("AhVJDIAAwmICri6IAAU7g");
	this.shape_34.setTransform(50.1,11.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A1812").s().p("AhFC6IAQoYIB7K9g");
	this.shape_35.setTransform(10.5,43.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2A1812").s().p("AhChYIBpj3IAcKfg");
	this.shape_36.setTransform(15.5,-21.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2A1812").s().p("AgII/IAAwWIARjGIAAU6g");
	this.shape_37.setTransform(-12.6,11.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2A1812").s().p("Ag0H5IAAvxIBpAAIAAPxg");
	this.shape_38.setTransform(-41.5,11.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2A1812").s().p("AgzqdIBnC8IAAQWIhnBog");
	this.shape_39.setTransform(-67.1,11.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2A1812").s().p("AiGKdIBF06IDIDNIAARJIglAkg");
	this.shape_40.setTransform(-108.2,11.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2A1812").s().p("AhzKdIAk06IDDCHIAASUIgfAfg");
	this.shape_41.setTransform(-150.2,11.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2A1812").s().p("AgdqdIA7AfIAAUBIg7Aag");
	this.shape_42.setTransform(-183.2,11.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2A1812").s().p("AgdqdIA8AmIAAT4Ig8Acg");
	this.shape_43.setTransform(-211.3,11.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2A1812").s().p("Agxo5IBjAhIhKRSg");
	this.shape_44.setTransform(-250.3,1.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2A1812").s().p("AAApKIA+R5Ih7Acg");
	this.shape_45.setTransform(-237.3,19.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2A1812").s().p("Ag9nXIB7OSIh7Adg");
	this.shape_46.setTransform(-263.8,31.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2A1812").s().p("AhwqjIDhBFIAATUIjcAug");
	this.shape_47.setTransform(-298,11.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2A1812").s().p("AiVI2QgTgDgTgaQgmg1ABhzIAArGICLjRIDzh1IBDU3g");
	this.shape_48.setTransform(109.1,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.5,-131.5,683.1,263.2);


// stage content:
(lib.CGIB3611Vegas1Mil824x402Vector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_306 = function() {
		this.gotoAndPlay(283);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(306).call(this.frame_306).wait(1));

	// Layer 2
	this.instance = new lib._1MillionMovieVector();
	this.instance.parent = this;
	this.instance.setTransform(409.3,91.9,0.171,0.171,0,0,0,-5.9,-37.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).to({regX:-5.7,regY:-37.1,scaleX:0.57,scaleY:0.57,x:409.4,y:68.1},9).wait(58));

	// Layer 9
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(407,239.1,0.28,0.28,0,0,0,271.2,52.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(245).to({_off:false},0).to({regX:271.3,scaleX:1,scaleY:1},9).wait(53));

	// Chopper 1
	this.instance_2 = new lib.Chopper1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(186,-165,1.464,1.464,13.2,0,0,0,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(218).to({_off:false},0).to({x:1064.2,y:493.6},21).wait(68));

	// Claim Free
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(410.6,164.2,1.085,1.085,0,0,0,340.1,66.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136).to({_off:false},0).to({startPosition:0},103).to({_off:true},1).wait(67));

	// Chopper 1
	this.instance_4 = new lib.Chopper1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-132.1,-101.1,1.464,1.464,0,0,0,-0.1,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).to({x:878.1,y:549.7},15).to({_off:true},1).wait(171));

	// Chopper 3
	this.instance_5 = new lib.Chopper2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-83.5,416,0.348,0.348,0,0,180,0,-0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(267).to({_off:false},0).to({x:128.6,y:346.1},14).wait(26));

	// Chopper 2
	this.instance_6 = new lib.Chopper2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1013.1,417.1,1,1,0,0,0,0,-0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({regX:0.1,scaleX:0.73,scaleY:0.73,x:677.5,y:331.7},21).wait(67).to({scaleX:0.36,scaleY:0.32,x:106.3,y:268.1,alpha:0},15).wait(119).to({scaleX:0.73,scaleY:0.73,x:985.6,y:451.9,alpha:1},0).to({x:690.5,y:351.8},15).wait(38));

	// Black Logo
	this.instance_7 = new lib._1MillionMovieVector();
	this.instance_7.parent = this;
	this.instance_7.setTransform(403.2,171.4,0.717,0.717,0,0,0,-4.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1},120).to({_off:true},1).wait(186));

	// Gradient
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(410.5,343.6,1,1,0,0,0,410.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(307));

	// Background
	this.instance_9 = new lib.Symbol2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(410.5,200.9,1,1,0,0,0,675.5,379.9);

	this.instance_10 = new lib.Back();
	this.instance_10.parent = this;
	this.instance_10.setTransform(390.1,201.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_9}]},120).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_9}]},103).to({state:[{t:this.instance_10}]},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.85,scaleY:0.85,x:410.7,y:234.6},120).to({scaleX:0.83,scaleY:0.83,y:239.1},16).to({scaleX:0.71,scaleY:0.71,x:410.5,y:267.9},103).to({_off:true},1).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.5,22,1351.1,760);
// library properties:
lib.properties = {
	width: 821,
	height: 402,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/BackgroundNew.jpg", id:"BackgroundNew"},
		{src:"images/CGIB_3611 Vegas 1Mil 824x402_atlas_P_.png", id:"CGIB_3611 Vegas 1Mil 824x402_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;