var font;

function preload() {

	font = loadFont('../../BebasNeue.otf');

}

function setup() {
	createCanvas(1200, 800);
	background(51);
	textFont(font);
	textSize(200);
	fill(255);
	noStroke();
	text('Bungus', 10, 200);

	var points = font.textToPoints('Bungus', 10, 200);

	for(var i = 0; i < points.length; i++)
	{
		var p = points[i];
		stroke(0, 255, 0);
		strokeWeight(4);
		point(p.x, p.y);
	}
}

function draw() {

}
