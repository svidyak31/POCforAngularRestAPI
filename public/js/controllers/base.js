'use strict';

angular.module('PoC')
    .controller('BaseCtrl', function($scope, $location, $http, ProductFactory, TicketFactory) {
        $scope.goToHome = function() {
            $location.url('/home');
        };
        $scope.goToProducts = function() {
            $http({
                method: 'GET',
                url: '/api/getProducts'
            }).then(function successCallback(response) {
            	ProductFactory.setProducts(response.data);
            	$location.url('/products');    
            }, function errorCallback(response) {
                
            });            
        };
        $scope.goToTickets = function(productName) {
			$http({
                method: 'GET',
                url: '/api/getProducts'
            }).then(function successCallback(response) {
			TicketFactory.setProducts(response.data);
			TicketFactory.setTicket(productName);
            $location.url('/tickets');
            }, function errorCallback(response) {
                
            });            
        };
    });
