/*
  Warnings:

  - Added the required column `howQuestion` to the `mentor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mentor" ADD COLUMN     "howQuestion" TEXT NOT NULL;
