angular.module('myApp').service('service', function($http){

  var promise = $http.get('https://AnyUrlCanGoHere.com/api/dogs',<here is body if post>);

  promise.then(function(results){
    var status = results.status;
    var dogs = results.data;
    var info = JSON.parse(); //makes json into javascript, but angular does it for you
              JSON.stringify(); // makes js into json data
  });
//another example
var promise = $http({
  url: 'https://AnyUrlCanGoHere.com/api/dogs',
  method: "POST",
  data: {name: 'Mee sir'},
});

promise.then(function(results){
  var status = results.status;
  var dogs = results.data;
});

});
