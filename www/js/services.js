// Alertas

starter.service('Alerta', function($ionicPopup){
    
    // Alerta padrao
    var _alert = function(message){
            $ionicPopup.alert({
              title: 'Meelists',
              content: message
            });
    };
    
    // Mensagem de Erro
    var _erro = function(message){
            $ionicPopup.alert({
              title: 'Meelists',
              content: message,
              buttons: [{
                  text: '<b>OK</b>',
                  type: 'button-assertive',
              }]
            });
    };

    return {
        Alerta:_alert,
        Erro: _erro
    };
    
});

// Loading
starter.service('Loading', function($ionicLoading){
    
    // Alerta padrao
    var _show = function(){
             $ionicLoading.show({
                template: 'Loading...'
            });
    };
    
    var _release = function(){
             $ionicLoading.hide();
    };


    return {
        Show:_show,
        Release: _release
    };
    
});

// Usuário
starter.service('UserServices', function($http, $q){
    
    var _login = function(data, success, error){
        var request = $http({
                        method: "post",
                       // url: "http://localhost:62982/",
                       url: "http://rekool-api.azurewebsites.net/api/users/Login",
                        data: data
                    });
         return( request.then( success, error ) );
    };
    
    var _validateUser = function(){
        
        var user = localStorage.getItem("user");
        if( user == undefined ){
            return false;
        }
        else {
            return true;
        }
    };
    
    return {
        Login: _login,
        ValidateUser: _validateUser
    };
});