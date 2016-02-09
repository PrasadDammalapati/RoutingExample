var app=angular.module("myApp",["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/login", { templateUrl: 'views/login.html', controller: "myCtrl", title: "Login" })
                  .when("/home", { templateUrl: 'views/home.html', controller: "myCtrl", title: "Home" })
                  .when("/profile", { templateUrl: 'views/profile.html', controller: "myCtrl", title: "Profile" })
                  .otherwise("/login");
}]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.mytitle = current.$$route.title;
    });
}]);



app.controller("myCtrl",function($scope, $location){
    $scope.home = "Home from controller";
    $scope.prof = "Profile Controller";

    $scope.mycol = "background-color':'#AF562A";


    $scope.UserLogin = function () {
        if ($scope.loginid == "admin" && $scope.pswd == "admin123") {
            $location.path("/home");
        }
        else {
            alert("Login Failed please try again.");
        }
    };

});