/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `heureRdv` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "createdAt",
DROP COLUMN "heureRdv",
ALTER COLUMN "motifConsultation" DROP NOT NULL;
