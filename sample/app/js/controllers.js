'use strict';

var appCtrls = angular.module('InArray.controllers', []);

appCtrls.controller('MainCtrl', function($scope) {
    $scope.array = [
        {id: 'a'},
        {id: 'b'},
        {id: 'c'},
        {id: 'd'},
        {id: 'e'}
    ];

    $scope.plainArray = ['a', 'b', 'c', 'd', 'e'];

    $scope.filterArray = ['b', 'c', 'd'];
});