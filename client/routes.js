console.log("Configuring comit...");

angular.module('comet').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

         $stateProvider
         .state('chat', {
             url: '/chat',
             templateUrl: 'client/views/chat.ng.html',
             controller: 'chatController'
         });

        $urlRouterProvider.otherwise("/chat");
    }]);

console.log("Configuration is complete.");