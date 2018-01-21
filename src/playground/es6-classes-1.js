class Person {
    constructor(name = "test",age = "0"){
        this.name = name;
        this.age = age;
            }

    getGreeing(){
        return `hi i am ${this.name}`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
       let extend = super.getDescription();

       if(this.hasMajor()){

           extend += ` and major is ${this.major}`;
       }
       return extend;
    }
}


class Traveller extends Person {
    constructor(name,age,Homelocation) {
            super(name,age);
            this.Homelocation=Homelocation;
    }
    hasLocation(){

        return !!this.Homelocation;
    }

    getGreeing(){
        let home = super.getGreeing();
        if(this.hasLocation()){
            home += `  I am visiting from ${this.Homelocation}`;
        }
        return home;

    }

}

//const me = new Student('Harshal Prajapati',"26","Computer Science");

//console.log(me.getDescription());

//const no = new Student(); 
//console.log(no.getDescription());

const travel = new Traveller("Harshal","26","New Jersey")
console.log(travel.getGreeing());

const travel1 = new Traveller()
console.log(travel1.getGreeing());