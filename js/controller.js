/**
 * Created by rcasamajo on 18/2/16.
 */

app.controller('mainController', ["$scope", "getUser", "getUserTweets", "getFollowings", "getFollowingTweets",
    function($scope, getUser, getUserTweets, getFollowings, getFollowingTweets) {

        $scope.setUser = function() {
            $scope.userId = $scope.usuari;
            $scope.usuari = "";
            var dades = getUser($scope.userId);
            $scope.userName = dades.nom;
            $scope.userDesc = dades.desc;
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