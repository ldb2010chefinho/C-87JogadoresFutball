
// Create canvas variable
var canvas = new fabric.Canvas("meuCanvas");

 blockY=1;
 blockX=1;

blockImageWidth = 300;
blockImageHeight = 380;

var block_image_object= "";

function new_image(get_image)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(blockImageWidth);
		block_image_object.scaleToHeight(blockImageHeight);
		block_image_object.set({
		top:blockY,
		left:blockX
		});
		canvas.add(block_image_object); 

	});
};

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
 
window.addEventListener("keydown", myKeyDown);

	if(keyPressed == '72') // adicione os códigos adequados às teclas
	{
		// enviar haaland
		blockX = -30;
		new_image("haaland.png");
		console.log("h");
		
	}
	if(keyPressed == '67')
	{
		blockX = 170;
		// enviar cr7
		new_image("cr7.png");
		console.log("c");
	
	}
	
	if(keyPressed == '77')
	{
		blockX =320;
		// enviar mbappe
		new_image("Mbappe.png");
		console.log("m")
	}
	if(keyPressed == '82')
	{
		blockX = 530;
		// enviar ronaldinho
		new_image("ronaldinho.png");
		console.log("r")
	}
	if(keyPressed == '86')
	{
		blockX = 800;
	// enviar rafael veiga
	new_image("rafa.png");
		console.log("v")
	}
	
}

