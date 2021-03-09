var fixedrect, movingrect

function setup() {
  createCanvas(1200,800);
 fixedrect = createSprite(600,400,50,80)
 fixedrect.shapeColor = "green"
 movingrect = createSprite(400,200, 80,50)
 movingrect.shapeColor = "green"

}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  var hdistance1 = movingrect.x-fixedrect.x
  var hdistance2 = fixedrect.x-movingrect.x
  var hcollision = movingrect.width/2 +fixedrect.width/2
  var vdistance1 = movingrect.y-fixedrect.y
  var vdistance2 = fixedrect.y-movingrect.y
  var vcollision = movingrect.height/2+fixedrect.height/2

  if (hdistance1<hcollision && hdistance2<hcollision && vdistance1<vcollision && vdistance2<vcollision){
    movingrect.shapeColor = "yellow"
    fixedrect.shapeColor = "yellow"
  }else{
    movingrect.shapeColor = "green"
    fixedrect.shapeColor = "green"
  }
  drawSprites();
}