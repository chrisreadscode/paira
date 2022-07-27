/*
  Warnings:

  - You are about to drop the column `test` on the `student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student" DROP COLUMN "test";

-- CreateTable
CREATE TABLE "mentor" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "why" TEXT NOT NULL,

    CONSTRAINT "parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentsandmentors" (
    "studentId" INTEGER NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentsandmentors_pkey" PRIMARY KEY ("mentorId","studentId")
);

-- CreateTable
CREATE TABLE "studentsandparents" (
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentsandparents_pkey" PRIMARY KEY ("studentId","parentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "mentor_email_key" ON "mentor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "parent_email_key" ON "parent"("email");

-- AddForeignKey
ALTER TABLE "studentsandmentors" ADD CONSTRAINT "studentsandmentors_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentsandmentors" ADD CONSTRAINT "studentsandmentors_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentsandparents" ADD CONSTRAINT "studentsandparents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentsandparents" ADD CONSTRAINT "studentsandparents_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
