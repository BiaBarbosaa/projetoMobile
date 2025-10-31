const executeQuery = require('../services/query');
const modelSenai = {

    //Registrar
    cadastrar: async (nome, idade, nif, setor) => {
        try {

            const result = await executeQuery(
                "INSERT INTO  cadastrar_colaboradores (nome, idade, nif, setor) VALUES (?, ?, ?, ?)",
                [nome, idade, nif, setor]
            );

            return result;

        } catch (error) {
            throw error;
        }
    },

    //Obter NIF
    consultarNIF: async (nif) => {

        const result = await executeQuery("SELECT * FROM  cadastrar_colaboradores WHERE nif = ?", [nif]);
        return result;
    },

    //Listar
    listar: async () => {

        try {

            const result = await executeQuery("SELECT id, nome, idade, nif, setor FROM cadastrar_colaboradores")
            return result;
        }
        catch (error) {
            throw error;
        }
    },

    //Listar usuário por ID
    listarPorID: async (id) => {
        return await executeQuery('SELECT id FROM cadastrar_colaboradores WHERE id=?', [id]);
    },

    //Atualizar
    atualizar: async (nome, idade, setor, id) => {
        try {
            const result = await executeQuery("UPDATE cadastrar_colaboradores SET  nome=?, idade=?, setor=? WHERE id=?",
                [nome, idade, setor, id])
            return result;
        } catch (error) {
            throw error;
        }
    },

    //Deletar
    deletar: async (id) => {
        const result = await executeQuery("DELETE FROM cadastrar_colaboradores WHERE id=?", [id])
        return result;

    },
};

module.exports = modelSenai;
