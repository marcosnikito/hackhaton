        angular.module("pokemonApp")
        .controller("listarUsuariosController", listarUsuariosController);

        listarUsuariosController.$inject = ['$scope', "$rootScope", "$location", "usuarioService"];

        function listarUsuariosController($scope, $rootScope, $location, usuarioService) {
            $scope.service = usuarioService;

            $scope.listaUsuarios = $scope.service.listaUsuario;
            $scope.listaUsuariosPokemons = $scope.service.listaUsuariosPokemons;
            $scope.irLobby = function() {
                $location.path("/listar");
            };
            
        }