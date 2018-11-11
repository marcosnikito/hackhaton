angular.module("pokemonApp", ["ngRoute"])
    .config(config)
    .run(run);

run.$inject = ["$rootScope", "$location", "usuarioService"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
    $routeProvider.
    when("/login", {
        templateUrl: "/app/pages/login.html",
        controller: "loginController"
    }).
    when("/listar", {
        templateUrl: "/app/pages/listar.html"
    }).
    when("/cadastrar", {
        templateUrl: "/app/pages/cadastrar.html",
        controller: "cadastrarPokemonController as vm"
    }).
    when("/cadastrarUsuario", {
        templateUrl: "/app/pages/cadastrarUsuario.html",
        controller: "cadastrarUsuarioController as vm"
    })
    .
    when("/listarUsuario", {
        templateUrl: "/app/pages/listarUsuarios.html",
        controller: "listarUsuariosController as vm"
    })
    .otherwise({
        redirectTo: "/login"
    }); 

}

function run($rootScope, $location, usuarioService) {
    $rootScope.$on("$routeChangeStart", function(evt, route) {
        if (route.originalPath !== "/login" && route.originalPath !== "/cadastrarUsuario") {
            if (!usuarioService.usuario) {
                $location.path("/login");
                console.log("sessao null");
            }else{
                console.log("app.runn");
            }
        }
    });
}