var Flavors = [
	"Chocolate",
	"Very Very Strawberry",
	"nilla-nilla-Vanilla",
	"Coconut",
	"Cookie'n cream",
	"American cake"
	]

function pickIcecream(){
	var icecreamNumber1= Math.floor(Math.random()*Flavors.length);
	var icecreamNumber2= Math.floor(Math.random()*Flavors.length);
	
	document.getElementById('Icecream').innerHTML = "<h1>"+Flavors[icecreamNumber1]
	+" and "+Flavors[cecreamNumber2]+"</h1>"
}