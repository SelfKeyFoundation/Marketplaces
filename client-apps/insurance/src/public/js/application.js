'use strict';

angular.module('marketplaceApp', ['rzModule'])
  .controller('ListController', function ($scope, $http, $sce) {

    // Do an initial search
    fetchAirtableData();

    function fetchAirtableData() {
      const apiURL = 'http://localhost:3001/api';

      $http.get(apiURL)
        .then((response) => {
          $scope.list = response.data.Overview.map(c => c.data.fields);
          $scope.result = $scope.list;
          $scope.benefitMaxValue = $scope.list[0]['Max Benefit'];
          $scope.costMaxValue = $scope.list[0]['Cost'];
          for (var i = 1, l = $scope.list.length; i < l; i++) {
            if ($scope.list[i]['Max Benefit'] > $scope.benefitMaxValue) {
              $scope.benefitMaxValue = $scope.list[i]['Max Benefit'];
            }
            if ($scope.list[i]['Cost'] > $scope.costMaxValue) {
              $scope.costMaxValue = $scope.list[i]['Cost'];
            }
          }
          $scope.benefitSlider = {
            minValue: 0,
            maxValue: $scope.benefitMaxValue,
            options: {
              translate: function (value, sliderId, label) {
                switch (label) {
                  case 'model':
                    return '<b>Min price:</b> $' + value;
                  case 'high':
                    return '<b>Max price:</b> $' + value;
                  default:
                    return '$' + value
                }
              }
            }
          };
          $scope.costSlider = {
            minValue: 0,
            maxValue: $scope.costMaxValue,
            options: {
              translate: function (value, sliderId, label) {
                switch (label) {
                  case 'model':
                    return '<b>Min price:</b> $' + value;
                  case 'high':
                    return '<b>Max price:</b> $' + value;
                  default:
                    return '$' + value
                }
              }
            }
          };
        });
    }




    $scope.openNav = function (item) {
      const sidenav = document.getElementById("mySidenav");
      const body = document.getElementsByTagName("body")[0];
      sidenav.classList.add('visible');
      body.classList.add('flyout-visible');
      document.getElementById('overlay').style.display = "block";
      $scope.rawData = item;
      console.log( $scope.rawData );
      $scope.rawData['Explanation'] = $sce.trustAsHtml($scope.rawData['Explanation']);
    };

    $scope.closeNav = function () {
      const sidenav = document.getElementById("mySidenav");
      const body = document.getElementsByTagName("body")[0];
      sidenav.classList.remove('visible');
      body.classList.remove('flyout-visible');
      document.getElementById('overlay').style.display = "none";
    };

    $scope.search = function () {
      $scope.result = $scope.list.filter(function (item) {
        return item['Max Benefit'] >= $scope.benefitSlider.minValue && item['Max Benefit'] <= $scope.benefitSlider.maxValue &&
          item['Cost'] >= $scope.costSlider.minValue && item['Cost'] <= $scope.costSlider.maxValue;
      });
    }

    $scope.reset = function () {
      $scope.benefitSlider.minValue = 0;
      $scope.benefitSlider.maxValue = $scope.benefitMaxValue;
      $scope.costSlider.minValue = 0;
      $scope.costSlider.maxValue = $scope.costMaxValue;
      $scope.result = $scope.list;
    }

  });