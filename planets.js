

class Planet{
	name;
	orbitalPeriode;

	constructor(name, orbitalPeriode){
		this.name = name;
		this.orbitalPeriode=orbitalPeriode;
	}

	calculateLifeTime(){
		let input = prompt("Lifetime in Seconds");
		return (input/31557600)/this.orbitalPeriode;
	}
}

var mercury = new Planet("Mercury",0.2408467);
var venus = new Planet("Venus", 0.61519726);
var mars = new Planet("Mars", 1.8808158);
var jupiter = new Planet("Jupiter", 11.862615);
var saturn = new Planet("Saturn", 29.447498);
var uranus = new Planet("Uranus", 84.016846);
var neptun = new Planet("Neptun", 164.79132);

let promptplanet = prompt("choose planet");
console.log(window[promptplanet].calculateLifeTime());
