const executeQuery = require('../services/query');
const modelSenai = {

    //Registrar
    cadastrar: async (nome, tempo_preparo, ingredientes, modo_preparo) => {
        try {

            const result = await executeQuery(
                "INSERT INTO  receita (nome, tempo_preparo, ingredientes, modo_preparo) VALUES (?, ?, ?, ?)",
                [nome, tempo_preparo, ingredientes, modo_preparo]
            );

            return result;

        } catch (error) {
            throw error;
        }
    },

    
    

    //Listar
    listar: async () => {

        try {

            const result = await executeQuery("SELECT id,nome, tempo_preparo, ingredientes, modo_preparo FROM receita")
            return result;
        }
        catch (error) {
            throw error;
        }
    },

    //Listar usuário por ID
    listarPorID: async (id) => {
        return await executeQuery('SELECT id FROM receita WHERE id=?', [id]);
    },

    //Atualizar
    atualizar: async (nome, tempo_preparo, ingredientes, modo_preparo, id) => {
        try {
            const result = await executeQuery("UPDATE receita SET  nome=?, tempo_preparo=?, ingredientes=?, modo_preparo=? WHERE id=?",
                [nome, tempo_preparo, ingredientes, modo_preparo,id])
            return result;
        } catch (error) {
            throw error;
        }
    },

    //Deletar
    deletar: async (id) => {
        const result = await executeQuery("DELETE FROM receita WHERE id=?", [id])
        return result;

    },
};

module.exports = modelSenai;
