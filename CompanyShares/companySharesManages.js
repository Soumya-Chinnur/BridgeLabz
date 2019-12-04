/************************************************************************* 
* @Purpose : Maintain the List of CompanyShares in a Linked List.
*            So new CompanyShares can be added or removed easily.
* @File    :companySharesManage.js
* @Author  :Riyazuddin K
* @Date    :13-11-2019
******************************************************************************/
/** 
* @purpose : file system to read and write file...
*/
const fs = require('fs');
/** 
*@purpose : import the business logic linked list
*/
const linkedList = require("./sharesLinkedList");
/** 
*@purpose : To conversation with the user via a console
*/
const prompt = require('prompt-sync')();
/**
 * @purpose : Create object of linked list
 */
let list = new linkedList();
/**
 * @purpose : Read the json file.
 */
let data = fs.readFileSync('./companyShares.json')
/**
 * @purpose :JSON.parse() to convert text into a JavaScript object
 */
let companySharesJson = JSON.parse(data);
/**
 * @purpose :Manage the shares linked list
 */
function sharesManage() {
    try {
        const menu = `1. Add new Company
    2. Remove Company
    3. Display
    4. Exit`;
        /**
         * @purpose : Add each json file data to linkedlist
         */
        companySharesJson.forEach(element => {
            list.firstAdd(element.name, Number(element.shares), Number(element.price));
        });
        while (1) {
            console.log(menu);
            let choice = prompt("Enter one option :")
            switch (parseInt(choice)) {
                case 1:
                    var company = prompt("Enter the new company name: ");
                    var numberOfshares = prompt("Enter the Number of shares: ");
                    var sharePrice = prompt("Enter the share price: ");
                    list.firstAdd(company, Number(numberOfshares), Number(sharePrice));
                    companySharesJson = list.getData();
                    fs.writeFileSync('./companyShares.json', JSON.stringify(companySharesJson));
                    console.log(companySharesJson);
                    break;
                case 2:
                    console.log(companySharesJson);
                    var deleteCompnay = prompt("Enter the company you want to delete : ");
                    var flag = list.delete(deleteCompnay);
                    if (flag == true) {
                        console.log("Deleted")
                        companySharesJson = list.getData();
                        fs.writeFileSync('./companyShares.json', JSON.stringify(companySharesJson));
                    } else {
                        console.log("Not found")
                    }
                    break;
                case 3:
                    companySharesJson = list.getData();
                    console.log(companySharesJson);
                    break;
                case 4: process.exit();
                    break;
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}
sharesManage();