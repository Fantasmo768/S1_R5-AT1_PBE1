const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post("/soma", (req, res) => {

    try {
        
        //Constantes do body
        const { numUm, numDois, numTres } = req.body;

        //Transformando as constantes em números
        let numUmNumero = parseFloat(numUm);
        let numDoisNumero = parseFloat(numDois)
        let numTresNumero = parseFloat(numTres);

        //Soma dos 3 números
        let soma = numUmNumero + numDoisNumero + numTresNumero;


        //Checando se algum valor não é um número
        if (isNaN(numUmNumero) || isNaN(numDoisNumero) || isNaN(numTresNumero)) {
            return res.status(400).json({ message: "Insira apenas valores numéricos" });
        }

        //Retornando o valor da soma
        return res.status(201).json({ mensagem: `O resultado é: ${soma}`});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});