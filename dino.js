 class Dino{
  constructor(){
    this.r=100
    this.x=50
    this.y=height-this.r
    this.gravity=3
    this.vy=0
  }
  jump(){
    if(this.y>=(height-this.r)){
      this.vy=-30
    }
  }
  collision(cactus){
    //collideCircleCircle function checks collision between two objects--has 6 parameters: x,y,radius, x2,y2,radius2
    let x1=(this.x+this.r)/0.5
    let y1=(this.y+this.r)*2
    let x2=(cactus.x+cactus.r)/0.5
    let y2=(cactus.y+cactus.r)/0.5
    return collideCircleCircle(x1, y1, this.r, x2, y2, cactus.r)
  }
  move(){
    this.y+=this.vy
    this.vy+=this.gravity
    if (this.y>=height-this.r){
      this.y=height-this.r
      this.vy=0
    }
  }
  show(){
    image(img2, this.x, this.y, this.r, this.r)
    
  }
}