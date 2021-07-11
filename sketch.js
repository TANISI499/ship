var ship,sea,shipimage,seaimage;


  

function preload(){
  
  shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimage=loadImage("sea.png");
  
  
  
 
 
  
  
  

}


function setup(){
  createCanvas(400,400);
   sea= createSprite(200,200,40,40);
  sea.addImage("sea",seaimage);
  
  
  
  
  sea.scale=0.3;
  sea.X=sea.width/2;



   ship=createSprite(100,200,30,30);
  ship.addAnimation("ship",shipimage);
   ship.scale=0.2;

   
   
}

function draw() {
  
  background("blue");
  
  sea.velocityX=-2;
  
  if(sea.X<0)
  {
    sea.X = sea.width/2;
   
  }
   drawSprites();
 
}