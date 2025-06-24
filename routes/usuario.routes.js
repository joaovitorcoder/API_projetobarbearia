const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



router.post('/', async (req, res) => {
  const { cod_usuario, nome, cpf, rg, numeroDeTel, senha_usuario } = req.body;
  try {
    const novousuario = await prisma.usuario.create({
      data: {
        cod_usuario,
        nome,
        cpf,
        rg,
        numeroDeTel,
        senha_usuario
      }
    });
    res.status(201).json(novousuario);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar usuario', detalhe: err.message });
  }
})
//Buscar pelo id
router.get('/:id', async (req, res) => {
  const cod_usuario = Number(req.params.id)
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { cod_usuario: cod_usuario }
    })
    res.json(usuario)
  } catch (error) {
    res.status(500).json({
      erro: 'erro ao buscar o usuario',
      detalhe: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany()
    res.json(usuarios)
  } catch (error) {
    res.status(500).json({ error: 'erro ao buscar os usuarios', detalhe: error.message })
  }
})


router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { cod_usuario, nome, cpf, rg, numeroDeTel, senha_usuario } = req.body
    const usuarioAtualizado = await prisma.usuario.update({
      where: { cod_usuario: Number(id) },
      data: {
        nome,
        cpf,
        rg,
        numeroDeTel,
        senha_usuario
      }
    })
    res.json(usuarioAtualizado)
  } catch (error) {
    res.status(500).json({
      error: 'erro ao atualizar o usuario',
      detalhe: error.message
    })
  }
})


router.delete('/:id', async (req, res) => {
  const cod_usuario = Number(req.params.id)
  try {
    const usuario = await prisma.usuario.delete({
      where: { cod_usuario }
    })
    res.json({ mensagem: 'Usuario deletado', usuario })
  } catch (err) {
    res.status(404).json({ erro: 'Usuario não encontrado', detalhe: err.message })
  }
})

module.exports = router