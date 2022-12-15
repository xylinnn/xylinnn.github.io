(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"走鋼索_atlas_1", frames: [[0,52,89,30],[0,0,97,50],[99,0,48,96]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["走鋼索_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["走鋼索_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["走鋼索_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3595,358);


(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.頭部 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040F37").s().p("AgoAxQghglAFgaQAEgOAXgXQARgRAkABQAfABATAKIAHAIQADALgKAKQgOgBgOAEQgdAHgEAUQgGgDgHgCQgPgEADAOQAEARAEAFQAFAFAIgEIgiAlg");
	this.shape.setTransform(6.9795,6.8223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2EEE7").s().p("AghAxIgMg5QgjgoANgiQAFAEAFgDIADgCQAEACAEgCIAMgGIATgFQATgFATgCIAfASQACAGABAOIABARQACAEAMANQABACgIAJQAGAkgHAEQgEADgHABIgKABQgVAHgWAiQgUAggDACIgKg1g");
	this.shape_1.setTransform(7.7474,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.頭部, new cjs.Rectangle(0,0,14.9,22.7), null);


(lib.左鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040F37").s().p("AgBApQgMgEgOgIIgLgGIgEAKIgzgRIASgoIAFgBQAJgRAKgHQAVgPAEAzIAQANQASAPAHAEQASAKA8AZQhDgDgbgKg");
	this.shape.setTransform(9.35,5.3383);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左鞋, new cjs.Rectangle(0,0,18.7,10.7), null);


(lib.左手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手, new cjs.Rectangle(0,0,44.5,15), null);


(lib.左小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040F37").s().p("AACC8IgvgMIgHgCQAGgIAIhhQAIhjAAhDIADg9IAbgZQAdgRATAuQAOA2gWCWQgLBLgOBAg");
	this.shape.setTransform(5.2972,18.8804);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左小腿, new cjs.Rectangle(0,0,10.6,37.8), null);


(lib.左大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040F37").s().p("ABVCvQgPgJgRgSIgPgQQgUgphPhQQhEhEgJgrIAAgBIgBgMIABgBQABgdAKgRQAOgaAiAGQAuAJASAMQAJAHAVAeIAGAFIAyBPQA0BbARBIQgEA5gcAAQgKAAgNgHg");
	this.shape.setTransform(14,18.1692);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左大腿, new cjs.Rectangle(0,0,28,36.4), null);


(lib.右鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040F37").s().p("AgFAHQgEgLgDgPIgBgNIgKADIgSgyIArgMIAcAHQAWALgdAcIgBAWQgBAWABAJQACATARBBQgmg4gIgdg");
	this.shape.setTransform(4.15,9.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右鞋, new cjs.Rectangle(0,0,8.3,18.3), null);


(lib.右手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手, new cjs.Rectangle(0,0,48.5,25), null);


(lib.右小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040F37").s().p("AiOBzIgWgxIgCgHQAKAABSg0QBTg0A2gqIAygiIAlAGQAfAOgZAqQgjAsiEBJQhDAkg7Acg");
	this.shape.setTransform(16.7158,12.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右小腿, new cjs.Rectangle(0,0,33.5,24.5), null);


(lib.右大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040F37").s().p("AA/C7QgOgLgPgUIgNgSQgOgqhIhgQg9hRAEgvIAAgKQABgJAGAAQAagtAmgEQAzgFAmBaIAmBUQAoBiAHBKQgLA0gZAAQgLAAgNgKg");
	this.shape.setTransform(12.3345,19.7041);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右大腿, new cjs.Rectangle(0,0,24.7,39.5), null);


(lib.上半身 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.上半身, new cjs.Rectangle(0,0,24,48), null);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-898.7,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-898.7,-89.4,1797.5,179);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.走鋼索的男人 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_3
	this.ikNode_6 = new lib.頭部();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(53.7,16.8,1,1,0,0,0,7.4,16.8);

	this.ikNode_1 = new lib.上半身();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(53.75,22.7,1,1,0,0,0,13.9,9.2);

	this.ikNode_2 = new lib.左手();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(53.7,20.15,1,1,0,0,0,8.2,7.7);

	this.ikNode_4 = new lib.右手();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(43.4,21.95,1,1,0,0,0,43.4,3.1);

	this.ikNode_8 = new lib.右大腿();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(48.4,58.75,0.9997,0.9997,-1.0346,0,0,5.5,10.3);

	this.ikNode_10 = new lib.右小腿();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(59.65,88.25,0.9997,0.9997,-23.7143,0,0,24.4,9.2);

	this.ikNode_12 = new lib.右鞋();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(42.65,111.9,0.9997,0.9997,-20.9519,0,0,3.6,5.3);

	this.ikNode_14 = new lib.左大腿();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(54.8,60.8,1,1,0,0,0,11,11.5);

	this.ikNode_16 = new lib.左小腿();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(67.9,83.5,1,1,0,0,0,6.7,8.3);

	this.ikNode_18 = new lib.左鞋();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(63.95,114.15,1,1,0,0,0,3.9,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9997,scaleY:0.9997,rotation:-20.9519,x:42.65,y:111.9,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:-23.7143,x:59.65,y:88.25,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0346,x:48.4,y:58.75,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:0,x:43.4,y:21.95,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:0,x:53.7,y:20.15,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]}).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.6,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7129,x:59.6,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0338,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:0.7475,x:43.35,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:0.737,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.6,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.6,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0338,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:1.4952,x:43.3,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:1.4742,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.6,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.6,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0329,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:2.2431,x:43.3,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:2.2107,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.6,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.55,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0329,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:2.9914,x:43.35,y:21.85,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:2.9485,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.6,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.55,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0329,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:3.7393,x:43.3,y:22,regY:3.2,regX:43.4}},{t:this.ikNode_2,p:{rotation:3.6858,x:53.6,y:20.25,regY:7.8,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.6,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.55,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0329,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:4.4869,x:43.3,y:21.85,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:4.4229,x:53.6,y:20.25,regY:7.8,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.6,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.55,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0329,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:5.2346,x:43.15,y:21.85,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:5.1599,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.6,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.55,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0329,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:5.983,x:43.2,y:21.8,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:5.8968,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.55,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.55,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0329,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:6.7307,x:43.25,y:21.95,regY:3.2,regX:43.4}},{t:this.ikNode_2,p:{rotation:6.6339,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.55,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.55,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.032,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:7.4787,x:43.35,y:21.75,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:7.3712,x:53.6,y:20.15,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9515,x:42.55,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.55,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.032,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:8.2263,x:43.3,y:21.75,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:8.1087,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9518,x:42.55,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.5,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.032,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:8.9744,x:43.15,y:21.75,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:8.846,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9518,x:42.55,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.5,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.032,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:9.7222,x:43.35,y:21.75,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:9.5829,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9518,x:42.5,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7133,x:59.5,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.032,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:10.4699,x:43.35,y:21.75,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:10.3206,x:53.55,y:20.15,regY:7.8,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9518,x:42.5,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7129,x:59.5,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.032,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:11.2177,x:43.3,y:21.85,regY:3.2,regX:43.4}},{t:this.ikNode_2,p:{rotation:11.0572,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9518,x:42.5,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7129,x:59.5,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0312,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:11.9656,x:43.3,y:21.85,regY:3.2,regX:43.4}},{t:this.ikNode_2,p:{rotation:11.7948,x:53.65,y:20.15,regY:7.7,regX:8.3}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9518,x:42.5,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7129,x:59.5,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0312,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:12.7136,x:43.3,y:21.7,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:12.5318,x:53.6,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9518,x:42.5,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7129,x:59.5,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0312,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:13.4614,x:43.2,y:21.7,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:13.2691,x:53.7,y:20.15,regY:7.7,regX:8.3}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.9518,x:42.5,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.7129,x:59.5,y:88.15,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.0312,x:48.35,y:58.7,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2097,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-0.2492,x:63.55,y:114.35,regX:3.9}},{t:this.ikNode_16,p:{rotation:-0.2492,x:67.4,y:83.65,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:1.155,x:54.65,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-17.8063,x:42.05,y:111.6,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-22.5111,x:59.4,y:88.4,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:-0.6122,x:48.5,y:58.75,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2097,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-0.4983,x:63.2,y:114.6,regX:3.9}},{t:this.ikNode_16,p:{rotation:-0.4983,x:66.85,y:83.95,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:2.3096,x:54.65,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.6605,x:41.6,y:111.45,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-21.3106,x:59.4,y:88.35,regX:24.3,regY:9.1}},{t:this.ikNode_8,p:{rotation:-0.1924,x:48.8,y:58.8,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2097,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-0.7475,x:62.8,y:114.9,regX:3.9}},{t:this.ikNode_16,p:{rotation:-0.7475,x:66.35,y:84.15,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:3.4651,x:54.6,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-11.5156,x:41.1,y:111.1,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.1107,x:59.4,y:88.65,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:0.2221,x:49.1,y:58.8,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2097,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-0.9967,x:62.45,y:115.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:-0.9967,x:65.85,y:84.45,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:4.6202,x:54.4,y:60.8,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-8.3701,x:40.55,y:110.85,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-18.9101,x:59.5,y:88.7,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:0.6419,x:49.35,y:58.85,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2088,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-1.2459,x:62.05,y:115.35,regX:3.9}},{t:this.ikNode_16,p:{rotation:-1.2459,x:65.35,y:84.65,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:5.7756,x:54.55,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.2243,x:40.3,y:110.6,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-17.7098,x:59.6,y:88.8,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:1.0618,x:49.55,y:58.85,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2088,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-1.4952,x:61.65,y:115.6,regX:3.9}},{t:this.ikNode_16,p:{rotation:-1.4952,x:64.8,y:84.95,regY:8.4,regX:6.7}},{t:this.ikNode_14,p:{rotation:6.9306,x:54.35,y:60.75,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.0794,x:39.85,y:110.2,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-16.5099,x:59.55,y:88.9,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:1.4817,x:49.9,y:58.95,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2088,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-1.7444,x:61.25,y:115.8,regX:3.9}},{t:this.ikNode_16,p:{rotation:-1.7444,x:64.25,y:85.05,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:8.0858,x:54.45,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.0618,x:39.4,y:109.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.3087,x:59.6,y:88.95,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:1.9026,x:50.15,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.4}},{t:this.ikNode_4,p:{rotation:14.2088,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-1.9937,x:60.9,y:116,regX:3.9}},{t:this.ikNode_16,p:{rotation:-1.9937,x:63.75,y:85.25,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:9.2408,x:54.4,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.208,x:39,y:109.55,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.1077,x:59.6,y:89.05,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:2.3217,x:50.35,y:58.95,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2088,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-2.2431,x:60.45,y:116.2,regX:3.9}},{t:this.ikNode_16,p:{rotation:-2.2431,x:63.3,y:85.45,regY:8.3,regX:6.8}},{t:this.ikNode_14,p:{rotation:10.396,x:54.2,y:60.75,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.3529,x:38.55,y:109.2,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-12.9077,x:59.7,y:89.05,regX:24.4,regY:9.1}},{t:this.ikNode_8,p:{rotation:2.7411,x:50.65,y:59,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2088,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.55,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-2.4925,x:60.2,y:116.4,regX:4}},{t:this.ikNode_16,p:{rotation:-2.4925,x:62.65,y:85.6,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:11.5512,x:54.35,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.4972,x:38.25,y:108.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-11.7065,x:59.65,y:89.15,regX:24.3,regY:9.1}},{t:this.ikNode_8,p:{rotation:3.1614,x:50.9,y:59,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2088,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-2.7419,x:59.65,y:116.55,regX:3.9}},{t:this.ikNode_16,p:{rotation:-2.7419,x:62.1,y:85.9,regY:8.4,regX:6.7}},{t:this.ikNode_14,p:{rotation:12.7066,x:54.25,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:13.6432,x:37.85,y:108.5,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-10.5065,x:59.75,y:89.35,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:3.5802,x:51.2,y:59.15,scaleX:0.9996,scaleY:0.9996,regY:10.4}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-2.9914,x:59.25,y:116.75,regX:3.9}},{t:this.ikNode_16,p:{rotation:-2.9914,x:61.6,y:85.9,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:13.8617,x:54.25,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:16.7888,x:37.45,y:108,regY:5.2,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-9.3055,x:59.75,y:89.4,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:4.0001,x:51.45,y:59.05,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-3.2409,x:58.85,y:116.9,regX:3.9}},{t:this.ikNode_16,p:{rotation:-3.2409,x:61,y:86.05,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:15.0166,x:54.15,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:19.9345,x:37.2,y:107.75,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-8.1056,x:59.8,y:89.5,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:4.4202,x:51.65,y:59,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-3.4896,x:58.4,y:117,regX:3.9}},{t:this.ikNode_16,p:{rotation:-3.4896,x:60.45,y:86.2,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:16.172,x:54.15,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:23.0794,x:36.7,y:107.2,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.9049,x:59.8,y:89.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:4.8403,x:52,y:59.05,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-3.7393,x:58,y:117.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:-3.7393,x:59.95,y:86.3,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:17.3271,x:54.15,y:60.85,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:26.2252,x:36.5,y:106.9,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.7039,x:59.7,y:89.6,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:5.2601,x:52.2,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-3.989,x:57.55,y:117.3,regX:3.9}},{t:this.ikNode_16,p:{rotation:-3.989,x:59.5,y:86.55,regY:8.4,regX:6.8}},{t:this.ikNode_14,p:{rotation:18.4819,x:54.1,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:29.3699,x:36.2,y:106.35,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.5035,x:59.75,y:89.7,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:5.6801,x:52.45,y:59.1,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-4.238,x:57.3,y:117.35,regX:4}},{t:this.ikNode_16,p:{rotation:-4.238,x:58.8,y:86.55,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:19.6371,x:54,y:60.9,regX:11,regY:11.6}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:32.5164,x:35.85,y:105.9,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.3025,x:59.95,y:89.75,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:6.0985,x:52.7,y:59.25,scaleX:0.9997,scaleY:0.9997,regY:10.4}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-4.4869,x:56.75,y:117.5,regX:3.9}},{t:this.ikNode_16,p:{rotation:-4.4869,x:58.25,y:86.6,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:20.7925,x:54,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:35.6616,x:35.5,y:105.45,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.103,x:59.95,y:89.85,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:6.5184,x:52.95,y:59.05,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-4.7369,x:56.45,y:117.55,regX:4}},{t:this.ikNode_16,p:{rotation:-4.7369,x:57.8,y:86.65,regY:8.3,regX:6.8}},{t:this.ikNode_14,p:{rotation:21.9472,x:53.95,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:38.8064,x:35.25,y:105.1,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.9017,x:60,y:89.85,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:6.9383,x:53.25,y:59.1,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.25,y:21.65,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-4.9862,x:55.9,y:117.65,regX:3.9}},{t:this.ikNode_16,p:{rotation:-4.9862,x:57.05,y:86.7,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:23.1027,x:53.85,y:60.85,regX:11,regY:11.6}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:41.9527,x:35,y:104.55,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.2939,x:60,y:89.9,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:7.358,x:53.55,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:14.2086,x:43.2,y:21.6,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:14.0059,x:53.45,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-4.4186,x:54.6,y:117.65,regX:3.9}},{t:this.ikNode_16,p:{rotation:-3.8365,x:56.45,y:86.8,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:24.1668,x:53.75,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:40.3993,x:34.3,y:104.3,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.2263,x:59.65,y:90,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:7.9792,x:53.5,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:13.3689,x:43.2,y:21.6,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:13.1738,x:53.6,y:20.1,regY:7.7,regX:8.3}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-3.8505,x:53.35,y:117.65,regX:3.9}},{t:this.ikNode_16,p:{rotation:-2.6868,x:55.8,y:86.85,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:25.2305,x:53.55,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:38.8476,x:33.7,y:103.95,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.159,x:59.1,y:90,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:8.6005,x:53.45,y:59.1,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:12.5299,x:43.15,y:21.7,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:12.342,x:53.45,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-3.2829,x:52.05,y:117.65,regX:3.9}},{t:this.ikNode_16,p:{rotation:-1.5371,x:55.1,y:86.85,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:26.2941,x:53.25,y:60.75,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:37.2957,x:33.1,y:103.55,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.0906,x:58.85,y:90.15,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:9.2211,x:53.45,y:59.15,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:11.6904,x:43.2,y:21.85,regY:3.2,regX:43.4}},{t:this.ikNode_2,p:{rotation:11.5111,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-2.7156,x:50.8,y:117.55,regX:3.9}},{t:this.ikNode_16,p:{rotation:-0.3873,x:54.5,y:86.9,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:27.3576,x:53.2,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:35.7432,x:32.6,y:103,regY:5.2,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.0229,x:58.5,y:90,regX:24.3,regY:9.1}},{t:this.ikNode_8,p:{rotation:9.8421,x:53.35,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:10.8514,x:43.15,y:21.75,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:10.6789,x:53.45,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-2.1477,x:49.5,y:117.5,regX:3.9}},{t:this.ikNode_16,p:{rotation:0.7615,x:53.85,y:86.9,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:28.4218,x:53.05,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:34.191,x:31.95,y:102.75,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.9555,x:58.1,y:90.2,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:10.4629,x:53.35,y:59.1,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:10.0124,x:43.25,y:21.85,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:9.8472,x:53.65,y:20.1,regY:7.7,regX:8.3}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-1.58,x:48.25,y:117.45,regX:3.9}},{t:this.ikNode_16,p:{rotation:1.9115,x:53.15,y:86.9,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:29.4851,x:52.9,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:32.6384,x:31.4,y:102.3,regY:5.2,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.8867,x:57.7,y:90.25,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:11.0852,x:53.25,y:59.1,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:9.1727,x:43.25,y:21.85,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:9.0159,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-1.0125,x:47,y:117.35,regX:3.9}},{t:this.ikNode_16,p:{rotation:3.0605,x:52.55,y:86.95,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:30.5489,x:52.65,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:31.0871,x:30.75,y:102.1,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.8194,x:57.2,y:90.25,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:11.7055,x:53.2,y:59.15,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:8.3341,x:43.25,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:8.1848,x:53.5,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:-0.445,x:45.75,y:117.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:4.2108,x:52,y:87.05,regY:8.4,regX:6.8}},{t:this.ikNode_14,p:{rotation:31.6125,x:52.5,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:29.5352,x:30.2,y:101.6,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.7515,x:56.8,y:90.35,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:12.3268,x:53.1,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:7.4946,x:43.25,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:7.3526,x:53.5,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0.1224,x:44.45,y:117,regX:3.9}},{t:this.ikNode_16,p:{rotation:5.3601,x:51.15,y:86.9,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:32.6764,x:52.35,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:27.9827,x:29.65,y:101.3,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:8.6839,x:56.4,y:90.35,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:12.9472,x:53.1,y:59.25,scaleX:0.9996,scaleY:0.9996,regY:10.4}},{t:this.ikNode_4,p:{rotation:6.655,x:43.25,y:22.05,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:6.5213,x:53.65,y:20.1,regY:7.7,regX:8.3}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0.6898,x:43.2,y:116.85,regX:3.9}},{t:this.ikNode_16,p:{rotation:6.5098,x:50.55,y:86.85,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:33.74,x:52.15,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:26.4305,x:29.1,y:100.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:9.6159,x:56.05,y:90.45,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:13.5687,x:53.1,y:59.1,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:5.816,x:43.3,y:22.05,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:5.6895,x:53.55,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:1.2573,x:41.95,y:116.65,regX:3.9}},{t:this.ikNode_16,p:{rotation:7.6595,x:50,y:86.95,regY:8.4,regX:6.8}},{t:this.ikNode_14,p:{rotation:34.8041,x:52.05,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:24.8778,x:28.4,y:100.3,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.5484,x:55.85,y:90.5,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:14.1898,x:53.05,y:59.15,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:4.9765,x:43.3,y:22.05,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:4.858,x:53.5,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:1.8249,x:40.7,y:116.4,regX:3.9}},{t:this.ikNode_16,p:{rotation:8.8089,x:49.2,y:86.9,regY:8.4,regX:6.7}},{t:this.ikNode_14,p:{rotation:35.8676,x:51.75,y:60.7,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:23.3258,x:28,y:99.95,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:11.4797,x:55.35,y:90.45,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:14.8103,x:53,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:4.138,x:43.25,y:22.25,regY:3.2,regX:43.4}},{t:this.ikNode_2,p:{rotation:4.0267,x:53.55,y:20.2,regY:7.8,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:2.3927,x:39.45,y:116.25,regX:3.9}},{t:this.ikNode_16,p:{rotation:9.9582,x:48.6,y:86.65,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:36.9318,x:51.7,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:21.7738,x:27.45,y:99.5,regY:5.2,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.4122,x:54.95,y:90.5,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:15.4317,x:52.9,y:59.15,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:3.2987,x:43.25,y:22.15,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:3.1953,x:53.55,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:2.9607,x:38.25,y:116,regX:3.9}},{t:this.ikNode_16,p:{rotation:11.108,x:47.9,y:86.65,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:37.995,x:51.45,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:20.2222,x:26.9,y:99.05,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:13.3451,x:54.65,y:90.5,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:16.0527,x:52.9,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:2.4592,x:43.25,y:22.15,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:2.3638,x:53.65,y:20.05,regY:7.7,regX:8.3}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:3.5282,x:37.1,y:115.7,regX:4}},{t:this.ikNode_16,p:{rotation:12.258,x:47.3,y:86.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:39.0589,x:51.35,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:18.6684,x:26.35,y:98.65,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.2766,x:54.3,y:90.5,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:16.6749,x:52.9,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:1.6202,x:43.3,y:22.35,regY:3.2,regX:43.4}},{t:this.ikNode_2,p:{rotation:1.5319,x:53.55,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:4.096,x:35.9,y:115.4,regX:4}},{t:this.ikNode_16,p:{rotation:13.4075,x:46.65,y:86.4,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:40.1227,x:51.15,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:17.1172,x:25.85,y:98.2,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.2087,x:53.85,y:90.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:17.2949,x:52.8,y:59.25,scaleX:0.9996,scaleY:0.9996,regY:10.4}},{t:this.ikNode_4,p:{rotation:0.7808,x:43.35,y:22.25,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:0.7012,x:53.55,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:4.6632,x:34.65,y:115.1,regX:4}},{t:this.ikNode_16,p:{rotation:14.557,x:45.95,y:86.5,regY:8.4,regX:6.7}},{t:this.ikNode_14,p:{rotation:41.1866,x:51.05,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.5656,x:25.35,y:97.7,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:16.1407,x:53.45,y:90.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:17.9155,x:52.85,y:59.15,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.0577,x:43.4,y:22.25,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.1303,x:53.6,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:5.231,x:33.45,y:114.75,regX:4}},{t:this.ikNode_16,p:{rotation:15.7065,x:45.3,y:86.25,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:42.2504,x:50.7,y:60.6,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.0133,x:24.9,y:97.3,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:17.0727,x:52.9,y:90.55,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:18.5367,x:52.8,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.897,x:43.4,y:22.25,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.9617,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:5.7985,x:32.1,y:114.35,regX:3.9}},{t:this.ikNode_16,p:{rotation:16.8567,x:44.65,y:86.1,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:43.3139,x:50.55,y:60.6,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.4608,x:24.35,y:96.7,regY:5.2,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:18.0054,x:52.55,y:90.55,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:19.1576,x:52.7,y:59.15,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.7357,x:43.45,y:22.35,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.7926,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:6.3665,x:30.9,y:113.95,regX:3.9}},{t:this.ikNode_16,p:{rotation:18.0059,x:44,y:85.95,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:44.3781,x:50.45,y:60.65,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.9084,x:23.9,y:96.3,regY:5.2,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:18.9375,x:52.3,y:90.55,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:19.7784,x:52.65,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.5756,x:43.4,y:22.35,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-2.6246,x:53.65,y:19.95,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:6.2072,x:31.85,y:114.2,regX:4}},{t:this.ikNode_16,p:{rotation:17.556,x:44.65,y:86.05,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:43.2682,x:50.5,y:60.55,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.1061,x:24.2,y:96.8,regY:5.2,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:17.8622,x:52.45,y:90.6,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:19.2558,x:52.6,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.5108,x:43.45,y:22.35,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-2.559,x:53.65,y:20.1,regY:7.8,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:6.048,x:32.55,y:114.4,regX:3.9}},{t:this.ikNode_16,p:{rotation:17.1056,x:45.2,y:86.25,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:42.1594,x:50.7,y:60.65,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:9.303,x:24.55,y:97.45,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:16.786,x:52.65,y:90.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:18.7325,x:52.45,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.4461,x:43.45,y:22.35,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-2.4934,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:5.8889,x:33.35,y:114.6,regX:3.9}},{t:this.ikNode_16,p:{rotation:16.6559,x:45.8,y:86.3,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:41.0496,x:50.8,y:60.65,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:8.4999,x:24.7,y:97.95,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:15.7127,x:52.85,y:90.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:18.2084,x:52.35,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.3822,x:43.45,y:22.35,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-2.4277,x:53.75,y:20,regY:7.7,regX:8.3}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:5.7299,x:34.3,y:114.85,regX:4}},{t:this.ikNode_16,p:{rotation:16.2058,x:46.45,y:86.4,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:39.9402,x:50.9,y:60.65,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.6978,x:25.15,y:98.6,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:14.6359,x:53.05,y:90.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:17.6865,x:52.25,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.3174,x:43.45,y:22.35,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-2.3621,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:5.5709,x:35.1,y:115.05,regX:4}},{t:this.ikNode_16,p:{rotation:15.7555,x:47.05,y:86.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:38.8308,x:51,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.8955,x:25.4,y:98.95,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:13.5611,x:53.2,y:90.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:17.1634,x:52.1,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.2536,x:43.3,y:22.3,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:-2.2964,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:5.4111,x:35.85,y:115.2,regX:3.9}},{t:this.ikNode_16,p:{rotation:15.3054,x:47.6,y:86.6,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:37.7215,x:51.1,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.0918,x:25.85,y:99.5,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.4863,x:53.25,y:90.55,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:16.6394,x:51.95,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.1888,x:43.3,y:22.3,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:-2.2308,x:53.65,y:20.15,regY:7.8,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:5.2521,x:36.65,y:115.35,regX:3.9}},{t:this.ikNode_16,p:{rotation:14.8554,x:48.25,y:86.65,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:36.6113,x:51.25,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:5.2893,x:26.2,y:100.1,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:11.4111,x:53.6,y:90.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:16.1161,x:51.9,y:59.15,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.1241,x:43.3,y:22.3,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:-2.1652,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:5.0932,x:37.6,y:115.5,regX:4}},{t:this.ikNode_16,p:{rotation:14.4046,x:48.9,y:86.75,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:35.5024,x:51.2,y:60.65,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.487,x:26.6,y:100.65,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.3367,x:53.75,y:90.5,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:15.5926,x:51.85,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-2.0602,x:43.3,y:22.3,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:-2.0996,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:4.9335,x:38.35,y:115.65,regX:3.9}},{t:this.ikNode_16,p:{rotation:13.9546,x:49.45,y:86.8,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:34.3923,x:51.45,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.6838,x:26.95,y:101.15,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.2602,x:53.9,y:90.5,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:15.0691,x:51.7,y:59.2,scaleX:0.9996,scaleY:0.9996,regY:10.4}},{t:this.ikNode_4,p:{rotation:-1.9955,x:43.3,y:22.25,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:-2.034,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:4.7747,x:39.15,y:115.75,regX:3.9}},{t:this.ikNode_16,p:{rotation:13.5046,x:50.05,y:86.8,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:33.2832,x:51.55,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.8804,x:27.35,y:101.6,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:8.1853,x:54.2,y:90.5,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:14.5464,x:51.5,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.9316,x:43.3,y:22.25,regY:3.1,regX:43.3}},{t:this.ikNode_2,p:{rotation:-1.9684,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:4.6159,x:40.15,y:115.85,regX:4}},{t:this.ikNode_16,p:{rotation:13.0544,x:50.75,y:86.85,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:32.1737,x:51.55,y:60.8,regX:11,regY:11.6}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.0785,x:27.7,y:102.1,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.1111,x:54.3,y:90.45,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:14.0235,x:51.5,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.8669,x:43.45,y:22.25,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.9028,x:53.65,y:20.15,regY:7.8,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:4.4563,x:40.85,y:116,regX:3.9}},{t:this.ikNode_16,p:{rotation:12.6044,x:51.4,y:86.95,regY:8.3,regX:6.8}},{t:this.ikNode_14,p:{rotation:31.0641,x:51.7,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.2753,x:28.15,y:102.45,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.0344,x:54.5,y:90.45,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:13.5006,x:51.35,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.8022,x:43.45,y:22.25,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.8372,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:4.2976,x:41.7,y:116.1,regX:3.9}},{t:this.ikNode_16,p:{rotation:12.1542,x:51.9,y:86.9,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:29.9549,x:51.85,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.4732,x:28.55,y:102.9,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.9607,x:54.65,y:90.35,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:12.9775,x:51.2,y:59.15,scaleX:0.9997,scaleY:0.9997,regY:10.4}},{t:this.ikNode_4,p:{rotation:-1.7383,x:43.45,y:22.25,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.7715,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:4.138,x:42.5,y:116.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:11.7038,x:52.5,y:86.9,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:28.8451,x:51.95,y:60.7,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.3254,x:29,y:103.35,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.8853,x:55,y:90.4,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:12.4541,x:51.1,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.6736,x:43.45,y:22.2,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.706,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:3.9785,x:43.4,y:116.2,regX:3.9}},{t:this.ikNode_16,p:{rotation:11.2534,x:53.15,y:86.9,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:27.7361,x:52.1,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.1283,x:29.4,y:103.8,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.8103,x:55.05,y:90.35,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:11.9305,x:51.05,y:59,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.6097,x:43.45,y:22.2,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.6403,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:3.8199,x:44.2,y:116.25,regX:3.9}},{t:this.ikNode_16,p:{rotation:10.8034,x:53.85,y:86.85,regY:8.3,regX:6.8}},{t:this.ikNode_14,p:{rotation:26.6264,x:52.2,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.9315,x:29.85,y:104.35,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.7355,x:55.2,y:90.25,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:11.4082,x:50.9,y:59.1,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.545,x:43.45,y:22.2,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.5748,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:3.6604,x:45.05,y:116.3,regX:3.9}},{t:this.ikNode_16,p:{rotation:10.3535,x:54.35,y:86.85,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:25.5168,x:52.3,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.7342,x:30.3,y:104.8,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.6595,x:55.45,y:90.2,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:10.884,x:50.85,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.4803,x:43.5,y:22.2,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.5092,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:3.501,x:46,y:116.35,regX:4}},{t:this.ikNode_16,p:{rotation:9.9031,x:54.95,y:86.85,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:24.4078,x:52.3,y:60.7,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.5365,x:30.8,y:105.2,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.4102,x:55.6,y:90.15,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:10.3607,x:50.75,y:59.2,scaleX:0.9996,scaleY:0.9996,regY:10.4}},{t:this.ikNode_4,p:{rotation:-1.4165,x:43.5,y:22.15,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.4436,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:3.3425,x:46.75,y:116.4,regX:3.9}},{t:this.ikNode_16,p:{rotation:9.4527,x:55.6,y:86.75,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:23.2978,x:52.5,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.3405,x:31.25,y:105.65,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.4861,x:55.9,y:90.05,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:9.8376,x:50.6,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.3518,x:43.45,y:22.15,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.378,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:3.1831,x:47.55,y:116.35,regX:3.9}},{t:this.ikNode_16,p:{rotation:9.0027,x:56.15,y:86.7,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:22.1888,x:52.6,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.1434,x:31.75,y:106.05,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.5625,x:55.85,y:90.05,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:9.3141,x:50.5,y:59.05,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.287,x:43.45,y:22.15,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.3124,x:53.8,y:20,regY:7.7,regX:8.3}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:3.0238,x:48.55,y:116.35,regX:4}},{t:this.ikNode_16,p:{rotation:8.5523,x:56.8,y:86.6,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:21.0789,x:52.7,y:60.85,regX:11,regY:11.6}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.9456,x:32.2,y:106.3,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.6364,x:56.25,y:90,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:8.7907,x:50.4,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.2232,x:43.45,y:22.1,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.2468,x:53.65,y:20,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:2.8644,x:49.25,y:116.35,regX:3.9}},{t:this.ikNode_16,p:{rotation:8.1027,x:57.45,y:86.55,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:19.9698,x:52.8,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-6.7483,x:32.55,y:106.7,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:-4.7114,x:56.3,y:89.95,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:8.2681,x:50.25,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.1585,x:43.45,y:22.1,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.1803,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:2.7051,x:50.05,y:116.35,regX:3.9}},{t:this.ikNode_16,p:{rotation:7.6525,x:58.1,y:86.6,regY:8.4,regX:6.8}},{t:this.ikNode_14,p:{rotation:18.8602,x:52.95,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-7.5514,x:33.2,y:107.1,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.7857,x:56.4,y:89.85,regX:24.2,regY:9.2}},{t:this.ikNode_8,p:{rotation:7.7453,x:50.15,y:58.95,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.0946,x:43.45,y:22.05,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.1148,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:2.5467,x:50.9,y:116.25,regX:3.9}},{t:this.ikNode_16,p:{rotation:7.202,x:58.6,y:86.5,regY:8.4,regX:6.7}},{t:this.ikNode_14,p:{rotation:17.7507,x:53.05,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-8.3532,x:33.55,y:107.45,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.8617,x:56.65,y:89.8,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:7.223,x:50,y:59,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-1.0299,x:43.45,y:22.05,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-1.0492,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:2.3874,x:51.75,y:116.25,regX:3.9}},{t:this.ikNode_16,p:{rotation:6.7519,x:59.15,y:86.25,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:16.6415,x:53.15,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-9.1568,x:34.25,y:108,regY:5.4,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-7.9369,x:56.9,y:89.75,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:6.6979,x:49.9,y:59.1,scaleX:0.9997,scaleY:0.9997,regY:10.4}},{t:this.ikNode_4,p:{rotation:-0.9652,x:43.45,y:22.05,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.9836,x:53.7,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:2.2282,x:52.6,y:116.2,regX:3.9}},{t:this.ikNode_16,p:{rotation:6.3022,x:59.8,y:86.15,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:15.5322,x:53.2,y:60.9,regX:11,regY:11.6}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-9.9594,x:34.75,y:108.15,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-9.0114,x:57.05,y:89.65,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:6.1751,x:49.85,y:59,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.9014,x:43.45,y:22.05,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.918,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:2.069,x:53.4,y:116.1,regX:3.9}},{t:this.ikNode_16,p:{rotation:5.852,x:60.35,y:86,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:14.4226,x:53.3,y:60.9,regX:11,regY:11.6}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-10.7614,x:35.35,y:108.55,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-10.0872,x:57.2,y:89.55,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:5.6528,x:49.75,y:58.95,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.8367,x:43.45,y:22,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.8524,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:1.9098,x:54.35,y:116.05,regX:4}},{t:this.ikNode_16,p:{rotation:5.4014,x:60.95,y:85.85,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:13.3132,x:53.45,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-11.5645,x:35.85,y:108.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-11.1621,x:57.45,y:89.5,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:5.1292,x:49.65,y:58.95,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.772,x:43.45,y:22,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.7869,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:1.7506,x:55.05,y:115.9,regX:3.9}},{t:this.ikNode_16,p:{rotation:4.951,x:61.55,y:85.7,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:12.2034,x:53.55,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-12.3676,x:36.35,y:109.15,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-12.2374,x:57.6,y:89.4,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:4.6061,x:49.55,y:58.95,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.7082,x:43.45,y:22,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.7213,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:1.5914,x:55.9,y:115.8,regX:3.9}},{t:this.ikNode_16,p:{rotation:4.501,x:62.3,y:85.55,regY:8.3,regX:6.8}},{t:this.ikNode_14,p:{rotation:11.0937,x:53.7,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.1701,x:36.9,y:109.45,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.3129,x:57.8,y:89.3,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:4.0834,x:49.4,y:58.95,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.6435,x:43.45,y:22,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.6557,x:53.7,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:1.4322,x:56.7,y:115.7,regX:3.9}},{t:this.ikNode_16,p:{rotation:4.0512,x:62.75,y:85.4,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:9.9848,x:53.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.9728,x:37.5,y:109.8,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.3875,x:57.95,y:89.25,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:3.5592,x:49.35,y:59.05,scaleX:0.9996,scaleY:0.9996,regY:10.4}},{t:this.ikNode_4,p:{rotation:-0.5788,x:43.45,y:22,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.5901,x:53.7,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:1.273,x:57.55,y:115.55,regX:3.9}},{t:this.ikNode_16,p:{rotation:3.6009,x:63.45,y:85.25,regY:8.3,regX:6.8}},{t:this.ikNode_14,p:{rotation:8.8752,x:53.9,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.7755,x:38.05,y:110.05,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.4629,x:58.1,y:89,regX:24.3,regY:9.1}},{t:this.ikNode_8,p:{rotation:3.0353,x:49.15,y:59.05,scaleX:0.9997,scaleY:0.9997,regY:10.4}},{t:this.ikNode_4,p:{rotation:-0.515,x:43.45,y:21.95,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.5246,x:53.65,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:1.1139,x:58.35,y:115.4,regX:3.9}},{t:this.ikNode_16,p:{rotation:3.1507,x:63.9,y:85.05,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:7.7655,x:54,y:60.9,regX:11,regY:11.6}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.5794,x:38.5,y:110.35,regY:5.3,regX:3.5}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-16.5384,x:58.3,y:89.05,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:2.5134,x:49.1,y:58.9,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.4503,x:43.4,y:21.95,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.459,x:53.65,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0.9548,x:59.15,y:115.2,regX:3.9}},{t:this.ikNode_16,p:{rotation:2.7007,x:64.45,y:84.85,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:6.6559,x:54.1,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-16.3809,x:39.25,y:110.65,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-17.6127,x:58.45,y:88.95,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:1.9909,x:49,y:58.85,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.3856,x:43.4,y:21.95,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.3934,x:53.65,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0.7956,x:59.95,y:115.05,regX:3.9}},{t:this.ikNode_16,p:{rotation:2.2501,x:65,y:84.65,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:5.5471,x:54.2,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-17.185,x:39.85,y:110.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-18.6883,x:58.6,y:88.7,regX:24.3,regY:9.1}},{t:this.ikNode_8,p:{rotation:1.4668,x:48.85,y:58.9,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.3217,x:43.4,y:21.95,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.3279,x:53.7,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0.6365,x:60.75,y:114.9,regX:3.9}},{t:this.ikNode_16,p:{rotation:1.8004,x:65.6,y:84.4,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:4.437,x:54.15,y:60.75,regX:10.9,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-17.9883,x:40.45,y:111.15,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-19.7629,x:58.8,y:88.75,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:0.9428,x:48.75,y:58.85,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.257,x:43.4,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.2623,x:53.7,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0.4774,x:61.55,y:114.7,regX:3.9}},{t:this.ikNode_16,p:{rotation:1.35,x:66.15,y:84.2,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:3.3276,x:54.45,y:60.9,regX:11,regY:11.6}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-18.7892,x:40.9,y:111.25,regY:5.2,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.8383,x:59,y:88.65,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:0.4198,x:48.65,y:58.85,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.1923,x:43.4,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.1967,x:53.7,y:20.05,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0.3182,x:62.35,y:114.5,regX:3.9}},{t:this.ikNode_16,p:{rotation:0.8997,x:66.7,y:83.95,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:2.2186,x:54.5,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-19.5922,x:41.65,y:111.6,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-21.9141,x:59.25,y:88.6,regX:24.3,regY:9.2}},{t:this.ikNode_8,p:{rotation:-0.098,x:48.5,y:58.8,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.1285,x:43.4,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.1311,x:53.65,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0.1591,x:63.15,y:114.3,regX:3.9}},{t:this.ikNode_16,p:{rotation:0.4494,x:67.3,y:83.7,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:1.1086,x:54.65,y:60.75,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-20.3954,x:42.2,y:111.85,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-22.9882,x:59.3,y:88.35,regX:24.3,regY:9.1}},{t:this.ikNode_8,p:{rotation:-0.6218,x:48.4,y:58.85,scaleX:0.9997,scaleY:0.9997,regY:10.3}},{t:this.ikNode_4,p:{rotation:-0.0638,x:43.4,y:21.9,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:-0.0656,x:53.65,y:20.1,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).to({state:[{t:this.ikNode_18,p:{rotation:0,x:63.95,y:114.15,regX:3.9}},{t:this.ikNode_16,p:{rotation:0,x:67.9,y:83.5,regY:8.3,regX:6.7}},{t:this.ikNode_14,p:{rotation:0,x:54.8,y:60.8,regX:11,regY:11.5}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-21.1974,x:42.9,y:111.95,regY:5.3,regX:3.6}},{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-24.0618,x:59.6,y:88.2,regX:24.4,regY:9.2}},{t:this.ikNode_8,p:{rotation:-1.1432,x:48.35,y:58.8,scaleX:0.9996,scaleY:0.9996,regY:10.3}},{t:this.ikNode_4,p:{rotation:0,x:43.4,y:21.95,regY:3.1,regX:43.4}},{t:this.ikNode_2,p:{rotation:0,x:53.7,y:20.15,regY:7.7,regX:8.2}},{t:this.ikNode_1},{t:this.ikNode_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,0,94.9,125.4);


// stage content:
(lib.走鋼索 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 人
	this.instance = new lib.走鋼索的男人();
	this.instance.setTransform(248.9,70.85,0.6108,0.6108,0,0,0,45,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	// 鋼索
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EhOHAAAMCcPAAA");
	this.shape.setTransform(500.05,105.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// 背景
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(762.4,89.45);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(626.1,89.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},599).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:626.1},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,89,1547.6,90);
// library properties:
lib.properties = {
	id: 'A4343CC6498243A9B968D552EF92B369',
	width: 500,
	height: 178,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_6.png", id:"CachedBmp_6"},
		{src:"images/CachedBmp_5.png", id:"CachedBmp_5"},
		{src:"images/走鋼索_atlas_1.png", id:"走鋼索_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A4343CC6498243A9B968D552EF92B369'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;