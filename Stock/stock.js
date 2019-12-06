/******************************************************************
* @Execution : default node : cmd> stock.js
* @description :calculate the value of each stock and total value
* @overview : To print the stock report
* @author : Soumya Chinnur
****************************************************************/
try {
    const stock = require('../stockManagement/stockBL')
    let obj = new stock.stock_mgt()
    obj.jsonParse('/home/admin1/Desktop/Programming/objectOrientedBranch/stockManagement/stock.json')
    obj.value()
} catch (e) {
    console.log(e.message)
}