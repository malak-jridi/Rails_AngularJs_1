angular
 .module("myApp")
 .controller('HomeCtrlAdmin', function($location,$scope, $rootScope, Auth,$http,employeeService){
  
   //Welcome Message 
    $scope.hello="Hello Admin";

    $scope.accept=function(id){
      var data = {'etat': 'treated'};
      $http.put('http://localhost:3000/addMotifR/' + id, data).then(function (response) {
      
      if (response.data)
            console.log("etat treated");
                  
      
      }, function (response) {
      
      $scope.msg = "Service not Exists";
      
      $scope.statusval = response.status;
      
      $scope.statustext = response.statusText;
      
      $scope.headers = response.headers();
      
      });
      

    }
    $scope.refus=function(id,reason_refuse){
      debugger
      $http.get('http://localhost:3000/getCongeById/'+id).success(function(res){
        $scope.conge=res;
        console.log(res);
      debugger
           var data= {'reason_refuse': reason_refuse,'etat': 'treated'};
           $http.put('http://localhost:3000/addMotifR/' + res.data.id, data).then(function (response) {
         debugger
      if (response.data)
            console.log("Comment added");
            
      
      }, function (response) {
      
      $scope.msg = "Service not Exists";
      
      $scope.statusval = response.status;
      
      $scope.statustext = response.statusText;
      
      $scope.headers = response.headers();
      
      });
      
    })
    }
  


    //suppression d'un employé
    $scope.getEmployee=function(id){
      $http.get('http://localhost:3000/getEmployeeBYId/'+id).success(function(res){
        $scope.employee=res;
        console.log(res);
       var r= confirm("etes vous sur de supprimer cet employé?");
          if(r){
           $http.delete('http://localhost:3000/employees/'+res.id).then(function (response) {

           if (response.data){
        
            console.log("Data Deleted Successfully!");
            $scope.msg = "Data Deleted Successfully!";
           } });
          }else{
            console.log("not deleted");
            $scope.msg="Employee not deleted";
          }
    })
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




   //liste des employees
    $http.get("http://localhost:3000/employees").success(function (response) {
        $scope.employees = response;
    });
    
    //liste des demandes envoyés par les employés
    $http.get("http://localhost:3000/demands").success(function(res){
      console.log(res);

       $scope.demands = res.data;

    });


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
          $scope.name='';$scope.username='';$scope.email='';$scope.password='';
          $scope.showMsg=true;
         $window.log('employees');
      },function (error){
          console.log(error, 'can not save employee !.');
      });
  };


 });