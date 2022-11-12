const router = require('express').Router()
const { rawListeners } = require('../models/itensToDoList')
const toDoItensModel = require('../models/itensToDoList')

// adicionar novo item na lista
router.post('/api/item', async (req, res) => {
    try
    {
        const novoItem = new toDoItensModel(
            {
                item: req.body.item
            }
        )
        const salvarItem = await novoItem.save()
        res.status(200).json('Item adicionado com sucesso =)')
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
        const atualizarItem = await toDoItensModel.findByIdAndUpdate(req.params.id, {$set: rawListeners.body})
        req.status(200).json('Item atualizado!')
        res.status(200).json(todosItens)
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
        res.status(200).json(todosItens)
    }
    catch(err)
    {
        res.json(err)
    }
})

module.exports = router