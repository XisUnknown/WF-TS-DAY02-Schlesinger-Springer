    class Vehicles {
        brand  = "";
        model = "";
        prodYear = "";
        hp = "";
        tracks = "";

        constructor(brand, model, prodYear, hp, tracks) {
            this.brand = brand;
            this.model = model;
            this.prodYear = prodYear;
            this.hp = hp;
            this.tracks = tracks;
        }
        namE() { 
            return ` The ${this.prodYear}er ${this.model} from ${this.brand} has ${this.hp}hp `;
        }
    }

    class Motor extends Vehicles{
        salary;
        jobLocation;

        constructor(name, age, jobTitle, salary, jobLocation){
            super(name, age, jobTitle);
            this.salary;
            this.jobLocation;
        }

        work(){
            return ` ${super.namE()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
        }
    }

    var vehicle1 = new Vehicles("opel", "kadett", "1976", "80", "2");


    console.log(vehicle1.namE());

    $("body").append(`
      <p> ${vehicle1.namE()}</p>
    `);

