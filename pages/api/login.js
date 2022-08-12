// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma.js';

// const createStudent = async (body) => {
//   await prisma.student.create({
//     data: {
//       firstName: body.firstName,
//       lastName: body.lastName,
//       email: "sample@sampleii.com",
//       gradeLevel: 9,
//       password: "password",
//       school: "sample",
//       why: "sample",
//     },
//   });
// }

const checkPassword = async (body) => {
  const student = await prisma.student.findUnique({
    where: {
      email: body.email
    }
  })

  console.log(student);
}

// // createStudent(body);

export default function handler(req, res) {
  const body = req.body;

  console.log('body: ', body)

  if (!body.email || !body.password) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Email or password not inputted' })
  }

  checkPassword(body);

  res.status(200).json({ data: `${body.firstName} ${body.lastName}`})
}
