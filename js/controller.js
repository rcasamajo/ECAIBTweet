/**
 * Created by rcasamajo on 18/2/16.
 */

app.controller('mainController', ["$scope", "$firebaseObject", "$firebaseArray", "getUserTweets",
    function($scope, $firebaseObject, $firebaseArray, getUserTweets) {

        // create a reference to the database location where we will store our data
        var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");

        //var query = ref.orderByKey().equalTo($scope.userId);
        //$scope.user = $firebaseObject(query);

        $scope.userId = "";
        $scope.userName = "";
        $scope.userTweets = "";

        $scope.setUser = function() {
                $scope.userName = $firebaseObject(ref.child($scope.userId).child("name"));
                $scope.userTweets = getUserTweets($scope.userId);
            };

}]);