/*
  Warnings:

  - You are about to drop the column `painelId` on the `senha` table. All the data in the column will be lost.
  - Added the required column `senhaId` to the `Painel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `senha` DROP FOREIGN KEY `Senha_painelId_fkey`;

-- AlterTable
ALTER TABLE `painel` ADD COLUMN `senhaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `senha` DROP COLUMN `painelId`;

-- AddForeignKey
ALTER TABLE `Painel` ADD CONSTRAINT `Painel_senhaId_fkey` FOREIGN KEY (`senhaId`) REFERENCES `Senha`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
