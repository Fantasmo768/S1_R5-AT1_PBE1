const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post("/login", (req, res)=>{
    
    try {
        const {usuario, senha} = req.body; //Constantes de usuário e senha

        //Usuário e senha fictícios
        const usuarioCorreto = "João";
        const senhaCorreta = 1234;
    
        //Checando se os valores são iguais
        if (usuario == usuarioCorreto && senha == senhaCorreta) {
            return res.status(200).json({mensagem:"Bem vindo ao sistema"})
        } else { //Se não são iguais retorna erro
            return res.status(401).json({mensagem:"Você não tem acesso a essa conta"})
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error });
    }

});

app.listen(PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});