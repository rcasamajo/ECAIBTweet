/**
 * Created by rcasamajo on 18/2/16.
 */

app.controller('mainController', ["$scope", "$firebaseObject", "$firebaseArray", "getUserTweets", "getFollowings", "getFollowingTweets",
    function($scope, $firebaseObject, $firebaseArray, getUserTweets, getFollowings, getFollowingTweets) {

        var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");

        $scope.setUser = function() {
            $scope.userId = $scope.usuari;
            $scope.usuari = "";
            $scope.userName = $firebaseObject(ref.child($scope.userId).child("name"));
            $scope.userDesc = $firebaseObject(ref.child($scope.userId).child("description"));
            $scope.userTweets = getUserTweets($scope.userId);
            $scope.followings = getFollowings($scope.userId);
            $scope.followingTweets = getFollowingTweets($scope.userId);
        };

        $scope.tweet = function() {
            $scope.userTweets.$add({text: $scope.tweetTxt});
            $scope.tweetTxt = "";
        }

        $scope.follow = function() {
            $scope.followings.$add({idUser: $scope.usuari2Follow});
            $scope.usuari2Follow = "";
        }
}]);