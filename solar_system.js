let center = []
let planetData = [
  /* Mercury */  {Xcoef: 50, Ycoef: 22, Tcoef:4.14, size: 10, color: 'grey'},
  /* Venus */    {Xcoef: 85, Ycoef: 38, Tcoef:1.62, size: 12, color: '#e3bb76'},
  /* Earth */    {Xcoef: 118, Ycoef: 54, Tcoef:1, size: 15, color: '#1c821a'},
  /* Mars  */    {Xcoef: 154, Ycoef: 70, Tcoef:0.53, size: 10, color: '#CC3333'},
  /* Jupiter */  {Xcoef: 188, Ycoef: 86, Tcoef:0.08, size: 20, color: '#d8ca9d'},
  /* Saturn */   {Xcoef: 222, Ycoef: 103, Tcoef:0.034, size: 18, color: '#c99039'},
  /* Uranus */   {Xcoef: 261, Ycoef: 118, Tcoef:0.011, size: 16, color: '#4FD0E7'},
  /* Neptune */  {Xcoef: 293, Ycoef: 133, Tcoef:0.006, size: 16, color: '#4b70dd'},
  /* Pluto */    {Xcoef: 330, Ycoef: 148, Tcoef:0.004, size: 9, color: '#968570'},

]
let planets = []


function setup() {
  createCanvas(700, 393);
  center = [Math.floor(width/2), Math.floor(height/2)]
  for (i = 0; i < planetData.length; i++){
    planets.push(new Planet(planetData[i].Xcoef,planetData[i].Ycoef,planetData[i].Tcoef, planetData[i].size, planetData[i].color));
  }
}

function draw() {
  background(0);
  strokeWeight(0.5)
  stroke("#ffffff");
  fill('#000000');
  ellipse(center[0],center[1], 660, 297);
  ellipse(center[0],center[1], 590, 265.5);
  ellipse(center[0],center[1], 520, 234);
  ellipse(center[0],center[1], 450, 202.5);
  ellipse(center[0],center[1], 380, 171);
  ellipse(center[0],center[1], 310, 139.5);
  ellipse(center[0],center[1], 240, 108);
  ellipse(center[0],center[1], 170, 76.5);
  ellipse(center[0],center[1], 100, 45);
  fill('yellow')
  noStroke()
  circle(center[0], center[1], 30) // sun
  
  for (i = 0; i < planets.length; i++){
    planets[i].move()
    planets[i].display()
  }
}


class Planet {
  constructor(Xcoef,Ycoef,Tcoef,size,color){
    this.x = 0
    this.y = 0
    this.size = size
    this.color = color
    
    this.Xcoef = Xcoef
    this.Ycoef = Ycoef
    this.Tcoef = Tcoef
    this.t = random(0, 2*PI)
  }

  move() {
    this.x = this.Xcoef*sin(this.t) + Math.floor(width/2)
    this.y = this.Ycoef*cos(this.t) + Math.floor(height/2)
    this.t += 0.02 * this.Tcoef
    if (this.t >= 2*PI){
      this.t = 0
    }
    
  }

  display() {
    fill(this.color);   
    circle(this.x, this.y, this.size);
  }
}