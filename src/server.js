//Importar a instância do Express configurada em index.js
const app = require("./index");
//Inicia o servidor na porta 5000, neste caso a Api sera acessivel em http://localhost:5000/health/
app.listen(3000);

