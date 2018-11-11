        angular.module("pokemonApp")
        .controller("listarPokemonController", listarPokemonController);

        listarPokemonController.$inject = ['$scope', "$rootScope", "$location", "pokemonService","usuarioService"];

        function listarPokemonController($scope, $rootScope, $location, pokemonService, usuarioService) {
            $scope.service = pokemonService;
            $scope.pokemonsUsuario = null;
            $scope.pokemonsUsuarioFunc = function(){  
            $scope.pokemonsUsuario = usuarioService.listaUsuariosPokemons.filter(function(pokemonItem){
                if(usuarioService.usuario.idUser == pokemonItem.treinador){
                    return pokemonItem;
                }
            });
            };
            $scope.pokemonsUsuarioFunc();
            console.log($scope.pokemonsUsuario);
            $scope.mensagemPokemon = null;
            $scope.irTelaCadastrar = function() {
                $location.path("/cadastrar");
            };

            $scope.editar = function(pokemon) {
                $scope.service.pokemon = pokemon;
                $scope.irTelaCadastrar();
            };

            $scope.excluir = function(index) {
                $scope.service.listaPokemons.splice(index, 1);
            };
            $scope.capturar = function(pokemon){
                var pokemonCapturado = pokemon;
                pokemonCapturado.treinador = usuarioService.usuario.idUser;
                console.log(pokemonCapturado);
                if(pokemon){
                    var pokemonCap = usuarioService.listaUsuariosPokemons.filter(function(pokemonItem) {
                        if (pokemonItem.nome === pokemon.nome && pokemonItem.treinador === pokemon.treinador) {
                                return pokemonItem;                            
                        }
                    });
                    
                    if(pokemonCap.length){
                        $scope.pokemonsUsuarioFunc();
                        $scope.mensagemPokemon = "Voce Ja capturou este pokemon, tente outro!";
                    }else{                        
                        usuarioService.listaUsuariosPokemons.push(pokemonCapturado);
                        $scope.mensagemPokemon = pokemon.nome+" capturado com sucesso!";
                        $scope.pokemonsUsuarioFunc();
                    }
                }  
            };
            $scope.irTelaListarUsuarios = function(){
                $location.path("/listarUsuario");
            };
            
        }