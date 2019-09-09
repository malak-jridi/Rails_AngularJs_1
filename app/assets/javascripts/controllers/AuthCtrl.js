angular
 .module("myApp")
 .controller('AuthCtrl', function($scope, $rootScope, Auth, $state,$window,$http){
  var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

  $scope.isLogedIn = false;
  $scope.showLoginError = false;
    

  $scope.register = function (role ){
    Auth.register($scope.user,config).then(function(user){
        $rootScope.user = user;
        alert("Thanks for signing up, " +  user.username);
        $state.go('homeAdmin');
    },function(errorResponse){
         console.log('ERREUR: n est pas ajouté');
    });
  };
  $scope.addEmployee=function(){
    $scope.showMsg=false;
    var Indata = {'name':$scope.name,'username':$scope.username,'email':$scope.email, 'password':$scope.password, 'role': 'employee'}
    $http({
        method: 'post',
        url: 'http://localhost:3000/saveEmployee',
        headers: {'Content-Type': 'application/json'},
        data: Indata
    }).success(function (response) {
        console.log(response, 'good posted !');
        $scope.name='';$scope.username='';$scope.email='';
        $scope.showMsg=true;

    },function (error){
        console.log(error, 'can not save employee !.');
    });
};




    
 

  $scope.submit = function() {
    Auth.login($scope.user).then(function() {
       $http.get('/GetLoggedUserInfo').then(function(res) {
        console.log('res user json 1', res);
        $scope.user = res;
        if (res.data.data != null) {
          $window.localStorage.setItem("currentUser", angular.toJson(res.data.data));
          if (res.data.data.role === "employee") {
              alert("LOgin successful employee!!")
            $state.go('homeEmployee');
          } else {
            alert("LOgin successful admin!!")

             $state.go('homeAdmin');
          }
        }
      }, function(e) {
        $scope.showLoginError = true;
          console.log(e, ' User is not logged in');
      });
    }, function(error) {
      $scope.showLoginError = true;
         console.log(error);
         alert("mdp ou email incorrect");
    });
  };
  


 
  /*$scope.addEmployee=function(){
    
    $scope.showMsg=false;
    var Indata = {'name':$scope.name,'username':$scope.username,'email':$scope.email, 'password':$scope.password, 'role': 'employee'}
    
    Auth.register(Indata,config).then(function(user){
      $rootScope.user = user;
        alert("employee est bien ajouté" +  user.username);
    },function(errorResponse){
         console.log('ERREUR: n est pas ajouté');
      
    });
  
  };*/
})