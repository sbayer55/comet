
console.log("opened chatController.js");

angular.module('comet').controller('chatController',
    ['$rootScope', '$scope', '$meteor',
    function($rootScope, $scope, $meteor) {
        console.log("chatController Loading...");

        // Globals

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
        }

        // On Load:

        $scope.chats = $meteor.collection(Chats);

        console.log("chatController Done");
    }]);