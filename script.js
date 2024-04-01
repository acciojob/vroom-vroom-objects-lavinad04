// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
		getMakeModel(make){
		return this.make,this.model;
		}
}

function SportsCar(make, model, topSpeed) {
	this.make = make;
	this.model = model;
	this.topSpeed = topSpeed;
		getTopSpeed(topSpeed){
		return this.topSpeed;
		}
}

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); 
console.log(car.getTopSpeed()); 
window.Car = Car;
window.SportsCar = SportsCar;
