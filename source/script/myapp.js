var myapp= angular.module('myapp', []);

myapp.controller('linkedin', ['$scope','$http',
    function ($scope, $http) {
    
        $http.get('https://api.myjson.com/bins/56rq2').success(function (data) {
     
            $scope.avatar = data.avatar;
            $scope.name = data.name;
            $scope.headline = data.headline;
            $scope.info = data.info;
            $scope.myUrl = data.myUrl;
            $scope.summary = data.summary;
            $scope.experience = data.experience;
            $scope.projects = data.projects;              
            $scope.skills = data.skills; 
            $scope.education = data.education;
            
        });
    }]);