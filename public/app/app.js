'use strict';

angular.module('ladduzAdminApp', [
	'ngRoute',
])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/upload', {
				templateUrl: '/public/app/views/upload.html',
				controller: 'uploadCtrl'
			});
	})
	.controller('uploadCtrl', function ($scope, $http) {
		$scope.upload = function (file) {


		};
	});
