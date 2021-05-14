class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.Visiblity = 255;
      World.add(world,this.body);
    }
    display(){
      var pos= this.body.position;
      imageMode(CENTER);
     
      push ();
      if(this.body.speed < 3){
       this.Visiblity = 255
       image(this.image,pos.x,pos.y,this.width, this.height);
     
       }
       else{
        
         push();
         World.remove(world, this.body);
         
         tint(255,this.Visiblity);
         this.Visiblity = this.Visiblity-10;
         image(this.image, pos.x, pos.y, this.width, this.height);
         pop();
       }
    }
}