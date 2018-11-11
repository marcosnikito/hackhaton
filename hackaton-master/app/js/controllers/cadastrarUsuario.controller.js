        angular.module("pokemonApp")
        .controller("cadastrarUsuarioController", cadastrarUsuarioController);

        cadastrarUsuarioController.$inject = ['$scope', "$rootScope", "$location", "usuarioService"];

        function cadastrarUsuarioController($scope, $rootScope, $location, usuarioService) {
            $scope.contadorId = 0;
            $scope.service = usuarioService;
            
            $scope.cadatarUsuario = function(usuarioCadastro) {
                console.log(usuarioCadastro);
                    var usuarioCadastrado = $scope.service.listaUsuario.filter(function(usuarioItem) {
                        if (usuarioItem.usuario === usuarioCadastro.usuario) {
                            return usuarioItem;
                        }

                    });
                    console.log(usuarioCadastrado);
                    if (!usuarioCadastrado.length) {
                        console.log("usuario nao cadastrado, inserindo...");
                        usuarioCadastro.idUser = ++$scope.contadorId;
                        usuarioService.listaUsuario.push(angular.copy(usuarioCadastro));
                        console.log(usuarioService.listaUsuario);
                        usuarioService.usuario = usuarioCadastro;
                        $location.path("/listar");
                    }else{
                        $location.path("/cadastrar");
                    }
                    
                
            };

        }