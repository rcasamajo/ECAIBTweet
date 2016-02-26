app.factory("userTweets", ["$firebaseArray",
    function($firebaseArray) {
        return function(p1,p2) {
            var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
            return $firebaseObject(ref.child(""));
            return p1.toString() + ' + ' + p2.toString();
        };
    }
]);

app.factory('followingTweets', function() {
    var ref = new Firebase("https://ecaibtweet.firebaseio.com/users");
    var usuari = ref.child($scope.userId);
    return usuari.followings;
});