/*******************************************************************************************
 * @purpose:User input and replace string template "Hello<<UserName>>, How Are you?"
 * @author:Soumya Chinnur
 * @file:replaceString.js
 * @since:15-10-2019
 ********************************************************************************************/
var take = require("../replaceStringBlogic")
var read = require("readline-sync")
var string = read.question("Enter the name");
take.replaceString(string);