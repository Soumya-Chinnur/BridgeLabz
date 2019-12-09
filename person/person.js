
const input = require("readline-sync");
let Str =
  "Hello <<name>>, We have your full name\r\n" +
  "as <<fullname>> in our system. your contact number is +91-­xxxxxxxxxx. Please,let us\r\n" +
  "know in case of any clarification Thank you  XX/XX/XXXX.";

let list = require("./get&set");
let Set = new list.person();
let firstname = input.question("Enter the firstname");
let fullname = input.question("Enter the fullname");

let pattern = /^[A-Za-z]+$/;
//check whether the input is string.
if (!pattern.test(firstname) || !pattern.test(fullname)) {
  firstname = input.question("Enter your firstname(alphabets only) : ");  
  fullname = input.question("Enter your fullname(alphabets only) : ");
}
Set.setFName(firstname);
Set.setfullName(fullname);
let mobNo = input.question("Enter the 10 digit MobNo");
//check whether the input is 10 digit number.
if (isNaN(mobNo) || mobNo.length != 10) {
  mobNo = input.question("\nEnter valid phone number(10 digits only) : ");     
}
Set.setmobileNo(mobNo); 
let date = new Date();
console.log("==============");
let Str1 = Str.replace("<<name>>", Set.getFName());
let Str2 = Str1.replace("<<fullname>>", Set.getfullName());
let Str3 = Str2.replace("xxxxxxxxxx", Set.getmobileNo());
let Str4 = Str3.replace("XX/XX/XXXX", date.toDateString());
console.log(Str4);
