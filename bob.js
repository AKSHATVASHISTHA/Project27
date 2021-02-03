class Bob{
constructor(x,y,r){

    var options={

'friction':0.2,
'density':0.8

    }

this.body = Bodies.circle(x,y,r,options);
this.x=x;
this.y=y;
this.r=r;
World.add(world,this.body);

}
display(){
var pos= this.body.position;
push()
translate(pos.x,pos.y);
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);


}


}