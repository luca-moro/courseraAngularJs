(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {	
	$scope.messaggio = "";

	function CheckEmpty (word) {
		return word != " " && word != "";
	};

	$scope.Conta = function () {
		var words = $scope.lista.split(',');
		console.log(words);
		words = words.filter(CheckEmpty);
		console.log(words);
		if ($scope.lista == null || $scope.lista == "") {
			$scope.messaggio = "Please enter data first.";
		}
		else {
			if (words.length <= 3 && words.length > 0) {
				$scope.messaggio = "Enjoy !";
  			}
  			else if (words.length > 3) {
  				$scope.messaggio = "Too much !";
  			}
  			else {
  				$scope.messaggio = "Please enter data first.";
  			}
		} 
	};

}
})();