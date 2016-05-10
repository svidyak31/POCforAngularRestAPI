'use strict';

angular.module('PoC')
    .controller('ProductCtrl', function($scope, ProductFactory) {
        $scope.products = ProductFactory.getUniqueProducts();
    });
