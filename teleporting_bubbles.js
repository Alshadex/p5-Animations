let circles = [
  {x: 23, y: 23, d: 15, theta: 0},
  {x: 55, y: 55, d: 25, theta: 0},
  {x: 55, y: 55, d: 25, theta: 0},
  {x: 55, y: 55, d: 25, theta: 0},
  {x: 55, y: 55, d: 25, theta: 0}
]

function setup(){ 
  createCanvas(576, 324);
  index = 0;
  fill('red')
  while (index < circles.length) {
    circles[index].x = random(0, 576)
    circles[index].y = random(0, 324)
    circles[index].d = random(10, 80)
    circles[index].theta = random(0, HALF_PI);
    index++;
  }
}

function draw() {
  background('grey');
  
  index = 0;
  fill('blue')
  while (index < circles.length) {
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = 'black';
    circle(circles[index].x, circles[index].y, circles[index].d)
    index++;
  }
  
  index = 0;
  while (index < circles.length) {
    
    circles[index].x += 2*cos(circles[index].theta);
    circles[index].y += 2*sin(circles[index].theta);
    
    
    if (circles[index].x >= 576){
      circles[index].x = 0
    } else if (circles[index].x <= 0){
      circles[index].x = 576
    }
    if (circles[index].y >= 324){
      circles[index].y = 0
    }
    index++;
  }
  
}