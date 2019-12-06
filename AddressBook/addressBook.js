/************************************************************
 * @purpose:The software to be designed is a program that can be used to maintain an address 
 *           book. An address book holds a collection of entries, each recording a person's
 *           first and last names, address, city, state, zip, and phone number.
 * @author: Soumya Chinnur
 * @file: addressBook.js
 **************************************************************/
try {
    const fs = require('fs')//built in library
    const address_Book = require("../AddressBook/addressBookBL")
    let jsonFile = fs.readFileSync("/home/user/Desktop/BridgeLabz/ObjectOrientedProgram/AddressBook/addressBook.json")
    const data = JSON.parse(jsonFile)
    address_Book.addressOperations(data)
} catch (e) {
    console.log(e.message);
}
