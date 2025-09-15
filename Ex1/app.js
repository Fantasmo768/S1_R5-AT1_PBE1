const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post("/mensagem", (req, res)=>{

    try {
        const {nome, idade, time} = req.body;

        //Checagem de valores inseridos de maneira incorreta
        if (nome == undefined || idade == undefined || time == undefined || isNaN(idade)){
            return res.status(400).json({mensagem:`Você não inseriu algum valor, ou não colocou um número na idade`});
        }
        
        //Retornando a mensagem
        return res.status(201).json({mensagem: `Olá ${nome}! Você tem ${idade} e torce para o ${time}`});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error });
    }

});

app.listen(PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});