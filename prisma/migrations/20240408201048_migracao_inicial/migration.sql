-- CreateTable
CREATE TABLE `Senha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoSenha` ENUM('SG', 'SP', 'SE') NOT NULL,
    `dataHoraEmissao` DATETIME(3) NOT NULL,
    `dataHoraAtendimento` DATETIME(3) NULL,
    `statusAtendimento` ENUM('NA_FILA', 'EM_ANDAMENTO', 'ATENDIDO') NOT NULL DEFAULT 'NA_FILA',
    `guicheId` INTEGER NULL,
    `relatorioId` INTEGER NULL,
    `painelId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Painel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dia` INTEGER NOT NULL,
    `mes` INTEGER NOT NULL,
    `ano` YEAR NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relatorio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataRelatorio` DATETIME(3) NOT NULL,
    `tempoMedioAtendimentoSP` TIME(3) NOT NULL,
    `tempoMedioAtendimentoSG` TIME(3) NOT NULL,
    `tempoMedioAtendimentoSE` TIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guiche` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `statusDisponibilidade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Senha` ADD CONSTRAINT `Senha_guicheId_fkey` FOREIGN KEY (`guicheId`) REFERENCES `Guiche`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Senha` ADD CONSTRAINT `Senha_relatorioId_fkey` FOREIGN KEY (`relatorioId`) REFERENCES `Relatorio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Senha` ADD CONSTRAINT `Senha_painelId_fkey` FOREIGN KEY (`painelId`) REFERENCES `Painel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
