'use strict';

var appCtrls = angular.module('InArray.controllers', []);

appCtrls.controller('MainCtrl', function($scope) {
    $scope.letters = [
        {id: 'a'},
        {id: 'b'},
        {id: 'c'},
        {id: 'd'},
        {id: 'e'}
    ];

    $scope.filterArray = ['b', 'c', 'd'];
});