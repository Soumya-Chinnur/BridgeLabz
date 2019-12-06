/***************************************************************
* Purpose : Grocery class for maintain the data.
* File    : grocery.js
* Author  : Soumya Chinnur
*****************************************************************/
class Grocery {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    total() {
        return this.weight * this.price;
    }
}
class Rice extends Grocery { //extending parent class
    constructor(name, weight, price) {
        super(name, weight, price)//pointing to immediate parent
    }
}
class Wheat extends Grocery {
    constructor(name, weight, price) {
        super(name, weight, price)
    }
}
class Pulse extends Grocery {
    constructor(name, weight, price) {
        super(name, weight, price)
    }
}
module.exports = { Rice, Wheat, Pulse }