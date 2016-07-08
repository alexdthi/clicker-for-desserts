var Flavors = [
	"Chocolate",
	"Very-very-Strawberry",
	"nilla-nilla-Vanilla",
	"Coconut",
<<<<<<< HEAD
	"Cookie-n-cream",
	"American cake"]
=======
	"cook-n-cream",
	"american-cake"]
>>>>>>> origin/master

var FlavorsImage = [
	"<img src='assets/Chocolate.jpg'>",
	"<img src='assets/Very-very-strawberry.jpg'>",
	"<img src='assets/nilla-nilla-Vanilla.jpg'>",
	"<img src='assets/Coconut.jpg'>",
<<<<<<< HEAD
	"<img src='assets/cookie-n-cream.jpg'>",
=======
	"<img src='assets/cook-n-cream.jpg'>",
>>>>>>> origin/master
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