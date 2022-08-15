/*
  Warnings:

  - You are about to drop the column `meetingTime` on the `meeting` table. All the data in the column will be lost.
  - Added the required column `meetingTimeEnd` to the `meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meetingTimeStart` to the `meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `educationLevel` to the `mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImage` to the `mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speciality` to the `mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `university` to the `mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meeting" DROP COLUMN "meetingTime",
ADD COLUMN     "meetingTimeEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "meetingTimeStart" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "mentor" ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "educationLevel" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT NOT NULL,
ADD COLUMN     "speciality" TEXT NOT NULL,
ADD COLUMN     "university" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "student" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "studentsandmentors" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "insightsforstudents" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "communication" INTEGER NOT NULL,
    "criticalThinking" INTEGER NOT NULL,
    "direction" INTEGER NOT NULL,
    "empathy" INTEGER NOT NULL,
    "growthMindset" INTEGER NOT NULL,
    "perseverance" INTEGER NOT NULL,
    "resilience" INTEGER NOT NULL,
    "selfAwareness" INTEGER NOT NULL,
    "timeManagement" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "insightsforstudents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentornote" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "mentornote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resource" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "timeToCompleteInMinutes" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resourcesforstudentsandmentors" (
    "id" SERIAL NOT NULL,
    "assigned" BOOLEAN NOT NULL DEFAULT true,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saved" BOOLEAN NOT NULL DEFAULT false,
    "mentorId" INTEGER,
    "resourceId" INTEGER NOT NULL,
    "studentId" INTEGER,

    CONSTRAINT "resourcesforstudentsandmentors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "timeToCompleteInMinutes" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizanswers" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "quizId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "quizanswers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "insightsforstudents" ADD CONSTRAINT "insightsforstudents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentornote" ADD CONSTRAINT "mentornote_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentornote" ADD CONSTRAINT "mentornote_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resourcesforstudentsandmentors" ADD CONSTRAINT "resourcesforstudentsandmentors_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resourcesforstudentsandmentors" ADD CONSTRAINT "resourcesforstudentsandmentors_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resourcesforstudentsandmentors" ADD CONSTRAINT "resourcesforstudentsandmentors_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizanswers" ADD CONSTRAINT "quizanswers_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizanswers" ADD CONSTRAINT "quizanswers_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
