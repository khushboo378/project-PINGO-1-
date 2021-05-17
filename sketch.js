const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var ground

var particles=[]
var plinkos=[]
var divisons=[]
var divisonHeight=300



function setup(){
createCanvas(700,600)
engine=Engine.create()
world=engine.world


ground=new Ground(350,600,700,30)

}

function draw(){
background(0)
Engine.update(engine)

ground.display()

//First Row
for(var i=40;i<=width;i=i+80){
    plinkos.push(new Plinko(i+30,100,20))
    }

for(var i=0;i<plinkos.length;i++){
    plinkos[i].display()   
}

//SECOND ROW 
for(var i=20;i<=width;i=i+60){
plinkos.push(new Plinko(i,190,20))
}

for(var i=0;i<plinkos.length;i++){
    plinkos[i].display()    
    }

//THIRD ROW 
for(var i=40;i<=width;i=i+80){
plinkos.push(new Plinko(i+30,280,20))
}
    
for(var i=0;i<plinkos.length;i++){
plinkos[i].display()   
}

//DUSTBIN 

for(var k=30;k<=width;k=k+80){
divisons.push(new Div(k,600,10,divisonHeight))    
}

for(var k=0;k<divisons.length;k++){
    divisons[k].display()
    }

//PARTICLES

if(frameCount%10===0){
particles.push(new Par(random(width/2-10,width/2+10),10,20))
particles.velpocity=4
}

for(var j=0;j<particles.length;j++){
particles[j].display()    
}






}



