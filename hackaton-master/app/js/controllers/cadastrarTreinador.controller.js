angular.module("pokemonApp")
        .controller("cadastrarTreinadorController", cadastrarTreinadorController);

        cadastrarTreinadorController.$inject = ['$scope', "$rootScope", "$location", "pokemonService", "treinadorService"];

        function cadastrarTreinadorController($scope, $rootScope, $location, pokemonService, treinadorService) {
            var self = this;
            self.contadorId = 1;
            self.pokemonService = pokemonService;
            self.treinadorService = treinadorService;
            self.treinador = null;
            self.isEdit = false;
            self.isEditar = function(){
                if($rootScope.treinador){
                    self.treinador = $rootScope.treinador;
                    self.isEdit = true;
                }
            }
            self.inserir = function(treinador){
                if(self.isEdit){
                    self.service.alterar(treinador)
                    .then(function(response) {
                        console.log(response.data);
                        
                    }, function(error) {
                        console.log(error);
                    });
                }else{
                    self.service.inserir(treinador)
                    .then(function(response) {
                        console.log(response.data);
                        
                    }, function(error) {
                        console.log(error);
                    });
                }
                self.treinador = {};
                $rootScope.treinador = {};
                self.treinadorService.treinador = {};
                $location.path("/treinador/listar");
            };
        }