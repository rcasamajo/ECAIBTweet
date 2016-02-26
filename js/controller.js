/**
 * Created by rcasamajo on 18/2/16.
 */

app.controller('mainController', ["$scope", "$firebaseObject", "$firebaseArray", "getFollowings",
    function($scope, $firebaseObject, $firebaseArray, getFollowings) {

    $scope.userId = "rcc";

    // create a reference to the database location where we will store our data
    var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");

    var query = ref.orderByKey().equalTo($scope.userId);
    $scope.user = $firebaseObject(query);

    $scope.followings = getFollowings;

}]);