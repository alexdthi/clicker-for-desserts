var Flavors = [
	"Chocolate",
	"Very Very Strawberry",
	"nilla-nilla-Vanilla",
	"Coconut",
	"Cookie-n-cream",
	"American cake"]

var FlavorsImage = [
	"<img src='assets/Chocolate.jpg'>",
	"<img src='assets/Very-very-strawberry.jpg'>",
	"<img src='assets/nilla-nilla-Vanilla.jpg'>",
	"<img src='assets/Coconut.jpg'>",
	"<img src='assets/cookie-n-cream.jpg'>",
	"<img src='assets/american-cake.jpg'>",
]

function pickIcecream(){
	var IcecreamNumber1= Math.floor(Math.random()*Flavors.length);

	var IcecreamNumber2= Math.floor(Math.random()*Flavors.length);
	
	document.getElementById('Icecream').innerHTML = "<h1>"+Flavors[IcecreamNumber1]
	+" and "+Flavors[IcecreamNumber2]+"</h1>"

	document.getElementById('IC1').innerHTML = FlavorsImage[IcecreamNumber1];

	document.getElementById('IC2').innerHTML = FlavorsImage[IcecreamNumber2];
}