canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
		document.getElementById("d1").innerHTML = "You pressed alphabet key";
		}else if (keyPressed >=48 && keyPressed <=57){
			numberkey();
			document.getElementById("d1").innerHTML = "You pressed number key";
		}else if(keyPressed >= 37 && keyPressed <= 40){
			arrowkey();
			document.getElementById("d1").innerHTML = "You pressed arrow key";
		}else if((keyPressed = 17) || (keyPressed = 18) || (keyPressed = 27)){
           specialkey();
		   document.getElementById("d1").innerHTML = "You pressed a special key";
		}else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	console.log("Alphabet");
	add();
}
function numberkey()
{
	img_image="numkey.png";
	console.log("Number");
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	console.log("Arrow");
	add();
}
function specialkey()
{
	img_image="spkey.png";
	console.log("Special");
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	console.log("Other");
	add();
}
	
