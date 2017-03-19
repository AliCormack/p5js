var cols, rows;
var scl = 20;

function setup()
{
  var w = 600;
  var h = 600;
  createCanvas(w, h, WEBGL);
  cols = w / scl;
  rows = h / scl;
}

function draw()
{
  background(0);
  stroke(255);
  noFill();

  // translate(width/2, height/2);
  // rotateX(PI/2);

  for(var y = 0; y < rows; y++)
  {
    beginShape(TRIANGLE_STRIP);
    for(var x = 0; x < cols; x++)
    {
      vertex(x*scl, y*scl);
      vertex(x*scl, (y+1)*scl);
    }
    endShape();
  }
}
