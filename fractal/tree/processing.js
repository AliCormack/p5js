var slider;
var angle = 0;

function setup()
{
  createCanvas(600, 600);
  background(70);
  slider = createSlider(-2*PI, 2*PI, PI/4, 0.01);
}

function draw()
{
  stroke(255);
  translate(width/2, height);
  branch(100, 1);
  angle = slider.value();
}

function branch(len, mult)
{
  line(0, 0, 0, -len);
  translate(0, -len);
  rotate(angle);

  var newLength = len*0.8;
  if(newLength > 5)
  {
      branch(newLength, 5);
  }

}
