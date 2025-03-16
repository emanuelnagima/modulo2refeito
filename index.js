import Usuario from "./modelo/usuario.js";
var usuario = new Usuario(  "Emanuel",
                            "emanuel.n.nagima@gmail.com",
                            "e12345",
                            "1898119706",
);

//gravar usuario no banco de dados
usuario.gravar().then(()=> {
    console.log("usuario gravado com sucesso!");

}).catch((erro) => {
    console.log("Erro ao gravar o cliente"+ erro);

});