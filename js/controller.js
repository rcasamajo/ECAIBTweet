/**
 * Created by rcasamajo on 18/2/16.
 */

app.controller('mainController', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

    // create a reference to the database location where we will store our data
    var ref = new Firebase("https://ecaibtweet.firebaseio.com/users/");

    var query = ref.orderByChild("users").equalTo("rcc");
    $scope.tweets = $firebaseArray(ref);

}]);