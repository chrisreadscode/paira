-- CreateTable
CREATE TABLE "meeting" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meetingTime" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "meeting_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "meeting" ADD CONSTRAINT "meeting_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meeting" ADD CONSTRAINT "meeting_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
