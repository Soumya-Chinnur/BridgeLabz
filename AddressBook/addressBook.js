try {
    const fs = require('fs')
    const address_Book = require("../AddressBook/addressBookBL")
    let jsonFile = fs.readFileSync("/home/user/Desktop/BridgeLabz/ObjectOrientedProgram/AddressBook/addressBook.json")
    const data = JSON.parse(jsonFile)
    address_Book.addressOperations(data)
} catch (e) {
    console.log(e.message);
}
