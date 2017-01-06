var dots = [];

var value = 0;  //starting value of earthquake
    

function setup(){
    createCanvas(displayWidth, displayHeight);
    
    //create objects
    for (var i = 0; i < 100; i++){
        dots.push(new QuakeDots());
    }
}

function draw(){
    background(204);
    
    //create ellipse area
    var x = width/2;
    var y = height/2;
    var r = value; //magnitude
    
    noFill();
    stroke(0);
    strokeWeight(0.5);
    ellipse (x, y, r, r);
    
    //draw dots and given methods (actions)
    noStroke();
    fill(0);
    for (var i = 0; i < 100; i++){
        dots[i].move();
        dots[i]. display();
    }
}

function deviceShaken(){
   /* noStroke();
    fill(0);
    for (var i = 0; i < 100; i++){
        dots[i].move();
        dots[i]. display();*/
    QuakeDots();
        
    value = (accelerationX * accelerationY * accelerationZ)/3;
    magnitude = map(value, 30, 1000, 0, 10);
    
    text(magnitude, width - width/6, height/2);
}


function QuakeDots(){
    var r = value; //magnitude
    this.xdot = random(width/2 - r/2, width/2 + r/2); //according to ellipse area
    this.ydot = random(height/2 - r/2, height/2 + r/2); //according to ellipse area
    this.diameter = 3;
    this.speed = 1.5; //magnitude


this.move = function(){
    this.xdot += random(-this.speed,this.speed);
    this.ydot += random(-this.speed,this.speed);
}

this.display = function(){
    ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
};
    
}