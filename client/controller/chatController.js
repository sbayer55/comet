
console.log("opened chatController.js");

angular.module('comet').controller('chatController', ['$scope', '$meteor',
    function($scope, $meteor) {
        console.log("chatController Loading...");

        // Globals

        // Functions

        $scope.sendMessage = function() {
            if ($scope.nextMessage) {

                $scope.chats.push($scope.nextMessage);
                console.log($scope.chats);
                delete $scope.nextMessage;
            }
            else {
                console.log("OOps");
            }
        };

        // On Load:

        $scope.chats = $meteor.collection(Chats);

        console.log("chatController Done");
    }]);