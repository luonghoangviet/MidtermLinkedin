


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
    }]
    
    
    
    
    );
    
    myapp.directive("clickToEdit", function () {
    var editorTemplate = '' +
        '<div class="click-to-edit">' +
            '<div ng-hide="view.editorEnabled">' +
                '{{value}} ' +
                '<a class="button tiny" href="#" ng-click="enableEditor()">Edit</a>' +
            '</div>' +
            '<div ng-show="view.editorEnabled">' +
                '<textarea rows="5" cols="50" class="small-12.columns" ng-model="view.editableValue"/>' +
                
                '<a class="button tiny" href="#" ng-click="save()">Save</a>' +
                
                ' or ' +
                
                '<a class="button tiny" href="#" ng-click="disableEditor()">Cancel</a>' +
            '</div>' +
        '</div>';

    return {
        restrict: "A",
        replace: true,
        template: editorTemplate,
        scope: {
            value: "=clickToEdit",
        },
        link: function (scope, element, attrs) {
            scope.view = {
                editableValue: scope.value,
                editorEnabled: false
            };

            scope.enableEditor = function () {
                scope.view.editorEnabled = true;
                scope.view.editableValue = scope.value;
                setTimeout(function () {
                    element.find('input')[0].focus();
                    //element.find('input').focus().select(); // w/ jQuery
                });
            };

            scope.disableEditor = function () {
                scope.view.editorEnabled = false;
            };

            scope.save = function () {
                scope.value = scope.view.editableValue;
                scope.disableEditor();
            };

        }
    };
});