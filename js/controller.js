/**
 * Created by rcasamajo on 18/2/16.
 */

app.controller('mainController', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
    $scope.cel = 0;
    $scope.far = 32;
    $scope.dir = "toF";

    // create a reference to the database location where we will store our data
    var ref = new Firebase("https://ecaibtweet.firebaseio.com/tweets/");

    $scope.tweets = $firebaseArray(ref);

    // if the messages are empty, add something for fun!
    $scope.tweets.$loaded(function() {
        if ($scope.tweets.length === 0) {
            $scope.tweets.$add({
                user: "admin",
                text: "Hello world!"
            });
        }
    });

}]);