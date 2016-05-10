'use strict';

angular.module('PoC')
    .controller('TicketCtrl', function($scope, TicketFactory) {
        $scope.tickets = TicketFactory.getTicketsForProduct();
    });