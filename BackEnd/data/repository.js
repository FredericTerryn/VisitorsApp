var visitors = [
    { "id": 0, "name": "Frederic Terryn", "company": "Ausy", "typeOfVisit": "Sollicitant", "licensePlate": "1WQC375" },
    { "id": 1, "name": "Yannic Schelfout", "company": "Volt", "typeOfVisit": "Other", "licensePlate": "1AAA332" },
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
    module.exports.getAllVisitors = function () {
      return cleanArray(visitors);
    }
    module.exports.getVisitorById = function (id) {
      return visitors[id];
    }
    module.exports.insertVisitor = function (visitor) {
      visitor.id = visitors.length
      visitors[visitor.id] = visitor;
      return visitor;
    }
    module.exports.updateVisitor = function (visitor) {
      visitors[visitor.id] = visitor;
      return visitor;
    }
    module.exports.deleteVisitor = function (id) {
      visitors.splice(id, 1);
    }
     