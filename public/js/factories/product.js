'use strict';

angular.module('PoC')
    .factory('ProductFactory', function() {
        var products;
        var uniqueProducts;
        return {
            setProducts: function(data) {
                products = data;
                uniqueProducts = [];
            },
            getProducts: function() {
                return products;
            },
            getUniqueProducts: function() {
                angular.forEach(products, function(item) {
                    angular.forEach(item.product, function(data) {
                        if(uniqueProducts.indexOf(data.name) === -1) {
                            uniqueProducts.push(data.name);
                        }
                    });
                }); 
                return uniqueProducts;
            }
        }
    });
