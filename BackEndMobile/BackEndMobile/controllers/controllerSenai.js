const modelSenai = require('../models/modelSenai');

const controllerSenai = {

    // registrar
    registrarColaborador: async (req, res) => {
        const { nome, idade, nif, setor } = req.body;

        try {
            const nifExistente = await modelSenai.consultarNIF(nif);

            console.log(nifExistente);

            if (nifExistente.length > 0) {
                return res.status(400).json({ msg: "NIF já está cadastrado!" });
            }
            else {
                const resultado = await modelSenai.cadastrar(nome, idade, nif, setor);

                if (resultado.affectedRows > 0) {
                    res.status(201).json({ msg: "Colaborador cadastrado com sucesso" });
                }
                else {
                    res.status(400).json({ msg: "Falha ao realizar o cadastro" });
                }
            }
        }
        catch (erro) {
            console.error(erro);
            res.status(500).json({ error: 'Erro ao tentar cadastrar' });
        }
    },

    //listar
    listarSenai: async (req, res) => {
        try {
            const colaboradores = await modelSenai.listar();
            res.status(200).json(colaboradores);
        }
        catch (erro) {
            res.status(500).json({ error: "Erro ao obter a lista de colaboradores" });
        }
    },

    // atualizar
    atualizar: async (req, res) => {
        const { nome, idade, setor } = req.body;

        try {
            const consulta = await modelSenai.listarPorID(req.params.id);

            if (consulta.length > 0) {
                await modelSenai.atualizar(nome, idade, setor, req.params.id);
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
            res.status(500).json({ error: 'Erro ao tentar deletar' });
        }
    },
};

module.exports = controllerSenai;

