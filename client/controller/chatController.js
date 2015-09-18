if (Meteor.isClient) {
    angular.module('comet').controller('chatController', ['$scope',
        function($scope) {
            console.log("chatController Loading...");

            console.log("chatController Done");
        }]);
    console.log("Loaded module?");
}