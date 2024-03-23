class Car {
    constructor(make,model,color,topspeed){
        this.make = make
        this.model = model
        this.color = color
        this.topspeed = topspeed
    }

    printSpecs(){
        console.log("Make:", this.make)
        console.log("Model:", this.model)
        console.log("Color:", this.color)
        console.log("Topspeed", this.topspeed)
    }
}

class Sedan extends Car{
    constructor(make,model,color,topspeed,build){
        super(make,model,color,topspeed)

        this.build = build
    }
}

let sedan1 = new Sedan("Tesla", "Model X", "Blue", 200)

sedan1.printSpecs()

// let car1 = new Car("Ford","Mustang", "Red", 150)


