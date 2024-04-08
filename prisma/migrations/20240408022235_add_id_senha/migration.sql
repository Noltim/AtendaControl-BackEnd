/*
  Warnings:

  - The primary key for the `senha` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `senha` table. All the data in the column will be lost.
  - Added the required column `id_senha` to the `Senha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `senha` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_senha` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_senha`);
