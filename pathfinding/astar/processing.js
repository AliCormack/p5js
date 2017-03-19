var cols = 10;
var rows = 10;
var grid = new Array(cols);

var cellWidth;
var cellheight;

var openSet = [];
var closedSet = [];
var start;
var end;

function setup()
{
  createCanvas(600, 600);
  background(255);

  cellWidth = width/rows;
  cellHeight = height/cols;

  // Setup grid
  for (var i = 0; i<cols; i++)
  {
    grid[i] = new Array(rows);
    for (var j = 0; j<rows; j++)
    {
      grid[i][j] = new Cell(i, j);
    }
  }

  start = grid[0][0];
  end = grid[cols-1][rows-1];

  openSet.push(start);

}

function Cell(i, j)
{
  this.x = i;
  this.y = j;

  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.show = function(color)
  {
    fill(color);
    stroke(0);
    rect(this.x*cellWidth, this.y*cellHeight, cellWidth-1, cellHeight-1);
  }
}

function AStar()
{
  if(openSet.length > 0)
  {
    var lowestIndex = 0;
    openSet.forEach(function(cell) {
       cell.show(color(0, 255, 0));
    });
  }
  else {
    //No Solution
  }

  for (var i = 0; i<cols; i++)
  {
    for (var j = 0; j<rows; j++)
    {
      grid[i][j].show(255);
    }
  }

  openSet.forEach(function(cell) {
     cell.show(color(0, 255, 0));
  });

  closedSet.forEach(function(cell) {
     cell.show(color(255, 0, 0));
  });


}


function draw()
{
  AStar();
}
