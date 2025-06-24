/*
  Warnings:

  - The primary key for the `Agendamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Agendamento` table. All the data in the column will be lost.
  - You are about to alter the column `codigoAgendamento` on the `Agendamento` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agendamento" (
    "codigoAgendamento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "cliente" TEXT NOT NULL,
    "barbeiro" TEXT NOT NULL
);
INSERT INTO "new_Agendamento" ("barbeiro", "cliente", "codigoAgendamento", "data") SELECT "barbeiro", "cliente", "codigoAgendamento", "data" FROM "Agendamento";
DROP TABLE "Agendamento";
ALTER TABLE "new_Agendamento" RENAME TO "Agendamento";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
