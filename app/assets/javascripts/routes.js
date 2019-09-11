angular
  .module('myApp')
  .config(function($stateProvider,$urlRouterProvider,$httpProvider){
      $stateProvider
      .state('homeAdmin',{
          url: '/homeAdmin',
          templateUrl: 'views/Admin/home.html',
          controller: 'HomeCtrlAdmin'
      })
      .state('homeEmployee',{
        url: '/homeEmployee',
        templateUrl: 'views/Employee/home.html',
        controller: 'HomeCtrlEmployee'
    })

      .state('login',{
        url: '/login',
        templateUrl: 'views/Auth/login.html',
        controller: 'AuthCtrl'
      })
     
     .state('register',{
        url: '/register',
        templateUrl: 'views/Admin/register.html',
        controller: 'AuthCtrl'
    })
    .state('profil',{
      url: '/profil',
      templateUrl: 'views/Admin/profil.html',
      controller: 'HomeCtrlAdmin'
  })
  .state('profile',{
    url: '/profile',
    templateUrl: 'views/Employee/profil.html',
    controller: 'HomeCtrlEmployee'
})
  .state('employees',{
    url: '/employees',
    templateUrl: 'views/Admin/list_employees.html',
    controller: 'HomeCtrlAdmin'
})
.state('DemandeConge',{
  url: '/DemandeConge',
  templateUrl: 'views/Employee/demande.html',
  controller: 'HomeCtrlEmployee'
})
.state('Demands',{
  url: '/Demands',
  templateUrl: 'views/Admin/list_demands.html',
  controller: 'HomeCtrlAdmin'
})
.state('Reponse',{
  url: '/Reponse',
  templateUrl: 'views/Employee/reponse.html',
  controller: 'HomeCtrlEmployee'
})
.state('histo',{
  url: '/histo',
  templateUrl: 'views/Admin/historique.html',
  controller: 'HomeCtrlAdmin'
})

    $urlRouterProvider.otherwise('/login')

  })