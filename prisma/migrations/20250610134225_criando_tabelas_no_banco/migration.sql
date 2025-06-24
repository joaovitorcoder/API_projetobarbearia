-- CreateTable
CREATE TABLE "Agendamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigoAgendamento" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "cliente" TEXT NOT NULL,
    "barbeiro" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Agendamento_codigoAgendamento_key" ON "Agendamento"("codigoAgendamento");
