console.log("Creating comet app.");
angular.module('comet', ['angular-meteor', 'ui.router']);

/*
angular.module('comet').directive('ngScrollTo', function() {
	return function(scope, element, attrs) {
		angular.element(element).css('color', 'blue');
		if (scope.$last) {
			document.getElementsByClassName('.conversation-panel')[0].scrollTop = document.getElementsByClassName('.conversation-panel')[0].scrollHeight;
			$('.conversation-panel').scrollTop($('.conversation-panel').scrollHeight);
			console.log('Scroll height:');
			console.log($('.conversation-panel').height);
			//console.log($(element).html('Hello??????'));
		}
	};
});
	*/