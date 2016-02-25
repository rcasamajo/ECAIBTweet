/**
 * Created by rcasamajo on 18/2/16.
 */

app.controller('mainController', ["$scope", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray) {

    $scope.userId = "rcc";

    // create a reference to the database location where we will store our data
    var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");

    var query = ref.orderByKey().equalTo($scope.userId);
    $scope.user = $firebaseObject(query);

}]);