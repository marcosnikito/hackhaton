angular.module("pokemonApp")
        .controller("loginController", loginController);

        loginController.$inject = ['$scope', "$rootScope", "$location", "pokemonService"];

        function loginController($scope, $rootScope, $location, pokemonService) {
            $scope.logar = function(usuario) {
                if (usuario.nome === 'a' && usuario.senha === 'a') {
                    $rootScope.usuario = usuario;
                    $location.path("/home");
                }
            };
        }