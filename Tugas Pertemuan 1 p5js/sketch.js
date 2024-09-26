function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  
  translate(width / 2, height / 2);
  
  let angle = PI / 4; 
  rotate(angle);
  
  rect(-100, -100, 200, 200);
  fill(255,0,0)
}
