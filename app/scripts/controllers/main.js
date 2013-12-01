'use strict';

angular.module('techRadarApp')
  .controller('MainCtrl', ['$scope', '$http', 'radarService', function ($scope, $http, radarService) {
    $scope.radarData = radarService.radar.data;

    $scope.setActive = function(status) {
      _.each($scope.radarData, function(status) { status.active = false; });
      status.active = true;
    };

    //console.log($scope.radarData[0]);
    $scope.setActive($scope.radarData[0]);

    $scope.addTech = function(category, tech) {
        if(tech) {
            category.technologies.push({label: tech});
            delete category.new
        }
    };

    $scope.removeTech = function(category, tech) {
        category.technologies = _.without(category.technologies, tech);
    };
    $scope.$watch('radarData', function(data){
      if(!data) return;
      $scope.activeCategory =  _.findWhere(_.flatten(_.pluck(data, 'categories')), {active: true});
      $scope.activeStatus = _.find(data, function(status){
        return _.indexOf(status.categories, $scope.activeCategory) >= 0;
      });
    }, true);

    $scope.getWikiSummary = function(tech) {
      this.result = $http.get('http://en.wikipedia.org/w/api.php?action=parse&page='+tech.label+'_(software)&format=json&prop=text&section=0');
      console.log(result);
    };

  }]);
