const modelSenai = require('../models/modelSenai');

const controllerSenai = {

    // registrar
    registrarReceita: async (req, res) => {
        const { nome, tempo_preparo, ingredientes, modo_preparo } = req.body;
    
        try {
            const resultado = await modelSenai.cadastrar(nome, tempo_preparo, ingredientes, modo_preparo);
    
            if (resultado.affectedRows > 0) {
                res.status(201).json({ msg: "Receita cadastrada com sucesso" });
            } else {
                res.status(400).json({ msg: "Falha ao realizar o cadastro" });
            }
        } catch (erro) {
            console.error('Erro ao cadastrar receita:', erro);
            res.status(500).json({ error: 'Erro ao tentar cadastrar receita' });
        }
    },

    //listar
    listarReceita: async (req, res) => {
        try {
            const receita = await modelSenai.listar();
            res.status(200).json(receita);
        }
        catch (erro) {
            res.status(500).json({ error: "Erro ao obter a lista de colaboradores" });
        }
    },

    // atualizar
    atualizar: async (req, res) => {
        const { nome, tempo_preparo, ingredientes, modo_preparo} = req.body;

        try {
            const consulta = await modelSenai.listarPorID(req.params.id);

            if (consulta.length > 0) {
                await modelSenai.atualizar(nome, tempo_preparo, ingredientes, modo_preparo, req.params.id);
                res.status(200).json({ msg: "Dados atualizados com sucesso!!!" });
            }
            else {
                res.status(404).json({ msg: `O ID ${req.params.id} não existe na base de dados` })
            }
        }
        catch (erro) {
            res.status(500).json({ error: 'Erro ao tentar atualizar' });
        }
    },

    //deletar
    deletar: async (req, res) => {
        try {

            const consulta = await modelSenai.listarPorID(req.params.id)

            if (consulta.length > 0) {

                const resultado = await modelSenai.deletar(req.params.id);

                if (resultado.affectedRows > 0) {
                    res.status(204).end()
                }
                else {
                    res.status(404).json({ msg: "Erro ao deletar o usuário" })
                }
            }
            else {
                res.status(404).json({ msg: "O ID não existe na base de dados" })
            }
        }
        catch (erro) {
            console.log(erro)
            res.status(500).json({ error: 'Erro ao tentar deletar' });
        }
    },
};

module.exports = controllerSenai;

