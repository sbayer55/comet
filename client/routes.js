angular.module('comet').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('chat', {
                url: '/chat',
                templateUrl: '/views/chat.ng.html',
                controller: 'chatController'
            });

        $urlRouterProvider.otherwise("/chat");
    }]);