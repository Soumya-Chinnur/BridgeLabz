

/**************************************
* Purpose : Create a JSON file having Inventory Details for Rice, 
*           Pulses and Wheats with properties name, weight, price per kg.
*           Calculate the value for every Inventory.
* File    : inventoryDataManagement.js
* Author  : Soumya Chinnur
*************************************/
var prompt = require('prompt-sync')();//node-module prompt-sync
var util = require('./grocery')
var fs = require('fs');
try {
    /*
    * function JSON.parse() is used to convert the string into a JavaScript Objects
    */
    var jsonInventory = JSON.parse(fs.readFileSync('./inventory.json')); //read file from json

    console.log("Json file data", jsonInventory);
    console.log("*****Rice Items******");
    var riceLength = jsonInventory.Rice.length;
    for (let i = 0; i < riceLength; i++) {
        var name = jsonInventory.Rice[i].name;
        var weight = jsonInventory.Rice[i].weight;
        var price = jsonInventory.Rice[i].price;
        console.log("Name : " + name + "\nTotal Weight: " + weight + "\nPrice /Kg : " + price)
        var rice = new util.Rice(name, weight, price)
        var total = rice.total();
        console.log("Total price of rice : " + total + "Rs");
    }
    var wheatLength = jsonInventory.Wheats.length;
    console.log("*****Wheat Items******");
    for (let i = 0; i < wheatLength; i++) {
        var name = jsonInventory.Wheats[i].name;
        var weight = jsonInventory.Wheats[i].weight;
        var price = jsonInventory.Wheats[i].price;
        console.log("Name : " + name + "\nTotal Weight: " + weight + "\nPrice /Kg : " + price)
        var wheat = new util.Wheat(name, weight, price);
        var total = wheat.total();
        console.log("Total value of wheats : " + total + "Rs");
    }
    var pulseLength = jsonInventory.Pulses.length;
    console.log("*****Pulses Items******");
    for (let i = 0; i < pulseLength; i++) {
        var name = jsonInventory.Pulses[i].name;
        var weight = jsonInventory.Pulses[i].weight;
        var price = jsonInventory.Pulses[i].price;
        console.log("Name : " + name + "\nTotal Weight: " + weight + "\nPrice /Kg : " + price)
        var pulse = new util.Pulse(name, weight, price);
        var total = pulse.total();
        console.log("Total value of pulses : " + total + "Rs");
    }
}
catch (err) {
    console.log(err);
}