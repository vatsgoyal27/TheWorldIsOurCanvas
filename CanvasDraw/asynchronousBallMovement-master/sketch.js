var database;
var pen;
var position;

function setup(){ 
    database = firebase.database();
    pen = createSprite(200, 200, 20, 20);
    var penPosition = database.ref('pen/position');
    penPosition.on("value",readPosition,showError);
    
}
function draw(){ 
    drawSprites(); 

    if(keyCode == 81){
        pen.shapeColor = "red";
    }
    if(keyCode == 87){
        pen.shapeColor = "blue";
    }
    if(keyCode == 69){
        pen.shapeColor = "green";
    }
    if(keyCode == 82){
        pen.shapeColor = "yellow";
    }
    if(keyCode == 49){
        pen.scale = 0.5;
    }
    if(keyCode == 50){
        pen.scale = 0.7;
    }
    if(keyCode == 51){
        pen.scale = 0.9;
    }
    if(keyCode == 52){
        pen.scale = 1.1;
    }
    if(keyCode == 53){
        pen.scale = 1.3;
    }
    if(keyCode == 54){
        pen.scale = 1.5;
    }
    if(keyCode == 55){
        pen.scale = 1.7;
    }
    if(keyCode == 56){
        pen.scale = 1.9;
    }
    if(keyCode == 57){
        pen.scale = 2;
    }
    if(keyCode == 48){
        background("white");
    }
    if(keyCode == 8){
        pen.x = 200;
        pen.y = 200;
    }
    
    
    
} 

function mouseDragged(){
    pen.x = mouseX;
    pen.y = mouseY;
}

function readPosition(data){
    position = data.val();
    pen.x = position.x;
    pen.y = position.y;
}
function changePosition(x,y){
    database.ref('pen/position').set({
        'x' : mouseX , 
        'y' : mouseY
        })
    
    }
function showError(){
    console.log("error in writing database");
}