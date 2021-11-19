var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fe86c794-f967-454e-b80a-ebc180af62e9"],"propsByKey":{"fe86c794-f967-454e-b80a-ebc180af62e9":{"name":"scarybg.png_1","sourceUrl":"assets/v3/animations/ojboEY3irrMiSwdn8NH4tC0hFBqdNM2PkzJcrXqhieQ/fe86c794-f967-454e-b80a-ebc180af62e9.png","frameSize":{"x":200,"y":150},"frameCount":1,"looping":true,"frameDelay":4,"version":"3WI0zgxMgoLXVR7ygyITTN8Q_yPX6kTs","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":150},"rootRelativePath":"assets/v3/animations/ojboEY3irrMiSwdn8NH4tC0hFBqdNM2PkzJcrXqhieQ/fe86c794-f967-454e-b80a-ebc180af62e9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boy = createSprite(348, 347,10,10);
var house = createSprite(26,30,10,10);
var bg = createSprite(200,200)
bg.setAnimation("scarybg.png_1");
bg.scale=2.7

function draw() {
  background("pink");
  
  spawnenemies();
  drawSprites();
}

function spawnenemies(){
  if(frameCount%80===0){
  var enemy1 = createSprite(0,200,10,10);
  enemy1.y= Math.round(random(50,350))
  enemy1.velocityX=2;
    
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
