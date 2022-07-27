/*
  Warnings:

  - You are about to drop the column `mentorId` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `message` table. All the data in the column will be lost.
  - Added the required column `receiverId` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_studentId_fkey";

-- AlterTable
ALTER TABLE "message" DROP COLUMN "mentorId",
DROP COLUMN "studentId",
ADD COLUMN     "receiverId" INTEGER NOT NULL,
ADD COLUMN     "senderId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "messagesbetweenstudentsandmentors" (
    "messageId" INTEGER NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "messagesbetweenstudentsandmentors_pkey" PRIMARY KEY ("messageId")
);

-- AddForeignKey
ALTER TABLE "messagesbetweenstudentsandmentors" ADD CONSTRAINT "messagesbetweenstudentsandmentors_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messagesbetweenstudentsandmentors" ADD CONSTRAINT "messagesbetweenstudentsandmentors_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messagesbetweenstudentsandmentors" ADD CONSTRAINT "messagesbetweenstudentsandmentors_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
