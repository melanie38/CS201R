var app = window.angular.module('app', [])

app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)

function pokemonFetcher ($http) {

  return {
    get: function (route) {
      return $http
        .get(route)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}
/*
function activityFetcher ($http) {

  var API_ROOT = 'activity'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}
*/
function mainCtrl ($scope, pokemonFetcher) {

  $scope.pokemon = []
  $scope.inactivity = false

  $scope.getMen = function() {
    pokemonFetcher.get('man')
    .then(function (data) {
      $scope.pokemon = data
    })
  }
  $scope.getWomen = function() {
    pokemonFetcher.get('woman')
    .then(function (data) {
      $scope.pokemon = data
    })
  }

  $scope.getActivity = function() {
   // $scope.inactivity = true
    pokemonFetcher.get('activity')
    .then(function () {
      $scope.pokemon = data
    })
  }

$scope.addPoki = function() {
  var formData = {name:$scope.Name,avatarUrl:$scope.Url};
  console.log(formData);
  var pokiURL = 'pokemon';
  $http({
     url: pokiURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
    console.log("Post failed");
  });
}
}
