
console.log("opened chatController.js");

angular.module('comet').controller('chatController',
    ['$rootScope', '$scope', '$meteor',
    function($rootScope, $scope, $meteor) {
        console.log("chatController Loading...");

        // Globals
        $scope.chats = $meteor.collection(Chats).subscribe('chats');

        // Functions

        $scope.sendMessage = function() {
            if ($scope.nextMessage) {

                $scope.chats.push({message: $scope.nextMessage, author: $rootScope.currentUser.emails[0].address});
                delete $scope.nextMessage;
            }
            else {
                console.log("Oops");
            }
        };

        $scope.removeAll = function() {
            $scope.chats.remove();
        };

        $scope.isCurrentUser = function(userName) {
            if (typeof $rootScope.currentUser !== 'undefined')
                if (typeof $rootScope.currentUser.emails !== 'undefined') {
                    //console.log('This should be a user:');
                    //console.log($rootScope.currentUser);
                    return userName == $rootScope.currentUser.emails[0].address;
                }
            return false;
        };

        $scope.toConsole = function(value) {
            console.log(value);
        };

        $scope.scroll = function() {
            $('.conversation-panel').each(function(key, value) {
                $(value).scrollTop(999999);
            });
        };

        // On Load:

        $scope.chats = $meteor.collection(Chats);


        console.log("chatController Done");
    }]);