
console.log("opened chatController.js");

angular.module('comet').controller('userController',
	['$rootScope', '$scope', '$meteor',
	function($rootScope, $scope, $meteor) {

		console.log("chatController Loading...");

		$scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

		$scope.submit = function() {
			console.log("Yo dawg!");
			console.log($rootScope.currentUser.profile);
			Meteor.users.update($rootScope.currentUser._id, {$set: {profile: $rootScope.currentUser.profile}});
		};

		$meteor.waitForUser().then(function() {
			//$rootScope.currentUser.profile = {firstName: 'Steven'};
			console.log($rootScope.currentUser);
		});

		console.log("chatController Done");

	}]);