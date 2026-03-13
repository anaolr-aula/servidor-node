const bd = require("../Repository/bd.json");

class UsuarioService {

    buscar(){
        return bd;
    }

    adicionar(usuario){
        bd.push(usuario);
        return bd;
    }

    calcular(valor){
        return valor * valor;
    }

}

module.exports = new UsuarioService();