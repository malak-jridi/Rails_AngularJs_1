angular
 .module("myApp")

 .controller('HomeCtrlEmployee', function($http,$scope, $rootScope, Auth,employeeService,$window,$state){
    $scope.hello="Hello Employee";

    $scope.showMsgValid = false
    $scope.showMsgError = false

$scope.takeme= function(id){
       $http.get("http://localhost:3000/GetUserConges/"+id).success(function(res){
           $scope.responses=res.data;
           console.log(res);
       });
    }  
   



    $scope.putdata = function (id,username, email, password) {

        var data = {'username':username,'email':email, 'password':password};
        
        //Call the services
        
        $http.put('http://localhost:3000/updateUser/' + id, data).then(function (response) {
        
        if (response.data)
              console.log("Put Data Method Executed Successfully!");
              
        
        }, function (response) {
        
        $scope.msg = "Service not Exists";
        
        $scope.statusval = response.status;
        
        $scope.statustext = response.statusText;
        
        $scope.headers = response.headers();
        
        });
        
        };
    
  
      $scope.sendDemande=function(){
        $scope.showMsg=false;
        if(angular.isUndefined($scope.dateF) || $scope.dateF === null)return;
        var Indata = {'user_id':$scope.user.id,'date_from':$scope.dateD,'date_to':$scope.dateF, 'reason_request':$scope.motifAb}
        $http({
            method: 'post',
            url: 'http://localhost:3000/saveDemand',
            headers: {'Content-Type': 'application/json'},
            params: Indata
        }).then(function (response) {
            console.log(response, 'Post !');
            $scope.dateF='';$scope.dateD='';$scope.motifAb='';
            $scope.showMsg=true;
            angular.element('#BtnDemandeCongeModal').modal('hide');

        },function (error){
            console.log(error, 'can not save demand !.');
        });
    };


})