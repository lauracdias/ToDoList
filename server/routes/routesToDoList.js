const router = require('express').Router()
const { rawListeners } = require('../models/itensToDoList')
const toDoItensModel = require('../models/itensToDoList')
const validate = require('validate.js');
const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const Constraints = require('../utils/item_validation');
const Validation = require('../utils/validation');

// adicionar novo item na lista
router.post('/api/item', async (req, res) => {
    try
    {   
        const novoItem = new toDoItensModel(
            {
                item: req.body.item
            }
        )

        const validation = Validation.create(novoItem);
        if (validation) {
            return validation;
        }

        const salvarItem = await novoItem.save()
        if (salvarItem.code === 400) {
            const result = Constants.ErrorValidation;
            return result;
        }
        res.status(200).json(salvarItem)
    }
    catch(err)
    {
        res.json(err)
    }
})

// obter todos os itens da lista
router.get('/api/items', async (req, res) => {
    try
    {
        const todosItens = await toDoItensModel.find({})
        res.status(200).json(todosItens)
    }
    catch(err)
    {
        res.json(err)
    }
})

// atualizar algum item da list
router.put('/api/item/:id', async (req, res) => {
    try
    {
        const itemAtualizado = new toDoItensModel(
            {
                item: req.body.item
            }
        )

        const validation = Validation.update(itemAtualizado);
        if (validation) {
            return validation;
        }
        const atualizarItem = await toDoItensModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        if (atualizarItem.code === 400) {
            const result = Constants.ErrorValidation;
            return result;
        }
        res.status(200).json(atualizarItem)
    }
    catch(err)
    {
        res.json(err)
    }
})

// deletar algum item da lista
// atualizar algum item da list
router.delete('/api/item/:id', async (req, res) => {
    try
    {
        const apagarItem = await toDoItensModel.findByIdAndDelete(req.params.id)
        req.status(200).json('Item deletado!')
        res.status(200).json(apagarItem)
    }
    catch(err)
    {
        res.json(err)
    }
})

module.exports = router