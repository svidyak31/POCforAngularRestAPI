angular.module('PoC', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/', {
                templateUrl: 'views/home.html'
            })
            .when('/products', {
                templateUrl: 'views/products.html',
                controller: 'ProductCtrl'
            })
            .when('/tickets', {
                templateUrl: 'views/tickets.html',
                controller: 'TicketCtrl'
            })
    })
    //when the app loads all the files loads and stores at template cache
    .run(function($templateCache, $http) {
        $http.get('views/home.html', {
            cache: $templateCache
        });
        $http.get('views/products.html', {
            cache: $templateCache
        });
        $http.get('views/tickets.html', {
            cache: $templateCache
        });
    });
