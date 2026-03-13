const app = require("../controller/controller");

const PORT = 3055;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});