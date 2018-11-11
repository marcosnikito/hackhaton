angular.module("pokemonApp")
        .controller("listarTreinadorController", listarTreinadorController);

    listarTreinadorController.$inject = ['$scope', "$rootScope", "$location", "treinadorService"];

    function listarTreinadorController($scope, $rootScope, $location, treinadorService) {
        var self = this;
        self.treinadorService = treinadorService;


        self.irTelaCadastrar = function() {
            $location.path("/treinador/cadastrar");
        };

        self.editar = function(treinador) {
                $rootScope.treinadorEdit = treinador;
                self.irTelaCadastrar();
        };

        self.excluir = function(index) {
             self.treinadorService.excluir(treinador.id).then(function(respose){
                $rootScope.treinadorEdit = treinador;
                self.irTelaCadastrar();
            }, function(error){
                alert("erro ao exluir treinador");
            });
        };
    }