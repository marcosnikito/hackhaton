        angular.module("pokemonApp")
        .controller("loginController", loginController);

        loginController.$inject = ['$scope', "$rootScope", "$location", "usuarioService"];

        function loginController($scope, $rootScope, $location, usuarioService) {
            $scope.service = usuarioService;
            $scope.mensagemLogin = null;
            $scope.listaDeUsuarios = $scope.service.listaUsuario;
            $scope.logar = function(usuarioLogin){
                if(usuarioLogin){
                    var usuarioAtual = $scope.listaDeUsuarios.filter(function(usuario) {
                        if (usuario.usuario === usuarioLogin.usuario) {
                            if(usuario.senha === usuarioLogin.senha){
                                return usuario;
                            }else{
                                return null;
                            }
                        }
                    });
                    if(usuarioAtual.length >0){
                        usuarioService.usuario = usuarioAtual[0];  
                        $scope.mensagemLogin = "sucesso";
                        $location.path("/listar");
                    }else{
                        $scope.mensagemLogin = "Usuario/senha incorretos, Favor verificar dados e tentar novamente";
                        console.log("Falha");
                    }
                }                
            };

            $scope.irTelaCadastrarUsuario = function() {
                $location.path("/cadastrarUsuario");
            };
            
        }