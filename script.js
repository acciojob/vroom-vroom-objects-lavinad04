function Car(make, model) {
	this.make = make;
	this.model = model;
	this.getMakeModel = function() {
		return this.make + " " + this.model;
	};
}

function SportsCar(make, model, topSpeed) {
	this.make = make;
	this.model = model;
	this.topSpeed = topSpeed;
	this.getTopSpeed = function() {
		return this.topSpeed;
	};
}

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); 
console.log(car.getTopSpeed()); 

window.Car = Car;
window.SportsCar = SportsCar;



























// function Car(make, model) {
// 	this.make = make;
// 	this.model = model;
// 	this.getMakeModel = function(){
// 		return this.make+" "+this.model;
// 		}
// }

// function SportsCar(make, model, topSpeed) {
// 	this.make = make;
// 	this.model = model;
// 	this.topSpeed = topSpeed;
// 	this.getTopSpeed = function(){
// 		return this.topSpeed;
// 		}
// }

// const car = new SportsCar("Ferrari", "Testarossa", 200);
// const two = new Car("suite", "bmw");
// console.log(two.getMakeModel()); 
// console.log(car.getTopSpeed()); 

// window.Car = Car;
// window.SportsCar = SportsCar;
