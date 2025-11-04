const express = require('express');
const router = express.Router();
const controllerSenai = require('../controllers/controllerSenai');

// cadastrar receita
router.post('/cadastrar', controllerSenai.registrarReceita);

// listar receita
router.get('/listar', controllerSenai.listarReceita);

// atualizar receita
router.put('/atualizar/:id', controllerSenai.atualizar);

//  deletar receita
router.delete('/deletar/:id', controllerSenai.deletar);

module.exports = router;
