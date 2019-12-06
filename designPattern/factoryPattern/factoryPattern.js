/****************************************************************************************
* @Execution : default node : cmd> factory.js
* @description :Prints the factory pattern design
* @overview : Design patterns
* @author : Soumya Chinnur
*************************************************************************************/
try {
    const FactoryObjects = require('../factoryPattern/factoryPatternBL')
    new FactoryObjects.PC().system();
    new FactoryObjects.server().system();
    new FactoryObjects.laptop().system();
} catch (e) {
    console.log(e.message)
}