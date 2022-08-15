// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../utils/prisma.js";

import { setCookie } from "../../utils/cookies";


const checkPassword = async (body, user) => {
  if (body.password === user.password) return true;
  return false;
};

const checkUsername = async (body) => {
  const { email, password } = body;

  const student = await prisma.student.findUnique({
    where: {
      email,
    },
  });
  if (student) return student

  const parent = await prisma.parent.findUnique({
    where: {
      email,
    },
  });
  if (parent) return parent;

  const mentor = await prisma.mentor.findUnique({
    where: {
      email,
    },
  });
  if (mentor) return mentor;

  return null;
};

export default async function handler(req, res) {
  const body = req.body;

  console.log("body: ", body);

  if (!body.email || !body.password) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Email or password not inputted" });
  }

  // TODO: Additional backend/serverside validation for valid email, username, and password

  const user = await checkUsername(body);
  if (!user) res.status(403).json({ data: "username does not exist" });

  const correctPassword = await checkPassword(body, user);
  if (!correctPassword) res.status(403).json({ data: "incorrect password", login: false });
  else {
    setCookie(res, 'userAuth', 'sample')
    res.status(200).json({ data: "password successful", login: true });
  }
}
