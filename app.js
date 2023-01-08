const Color = function(r, g, b){
     
        this.r = r;
        this.g = g,
        this.b = b;
    }
    
    Color.prototype.rgbColor = function() {
    // return `"rgb(${this.r},${this.g},${this.b})"`;
    return "rgb" +"("+this.r +","+this.g+","+this.b+")";
    }

    Color.prototype.hexColor = function() {
    return '#' + (this.r).toString(16) +
       (this.g).toString(16) +
       (this.b).toString(16);
    
    }

    Color.prototype.rgbaColor = function(a) {
        this.a = a;
        // return `"rgba(${this.r},${this.g},${this.b},${this.a})"`;
        return "rgba" +"("+this.r +","+this.g+","+this.b+","+this.a+")";
        }
const colors = new Color(0, 0, 255);
document.body.style.backgroundColor = colors.rgbColor();
console.log(colors);
// colors.rgbColor();
console.log(colors.rgbColor());
console.log(colors.hexColor());
console.log(colors.rgbaColor(0.2));



// document.body.style.backgroundColor = colors.changeColor();
// const Cars = function(name, model) {
//     this.name = name;
//     this.model = model;

//     // this.aboutCar = function() {
//     //     console.log(`This car name is ${this.name} and model is ${this.model}.`)
//     // }
// }

// Cars.prototype.aboutCar = function() {
//     console.log(`This car name is ${this.name} and model is ${this.model}.`)
// }
// const car = new Cars("BMW", 2015);
// const anotherCar = new Cars ("Ferari", 2021);
// console.log(car)
// console.log(anotherCar);
// car.aboutCar()

// const Houserent = function (amount) {
//     this.amount = amount;

// }

//     Houserent.prototype.increment = function () {
//     this.amount += 1000;
//     console.log(`Next year rent will be ${this.amount}`);
//      }
    
//      Houserent.prototype.decrement = function () {
//         this.amount -= 1000;
//         console.log(`Next year rent will be ${this.amount}`);
//          }
// const singleRoomRent = new Houserent(4000);
// const doubleRoomrent = new Houserent(7500);

// console.log(singleRoomRent);
// singleRoomRent.increment();
// singleRoomRent.increment();
// singleRoomRent.increment();
// singleRoomRent.decrement();
// console.log(singleRoomRent);
// console.log(doubleRoomrent);