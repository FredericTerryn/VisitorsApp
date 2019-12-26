const uuid = require('uuid/v3'); 

var visitors = [
  { "id": 0, "name": "Frederic Terryn", "company": "Ausy", "typeOfVisit": "Sollicitant","dateLogin":"2019-12-26T13:12:56.712Z", "licensePlate": "1WQC375" },
  { "id": 1, "name": "Yannic Schelfout", "company": "Volt", "typeOfVisit": "Other","dateLogin":"2019-12-26T13:12:56.712Z", "licensePlate": "1AAA332" },
];

  function cleanArray(actual) {
    var newArray = [];
    for (var i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }

var pastVisitors = []

  module.exports.getAllVisitors = function () {
    return cleanArray(visitors); 
  }

  module.exports.getAllPastVisitors = function () {
    return cleanArray(pastVisitors); 
  }

  module.exports.getVisitorById = function (id) {
    let visitor = visitors.filter((v) => v.id == id); 
    return visitor[0]; 
  }

  module.exports.insertVisitor = function (visitor) {
    //THE FOLLOWING USE OF ID's IS JUST FOR DEMO PURPOSE, and NOT FAIL SAVE!
    var length = visitors.length;  
    visitor.id = visitors[length-1].id +1; 
    //add it to pastvisitors for history knowledge, and to visitors to handle current visitors
    pastVisitors.push(visitor); 
    visitors[visitor.id] = visitor;
    return visitor;
  }

  module.exports.updateVisitor = function (visitor) {
    visitors[visitor.id] = visitor;
    return visitor;
  }
  module.exports.deleteVisitor = function (id) {
    visitors = visitors.filter((v) => v.id != id); 
  }

  module.exports.getHistoryVisitors = function () {
    return cleanArray(pastVisitors); 
  }