    class Person {
        name = "";
        age = "";
        jobTitle = "";

        constructor(name, age, jobTitle) {
            this.name = name;
            this.age = age;
            this.jobTitle = jobTitle;
        }
        namE() { 
            return `Hello there, I am ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} `;
        }
    }

    class Member extends Person{
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

    var person1 = new Person("Jon Doe", "33", "boss");

    var person2 = new Member(person1.name, person1.age, person1.jobTitle, "2000", "Vienna")

    console.log(person1.namE());

    $("body").append(`
      <p> ${person1.namE()}</p>
      <p> ${person2.work()}</p>
    `);

