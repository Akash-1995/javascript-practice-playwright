
//Inheritance and overide concept
class vehicle {
constructor(color,speed, comapany)
{
this.color=color;
this.speed=speed;
this.comapany=comapany
}

print(){
    console.log(`color : ${this.color} , speed : ${this.speed}, company: ${this.company}`)
}
}

class bike extends vehicle{
    constructor(name,color,speed,company){
        super(color,speed,company)
        this.name=name
    }
    print(){
        console.log(`name: ${this.name} , color : ${this.color} , speed : ${this.speed}, company: ${this.company}`)
    }
}

const obj=new bike('fz','black','160kmph','bajaj');
obj.print();
