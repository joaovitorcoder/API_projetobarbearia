
const express = require('express');
const app = express();
const port = 3000;
const usuarioRoutes = require('./routes/usuario.routes')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

app.use(express.json())

app.use('/usuario', usuarioRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`)
});

