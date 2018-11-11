angular.module("pokemonApp")
    .factory("usuarioService", usuarioService);

    usuarioService.$inject = [];

    function usuarioService() {
        var _usuario = null;
        var _usuarios = [
        {idUser: 1, nome: "Marcos Henrique", usuario: "marcosnikito", senha: "123456"},
        {idUser: 2, nome: "Ash Ketchum", usuario: "ash123", senha: "123456"}
        ];
        var _pokemonsUsuario = [
        {nome: "Pikachu", tipo: {codigo: 1, descricao: "Raio"}, treinador: 1},
        {nome: "charmander", tipo: {codigo: 1, descricao: "fogo"}, treinador: 2}
        ];
        return {
            usuario: _usuario,
            listaUsuario: _usuarios,
            listaUsuariosPokemons: _pokemonsUsuario
        };
    }