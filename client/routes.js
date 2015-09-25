console.log("Configuring comit...");

angular.module('comet').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

         $stateProvider
         .state('chat', {
             url: '/chat',
             templateUrl: 'client/views/chat.ng.html',
             controller: 'chatController'
         })
         .state('user', {
             url: '/user',
             templateUrl: 'client/views/user.ng.html',
             controller: 'userController'
         });

        $urlRouterProvider.otherwise("/chat");
    }]);

console.log("Configuration is complete.");