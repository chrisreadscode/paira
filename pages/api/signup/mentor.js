import prisma from "../../../utils/prisma.js";
import { Prisma } from "@prisma/client";

export default async function handler(req, res) {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const email = req.body.mentor_email;
  const educationLevel = req.body.level_of_education;
  const university = req.body.colleges_attended;
  const howQuestion = req.body.how_question;

  try {
    const mentor = await prisma.mentor.create({
      data: {
        firstName,
        lastName,
        email,
        educationLevel,
        university,
        howQuestion,
        bio: "sample",
        location: "sample",
        password: "sample",
        profileImage: "sample",
        speciality: "sample",
      },
    });

    console.log(mentor);
    res.status(200).json({ data: "application submitted", signup: true });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email."
        );
        res
          .status(409)
          .json({
            data: "username already exists, please kindly choose another username",
            signup: false
          });
      }
    }
    // throw(e)
  }
}
