'use strict';

/* Filters */
var appFilters = angular.module('InArray.filters', []);

/**
 * Filtra los resultados contenidos en un array
 * @Author: Alejandro Carrasco W.
 *
 */
appFilters.filter('inArray', function($filter){
    return function(list, arrayFilter,element){
        if(arrayFilter){
            if (element){
                return $filter("filter")(list, function(listItem){
                    return arrayFilter.indexOf(listItem[element]) != -1;
                });
            } else{
                return $filter("filter")(list, function(listItem){
                    return arrayFilter.indexOf(listItem) != -1;
                });
            }
        }
    }
});