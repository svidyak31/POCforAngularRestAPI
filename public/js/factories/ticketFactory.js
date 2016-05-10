'use strict';

angular.module('PoC')
    .factory('TicketFactory', function() {
		var ticketsForProduct;
		var selectedProduct;
		var products;
		return {
			 setTicket: function(data) {
                selectedProduct = data;
                ticketsForProduct = [];
            },
			 setProducts: function(data) {
                products = data;
            },
			getTicketsForProduct:function(){
				  angular.forEach(products, function(item) {
                    angular.forEach(item.product, function(data) {
                        if(data.name === selectedProduct) {
                            ticketsForProduct.push(item);
                        }
                    });
                }); 
                return ticketsForProduct;
			}
		}
		});