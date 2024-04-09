/*
  Warnings:

  - Added the required column `preferencia` to the `Painel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `painel` ADD COLUMN `preferencia` ENUM('SG', 'SP', 'SE') NOT NULL;
