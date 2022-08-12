// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma.js';

const createStudent = async (body) => {
  await prisma.student.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      email: "sample@sampleii.com",
      gradeLevel: 9,
      password: "password",
      school: "sample",
      why: "sample",
    },
  });
}

export default function handler(req, res) {
  const body = req.body;

  // console.log('body: ', body)

  if (!body.firstName || !body.lastName) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }

  createStudent(body);

  res.status(200).json({ data: `${body.firstName} ${body.lastName}`})
}
