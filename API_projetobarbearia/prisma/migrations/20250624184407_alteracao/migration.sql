/*
  Warnings:

  - You are about to drop the `Agendamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Agendamento";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Usuario" (
    "cod_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "numeroDeTel" TEXT NOT NULL,
    "senha_usuario" TEXT NOT NULL
);
