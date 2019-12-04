/******************************************************************************8
*@purpose :Demonstrate prototype pattern.(clone the existing object into a new object)
* file :prototypePattern.js
* author :Soumya Chinnur
*****************************************************************************************/
function student(name, age, add) {
    this.name = name;
    this.age = age;
    this.say = () => {
        console.log("Student name is " + this.name + " and age is " + this.age);
    };
}
function studentPrototype(proto) {
    this.proto = proto;
    this.clone = function () {
        let std = new student();
        std.name = proto.name;
        std.age = proto.age;
        return std;
    };
}
function run() {
    let proto = new student('Soumya', '24');
    let prototype = new studentPrototype(proto);
    let std = prototype.clone();
    std.say();
}
run();