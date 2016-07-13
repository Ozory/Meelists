var starter = angular.module('starter', ['ionic', 'firebase'])

starter.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
starter.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "pages/login.html"
    })
    .state('cadastro', {
      url: "/cadastro",
      templateUrl: "pages/cadastro.html"
    })
    .state('tab', {
      abstract: true,
      url: "/tab",
      templateUrl: "pages/tab.html"
    })
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'pages/tabs/home.html',
          controller: 'homeController'
        }
      }
    })
    .state('tab.conta', {
      url: '/conta',
      views: {
        'tab-conta': {
          templateUrl: 'pages/tabs/conta.html',
          controller: 'contaController'
        }
      }
    });


  $urlRouterProvider.otherwise("/login");

});



starter.controller('loginController', function ($scope, $window, $firebaseAuth, Alerta, UserServices, Loading) {
  $scope.Logar = function () {
    var auth = $firebaseAuth();

  // login with Facebook
  auth.$signInWithRedirect("facebook").then(function(firebaseUser) {
    alert("Signed in as:");
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });

  auth.$onAuthStateChanged(function(authData) {
  if (authData === null) {
    console.log("Not logged in yet");
  } else {
    console.log("Logged in as", authData.uid);
  }
  $scope.authData = authData; // This will display the user's name in our view
});

    
  };
});

starter.controller('cadastroController', function ($scope, Alerta) {

});

starter.controller('homeController', function ($scope, Alerta) {

});

starter.controller('contaController', function ($scope, Alerta) {

});