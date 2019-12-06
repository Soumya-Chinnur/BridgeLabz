/******************************************************************************
* purpose : Demonstrate mediator pattern.
* (Mediator pattern focuses on provide a mediator between objects for communication and
    * help in implementing loose - coupling between objects. )
* file : mediatorPattern.js
* author : Soumya Chinnur

***************************************************************************** /
/**
* @purpose :chat workes as a mediator between two user object.
*/
class chat {
    constructor(user, message) {
        this.user = user;
        this.message = message;

    }
    showMessage() {

        console.log("User name is: " + this.user + " and message:" + this.message);
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
    setName(nm) { //setting name
        this.name = nm;
    }
    getName() {
        this.name;
    }
    sendMessage(message) {
        this.message = message;
        let cr = new chat(this.name, this.message);
        cr.showMessage();
    }
}
let user1 = new User();//creating user1
let user2 = new User();//creating user2

user1.setName("Rohan");
user2.setName("Alexa");
user1.sendMessage("Hi Rohan");
user2.sendMessage("Hi Alexa");