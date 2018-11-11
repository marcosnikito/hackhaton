angular.module("pokemonApp")
    .factory("treinadorService", treinadorService);

    treinadorService.$inject = ["pokemonService", "constantes"];

    function treinadorService(pokemonService) {
        var _treinador = null;
        
        var _listaTreinadores = 
            [{id: 1, nome: "João da Silva", listaPokemons: angular.copy(pokemonService.listaPokemons)}];
        
        return {
            listarTrenadores: function(){
                return $http.get(constantes.baseUrl + "/treinador");
            },
            incluir: function(treinador){
                return http.post(constantes.baseUrl+ "/treinador", treinador);
            },
            excluir: function(id){
                return http.delete(constantes.baseUrl+ "/treinador"+id);
            },
            alterar: function(treinador){
                return http.put(constantes.baseUrl+ "/treinador", treinador);
            }
        };
    }