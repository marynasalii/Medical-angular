'use strict';
angular.module('dyplomApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'MainCtrl'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'MainCtrl'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    // route for the aboutus page
            .state('app.ourteam', {
                url:'ourteam',
                views: {
                    'content@': { //@ means only content
                        templateUrl : 'views/ourteam.html',
                        controller  : 'MainCtrl'
                   }
                }
            })
                    // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'MainCtrl'
                     }
                }
            })

            // route for the menu page
            .state('app.services', {
                url: 'services',
                views: {
                    'content@': {
                        templateUrl : 'views/services.html',
                        controller  : 'MainCtrl'
                    }
                }
            });
            $urlRouterProvider.otherwise('/');
    })
;