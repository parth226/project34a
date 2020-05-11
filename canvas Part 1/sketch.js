
var drawing = [];



function setup() {
    canvas = createCanvas(800,400);
}
    
    function draw(){
        background(0);
    
    if (mouseIsPressed) {
        var point = {
            x:mouseX,
            y:mouseY
    
        }
        drawing.push(point);
    }
    beginShape();
    stroke(255);
    strokeWeight(4);
    noFill();
    for (i = 0; i < drawing.length;i++) {
        vertex(drawing[i].x,drawing[i].y)
    }
    endShape();
    }
    

