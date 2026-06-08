class Obstacle{
  constructor(){
    this.x=width;
    this.y=350;
    this.r=20;
  }
  show(){
    image(img, this.x, this.y, -this.r, this.r, this.r)
  }
  move(){
    this.x-=5
  }
}