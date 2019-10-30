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
        calculate(){
            if (this.constructor.name == "Motor"){
                return  this.prodYear * this.hp
            }else{
                console.log("error");
            }
        }
    }

    class Trucks extends Vehicles{
        loading;
        loadingType;  
        constructor(brand, model, prodYear, hp, tracks, loading, loadingType){
            super(brand, model, prodYear, hp, tracks);
            this.loading;
            this.loadingType;
        }
        work(){
            return ` `;
        }
    }

    class Motor extends Vehicles{
        type;
        constructor(brand, model, prodYear, hp, tracks, type){
            super(brand, model, prodYear, hp, tracks);
            this.type;
        }
    }

    var vehicle1 = new Vehicles("opel", "kadett", "1976", "80", "2");
    var vehicle2 = new Motor("Yamaha", "Tenere 700", "2018", "73", "1","Adventure");
    var vehicle3 = new Trucks("MAN", "gross", "2018", "473", "2","12000","flatbed");


    console.log(vehicle2.constructor.name);


    $("body").append(`
      <p> ${vehicle1.namE()}</p>
      <p> ${vehicle2.calculate()}</p>
      <p> ${vehicle3.calculate()}</p>
    `);

