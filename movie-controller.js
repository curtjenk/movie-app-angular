var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http) {

    var baseURL = 'https://api.themoviedb.org/3/';
    var methodNowPlaying = 'movie/now_playing';
    var apiKey = 'api_key=2d9e9aacbdc397236dad8339b3d2c17c';

    var URL = baseURL + methodNowPlaying + '?' + apiKey;

    // $scope.imagesArr = [];
    $scope.imageURL = 'http://image.tmdb.org/t/p/w300';
    $scope.dataResults = [];
    
    $http.get(URL).success(function(data) {

        console.log(data);
        $scope.dataResults = data.results;
        // for (i = 0; i < data.results.length; i++) {

        //     $scope.imagesArr.push('http://image.tmdb.org/t/p/w300' + data.results[i].poster_path);
        // }
    });

});
