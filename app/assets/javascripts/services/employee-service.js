angular
 .module("myApp")

.service('employeeService', function($http) {


   this.sendDemande = function(id,d2,d1,motifAb){
        var Indata, headers;
        Indata = {
          'user_id': id,
          'date_debut': d2,
          'date_fin': d1,
          'motifAb': motifAb
        };
        headers = {
          'Content-Type': 'application/json'
        };
        $http.post('/saveDemand', Indata, headers).then(function(response) {
          var res;
          res = response.data.data;
          console.log(res);
        }, function(error) {
          console.log(error, 'can not save demand !.');
        });
      };

      this.getUserConges = function(id) {
        $http.get('/GetUserConges' + '/' + id).success(function(conges) {
          var res;
          res = conges.data.data;
        }, function(error) {
          console.log(error, 'Conges User not found');
        });
      };

});